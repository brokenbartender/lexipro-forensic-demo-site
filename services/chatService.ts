type ChatMode = "live" | "demo";

const CHAT_MODE = (import.meta.env.VITE_AI_MODE || "demo") as ChatMode;
const CHAT_ENDPOINT = (import.meta.env.VITE_AI_CHAT_ENDPOINT || "").trim();
const AI_DEMO_KEY = (import.meta.env.VITE_AI_DEMO_KEY || "").trim();

export const getChatMode = (): ChatMode => {
  if (CHAT_MODE === "live" && CHAT_ENDPOINT) return "live";
  return "demo";
};

const fallbackAnswer = (question: string): string => {
  const q = question.toLowerCase();
  if (q.includes("pillar") || q.includes("pillars")) {
    return "LexiPro is built on three pillars: Evidence Integrity (hash + custody), Bounded Reasoning (no claim without a cited anchor), and Auditability (deterministic logs for every step).";
  }
  if (q.includes("integrat") || q.includes("relativity") || q.includes("imanage") || q.includes("clio")) {
    return "Integrations export deterministic proof packs into existing legal workflows (Relativity, iManage, Clio). The demo simulates the export flow and audit confirmation.";
  }
  if (q.includes("roi") || q.includes("value") || q.includes("cost")) {
    return "The ROI snapshot shows measurable impact: 14.5 billable hours saved, 82% overhead reduced, and $4,200 cost recovery per matter.";
  }
  if (q.includes("security") || q.includes("trust") || q.includes("soc 2") || q.includes("sso")) {
    return "Trust signals include SOC 2 readiness, BYOK, SSO/RBAC, data residency controls, and a Merkle-tree hash ledger for chain-of-custody verification.";
  }
  if (q.includes("deterministic") || q.includes("hallucination")) {
    return "Outputs are evidence-bound: every claim is anchored to a source line. The system blocks unanchored responses and logs every step for auditability.";
  }
  if (q.includes("guided") || q.includes("tour")) {
    return "The Guided Investigation simulates intake, anchoring, attorney review, and audit checks. It is designed to show deterministic outputs without backend dependencies.";
  }
  return "LexiPro is a forensic OS that makes legal AI admissible: deterministic outputs, evidence anchoring, and a tamper-evident audit trail. Ask about pillars, integrations, security, or ROI.";
};

export const askAppQuestion = async (question: string): Promise<string> => {
  if (getChatMode() === "live") {
    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(AI_DEMO_KEY ? { "x-demo-key": AI_DEMO_KEY } : {}),
        },
        body: JSON.stringify({ question }),
      });
      if (response.ok) {
        const json = (await response.json()) as { answer?: string };
        if (json?.answer) return json.answer;
      }
    } catch (error) {
      console.warn("Live chat failed, falling back to demo answers.", error);
    }
  }
  return fallbackAnswer(question);
};
