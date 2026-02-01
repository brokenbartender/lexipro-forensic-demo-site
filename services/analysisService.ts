import { EvidenceItem, AnalysisResult } from "../types";
import { analyzeEvidence as analyzeFallback } from "./geminiService";

type AiMode = "live" | "demo";

const AI_MODE = (import.meta.env.VITE_AI_MODE || "demo") as AiMode;
const AI_ENDPOINT = (import.meta.env.VITE_AI_ENDPOINT || "").trim();
const AI_DEMO_KEY = (import.meta.env.VITE_AI_DEMO_KEY || "").trim();

export const getAiMode = (): AiMode => {
  if (AI_MODE === "live" && AI_ENDPOINT) return "live";
  return "demo";
};

const parsePayload = (data: unknown): AnalysisResult | null => {
  if (!data || typeof data !== "object") return null;
  const root = data as Record<string, unknown>;
  const payload = (root.result && typeof root.result === "object" ? root.result : root) as Record<string, unknown>;
  if (
    typeof payload.summary === "string" &&
    typeof payload.liability === "string" &&
    typeof payload.reasoning === "string" &&
    Array.isArray(payload.statutes)
  ) {
    return {
      summary: payload.summary,
      liability: payload.liability,
      reasoning: payload.reasoning,
      statutes: payload.statutes.filter((item) => typeof item === "string") as string[],
    };
  }
  return null;
};

export const analyzeEvidence = async (evidence: EvidenceItem): Promise<AnalysisResult> => {
  if (getAiMode() === "live") {
    try {
      const response = await fetch(AI_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(AI_DEMO_KEY ? { "x-demo-key": AI_DEMO_KEY } : {}),
        },
        body: JSON.stringify({
          evidence: {
            id: evidence.id,
            type: evidence.type,
            timestamp: evidence.timestamp,
            content: evidence.content,
            title: evidence.title,
          },
        }),
      });

      if (response.ok) {
        const json = (await response.json()) as unknown;
        const parsed = parsePayload(json);
        if (parsed) return parsed;
      }
    } catch (error) {
      console.warn("Live AI call failed, falling back to demo engine.", error);
    }
  }

  return analyzeFallback(evidence);
};
