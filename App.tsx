import React, { useMemo, useState } from 'react';

function App() {
  const [activeDemo, setActiveDemo] = useState('intake');
  const [demoLog, setDemoLog] = useState<string[]>([
    'Demo ready. Select a module to begin.',
  ]);
  const [intakeStatus, setIntakeStatus] = useState('Waiting for intake.');
  const [auditScore, setAuditScore] = useState(92);
  const [riskBand, setRiskBand] = useState('Low');
  const [demoRunning, setDemoRunning] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [tourRunning, setTourRunning] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [activeSignal, setActiveSignal] = useState('integrity');

  const demoModules = useMemo(
    () => [
      { id: 'intake', label: 'Intake & Seal' },
      { id: 'anchors', label: 'Evidence Anchors' },
      { id: 'admissibility', label: 'Admissibility Audit' },
      { id: 'integrations', label: 'Integrations' },
      { id: 'security', label: 'Security & Trust' },
      { id: 'roi', label: 'ROI Snapshot' },
    ],
    [],
  );

  const addLog = (message: string) => {
    setDemoLog((prev) => [...prev.slice(-5), message]);
  };

  const demoTimeline = [
    'Ingest exhibits and generate hashes.',
    'Lock chain of custody with deterministic sealing.',
    'Anchor key claims to verified citations.',
    'Run admissibility audit and risk scoring.',
    'Export audit-ready report with trace.',
  ];

  const guidedSteps = [
    { title: 'Run Intake', detail: 'Hash Exhibit_04.pdf and seal custody.' },
    { title: 'Anchor Claims', detail: 'Attach citations to admissible facts.' },
    { title: 'Attorney Review Mode', detail: 'Human approval required for liability.' },
    { title: 'Audit Check', detail: 'Verify anchors, custody, and export integrity.' },
    { title: 'Generate Report', detail: 'Export traceable audit output.' },
  ];

  const signalCards = [
    {
      id: 'integrity',
      title: 'Integrity by design',
      detail: 'Hash lineage, sealed custody, immutable audit trail.',
    },
    {
      id: 'admissibility',
      title: 'Court-ready outputs',
      detail: 'Every claim is anchored. Every export is traceable.',
    },
    {
      id: 'speed',
      title: '10x discovery velocity',
      detail: 'Deterministic automation removes manual bottlenecks.',
    },
  ];

  const runDemoSequence = () => {
    if (demoRunning) return;
    setDemoRunning(true);
    setDemoStep(0);
    addLog('Demo sequence started.');
    runIntake();
    const interval = setInterval(() => {
      setDemoStep((prev) => {
        const next = prev + 1;
        addLog(`Step ${next}: ${demoTimeline[next - 1]}`);
        if (next >= demoTimeline.length) {
          clearInterval(interval);
          setDemoRunning(false);
          setAuditScore(97);
          setRiskBand('Very low');
          addLog('Demo sequence complete. Audit score updated.');
        }
        return next;
      });
    }, 900);
  };

  const runGuidedTour = () => {
    if (tourRunning) return;
    setTourRunning(true);
    setTourStep(0);
    addLog('Guided investigation started.');
    const interval = setInterval(() => {
      setTourStep((prev) => {
        const next = prev + 1;
        if (next >= guidedSteps.length) {
          clearInterval(interval);
          setTourRunning(false);
          addLog('Guided investigation complete.');
          return guidedSteps.length;
        }
        addLog(`Tour step: ${guidedSteps[next].title}.`);
        return next;
      });
    }, 600);
  };

  const runIntake = () => {
    setIntakeStatus('Hashing exhibits and sealing custody...');
    addLog('Intake started: hashing exhibits.');
    setTimeout(() => {
      setIntakeStatus('Exhibits sealed. Integrity hash stored.');
      addLog('Intake complete: custody sealed and verified.');
    }, 600);
  };

  const runAudit = () => {
    setAuditScore(96);
    setRiskBand('Very low');
    addLog('Admissibility audit complete: 96/100.');
  };

  const runSecurity = () => {
    addLog('Security scan verified guardrails + audit trail.');
  };

  const evidenceAnchors = [
    {
      id: 'E-104',
      label: 'Medication timeline',
      source: 'Exhibit 04 • Page 18',
      status: 'Verified',
    },
    {
      id: 'E-211',
      label: 'Vitals anomaly window',
      source: 'Exhibit 11 • Page 6',
      status: 'Verified',
    },
    {
      id: 'E-332',
      label: 'Consent discrepancy',
      source: 'Exhibit 19 • Page 3',
      status: 'Flagged',
    },
  ];

  return (
    <div className="min-h-screen bg-lexi-ink text-lexi-mist font-sans selection:bg-lexi-sun selection:text-lexi-ink">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-lexi-ink/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-lexi-sun/90 shadow-[0_0_30px_rgba(246,191,77,0.45)]" />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-lexi-sun">LexiPro</p>
              <p className="text-xs text-lexi-slate">Forensic OS</p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.3em] text-lexi-slate md:flex">
            <a href="#pillars" className="hover:text-lexi-mist">Pillars</a>
            <a href="#trust" className="hover:text-lexi-mist">Trust</a>
            <a href="#demo" className="hover:text-lexi-mist">Demo</a>
            <a href="#proof" className="hover:text-lexi-mist">Proof</a>
            <a href="#why-now" className="hover:text-lexi-mist">Why Now</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-lexi-sun px-4 py-2 text-xs uppercase tracking-[0.3em] text-lexi-sun transition hover:bg-lexi-sun hover:text-lexi-ink"
          >
            Request Demo
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 lexi-sky" />
          <div className="absolute inset-0 opacity-20 lexi-grid" />
          <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-lexi-aqua/40 blur-3xl" />
          <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-lexi-sun/30 blur-3xl" />
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-20 pt-20 md:grid-cols-[1.2fr_0.8fr] md:pb-32 md:pt-28">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-lexi-sun">
                Evidence bound. Audit ready. Acquisition grade.
              </div>
              <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.35em] text-lexi-slate" aria-label="Deterministic guarantee badges">
                {[
                  'Zero-probabilistic output',
                  '100% grounded output',
                  'Hallucination-free architecture',
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 bg-lexi-ink/70 px-3 py-1"
                    aria-label={badge}
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">
                We make legal AI admissible.
              </h1>
              <p className="text-lg text-lexi-slate md:text-xl">
                LexiPro converts evidence into deterministic, defensible outputs.
                This demo is the product story — concise, credible, and built for diligence.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#pillars"
                  className="rounded-full bg-lexi-sun px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-lexi-ink transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(246,191,77,0.35)]"
                >
                  See the pillars
                </a>
                <a
                  href="#demo"
                  className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-lexi-mist transition hover:border-white/40"
                >
                  Demo map
                </a>
                <button
                  onClick={runDemoSequence}
                  className="rounded-full border border-lexi-sun/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-lexi-sun transition hover:border-lexi-sun hover:bg-lexi-sun hover:text-lexi-ink"
                >
                  Run demo sequence
                </button>
              </div>
              <div className="grid gap-4 pt-4 md:grid-cols-3">
                {signalCards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => setActiveSignal(card.id)}
                    className={`rounded-2xl border px-4 py-4 text-left text-sm transition ${
                      activeSignal === card.id
                        ? 'border-lexi-sun/60 bg-lexi-sun/10 text-lexi-mist'
                        : 'border-white/10 bg-white/5 text-lexi-slate hover:border-white/30'
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-lexi-sun">{card.title}</p>
                    <p className="mt-2">{card.detail}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur float-slow">
              <div className="absolute inset-0 rounded-3xl border border-white/5" />
              <div className="space-y-6">
                <p className="text-xs uppercase tracking-[0.4em] text-lexi-slate">Deterministic guarantees</p>
                <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.35em] text-lexi-slate" aria-label="Deterministic guarantee badges">
                  {[
                    'Zero-probabilistic output',
                    '100% grounded output',
                    'Hallucination-free architecture',
                    'Evidence-bound reasoning',
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/15 bg-lexi-ink/70 px-3 py-1"
                      aria-label={badge}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-lexi-slate">
                  Deterministic input/output. Identical evidence yields identical results.
                </p>
                <div className="grid grid-cols-2 gap-3 text-center">
                  {[
                    { label: 'Case time saved', value: '214h' },
                    { label: 'Audit readiness', value: '97%' },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-lexi-ink/70 px-3 py-4"
                    >
                      <p className="text-lg font-semibold text-white">{metric.value}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-lexi-slate">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-lexi-sun/40 bg-lexi-ink/70 text-[10px] uppercase tracking-[0.3em] text-lexi-sun seal-ring">
                  <div className="absolute inset-2 rounded-full seal-scan" />
                  <span className="relative z-10">Seal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pillars" className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-lexi-sun">Three pillars</p>
              <h2 className="font-display text-3xl text-white md:text-5xl">The minimum viable proof.</h2>
            </div>
            <p className="max-w-lg text-sm text-lexi-slate">
              Everything else is noise. These three pillars are what make the outputs admissible.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: 'Evidence Integrity',
                detail: 'Chain of custody, hash lineage, and immutable sealing for every exhibit.',
              },
              {
                title: 'Bounded Reasoning',
                detail: 'No claim without a cited anchor. Unverified assertions are blocked.',
              },
              {
                title: 'Auditability',
                detail: 'Every step is logged with deterministic context hashes and timestamps.',
              },
            ].map((pillar, index) => (
              <article
                key={pillar.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/30"
              >
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-lexi-aqua/20 blur-2xl" />
                <p className="text-xs uppercase tracking-[0.35em] text-lexi-slate">Pillar {index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm text-lexi-slate">{pillar.detail}</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-lexi-sun transition group-hover:w-20" />
              </article>
            ))}
          </div>
        </section>

        <section id="trust" className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="rounded-[2.5rem] border border-white/10 bg-lexi-panel p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-lexi-sun">Trust signals</p>
                <h2 className="font-display text-3xl text-white md:text-4xl">
                  Transparent by design.
                </h2>
              </div>
              <p className="max-w-md text-sm text-lexi-slate">
                Built for legal diligence: reproducible output, auditable logs, and technical
                transparency from intake to export.
              </p>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-lexi-ink/70 px-6 py-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-lexi-slate">
                    Designed for
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-lexi-slate">
                    {[
                      'SOC 2 Type II',
                      'GDPR',
                      'ABA Model Rule 1.1',
                      'FRE 902(13)/(14)',
                      'BYOK',
                      'Data residency controls',
                      'SSO / RBAC',
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-lexi-ink/80 px-3 py-1"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-lexi-ink/70 px-6 py-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-lexi-slate">Methodology</p>
                  <p className="mt-3 text-sm text-lexi-slate">
                    Merkle-tree hashing locks chain-of-custody integrity. Every action emits a
                    deterministic audit hash, producing a tamper-evident ledger that is verifiable
                    on demand.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-lexi-ink/70 px-6 py-5">
                <p className="text-xs uppercase tracking-[0.3em] text-lexi-slate">
                  Audit trail snapshot
                </p>
                <div className="mt-4 space-y-3 text-xs text-lexi-mist font-mono">
                  {[
                    'EVENT 001: Intake: Exhibit_04.pdf sealed',
                    'EVENT 002: Hash: 9f3a...c1d8 stored',
                    'EVENT 003: Anchor: Claim E-104 linked',
                    'EVENT 004: Export: Audit report signed',
                  ].map((line) => (
                    <div
                      key={line}
                      className="rounded-xl border border-white/10 bg-lexi-ink/80 px-3 py-2"
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="rounded-[2.5rem] border border-white/10 bg-lexi-panel p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-lexi-sun">Live demo</p>
                <h2 className="font-display text-3xl text-white md:text-4xl">
                  Walk through the real modules.
                </h2>
              </div>
              <p className="max-w-md text-sm text-lexi-slate">
                These interactions mirror the working modules in the LexiPro app. Each action
                updates an audit trail and reinforces the pillars.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {demoModules.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => {
                    setActiveDemo(mod.id);
                    addLog(`Module opened: ${mod.label}.`);
                  }}
                  className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.3em] transition ${
                    activeDemo === mod.id
                      ? 'border-lexi-sun bg-lexi-sun text-lexi-ink'
                      : 'border-white/15 text-lexi-mist hover:border-white/40'
                  }`}
                >
                  {mod.label}
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-lexi-ink/70 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-lexi-sun">Guided investigation</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    Interactive tour of deterministic intake.
                  </h3>
                  <p className="mt-2 text-sm text-lexi-slate">
                    A scripted sandbox that mimics the real product. Same input, same output,
                    every time.
                  </p>
                </div>
                <button
                  onClick={runGuidedTour}
                  className="rounded-full border border-lexi-sun/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-lexi-sun transition hover:border-lexi-sun hover:bg-lexi-sun hover:text-lexi-ink"
                >
                  {tourRunning ? 'Running tour...' : 'Run guided tour'}
                </button>
              </div>

              <div
                className={`relative mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] tour-stage ${
                  tourRunning ? 'tour-running' : ''
                }`}
              >
                <div className="tour-cursor" aria-hidden="true" />
                <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-lexi-slate">Inputs</p>
                  <div className="grid gap-2">
                    {['Exhibit_04.pdf', 'Vitals_Chart.csv', 'Consent_Form.pdf'].map((file) => (
                      <div
                        key={file}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-lexi-ink/70 px-3 py-2 text-xs text-lexi-mist"
                      >
                        <span>{file}</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-lexi-slate">
                          Ready
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-full bg-lexi-sun px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-lexi-ink"
                  >
                    Run intake
                  </button>
                  <div className="rounded-xl border border-white/10 bg-lexi-ink/70 px-3 py-2 text-xs text-lexi-slate">
                    Exhibit hash:
                    <span className="ml-2 font-mono text-lexi-mist">9f3a...c1d8</span>
                  </div>
                </div>

                <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-lexi-slate">Outputs</p>
                  <div className="grid grid-cols-2 gap-2 text-[10px] uppercase tracking-[0.3em] text-lexi-slate">
                    <div className="rounded-lg border border-white/10 bg-lexi-ink/70 px-2 py-2 text-center">
                      <span className="text-lexi-sun status-pulse">PASS</span>
                      <p className="mt-1">Anchor check</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-lexi-ink/70 px-2 py-2 text-center">
                      <span className="text-lexi-sun status-pulse">VERIFIED</span>
                      <p className="mt-1">Custody seal</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {guidedSteps.map((step, index) => (
                      <div
                        key={step.title}
                        className={`tour-step flex items-start gap-3 rounded-xl border border-white/10 bg-lexi-ink/70 px-3 py-3 text-xs text-lexi-mist ${
                          tourStep >= index ? 'tour-step-active' : ''
                        }`}
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-lexi-sun" />
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.3em] text-lexi-sun">
                            {step.title}
                          </p>
                          <p className="mt-1 text-xs text-lexi-slate">{step.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid gap-3 rounded-xl border border-white/10 bg-lexi-ink/70 px-3 py-3 text-xs text-lexi-mist">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-lexi-slate">
                      Attorney review mode
                    </p>
                    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <span>AI suggestion: Fact E-211</span>
                      <span className="font-mono text-lexi-slate">Confidence 0.98</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 rounded-full border border-lexi-sun/40 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-lexi-sun">
                        Approve
                      </button>
                      <button className="flex-1 rounded-full border border-white/20 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-lexi-mist">
                        Reject
                      </button>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-lexi-slate">
                      Action logged to audit trail
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-lexi-ink/70 px-3 py-3 text-xs text-lexi-slate">
                    Audit log:
                    <span className="ml-2 font-mono text-lexi-mist">
                      2026-02-01T06:12:20Z
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
              <div className="rounded-3xl border border-white/10 bg-lexi-ink/70 p-6">
                {activeDemo === 'intake' && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-lexi-sun">Intake & Seal</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        Evidence intake with chain-of-custody sealing.
                      </h3>
                      <p className="mt-3 text-sm text-lexi-slate">
                        Mirrors the Intake module. Every file is hashed, logged, and sealed before
                        analysis begins.
                      </p>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      {[
                        'Exhibit_04.pdf',
                        'Vitals_Chart.csv',
                        'Deposition_Notes.pdf',
                        'Consent_Form.pdf',
                      ].map((file) => (
                        <div
                          key={file}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-lexi-mist"
                        >
                          {file}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={runIntake}
                        className="rounded-full bg-lexi-sun px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-lexi-ink"
                      >
                        Run intake
                      </button>
                      <span className="text-sm text-lexi-slate">{intakeStatus}</span>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-lexi-ink/80 px-4 py-3 text-xs uppercase tracking-[0.3em] text-lexi-slate">
                      {demoRunning ? 'Demo running...' : 'Ready for next action.'}
                    </div>
                  </div>
                )}

                {activeDemo === 'anchors' && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-lexi-sun">Evidence Anchors</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        Deterministic citations for every claim.
                      </h3>
                      <p className="mt-3 text-sm text-lexi-slate">
                        Mirrors Exhibit Manager + Case Assistant outputs with anchored evidence
                        snippets.
                      </p>
                    </div>
                    <div className="grid gap-4">
                      {evidenceAnchors.map((anchor) => (
                        <div
                          key={anchor.id}
                          className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                        >
                          <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-lexi-slate">
                            <span>{anchor.id}</span>
                            <span>{anchor.status}</span>
                          </div>
                          <p className="mt-2 text-lg text-white">{anchor.label}</p>
                          <p className="mt-1 text-xs text-lexi-slate">{anchor.source}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeDemo === 'admissibility' && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-lexi-sun">
                        Admissibility Audit
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        Automated checklist with audit scoring.
                      </h3>
                      <p className="mt-3 text-sm text-lexi-slate">
                        Mirrors the Admissibility module used for FRE 902 readiness and export
                        verification.
                      </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {[
                        'Hash lineage verified',
                        'Anchors required for claims',
                        'Audit trail intact',
                        'Export signed + time-stamped',
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-lexi-mist"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={runAudit}
                        className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-lexi-mist hover:border-white/40"
                      >
                        Run audit
                      </button>
                      <div className="rounded-full bg-lexi-ink/80 px-4 py-2 text-sm text-lexi-mist">
                        Score {auditScore}/100 • Risk {riskBand}
                      </div>
                    </div>
                  </div>
                )}

                {activeDemo === 'integrations' && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-lexi-sun">Integrations</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        Deterministic output, injected into existing workflows.
                      </h3>
                      <p className="mt-3 text-sm text-lexi-slate">
                        Export proof packs directly into the tools legal teams already use.
                      </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      {[
                        { label: 'Export to Relativity', detail: 'E-discovery packet with citations.' },
                        { label: 'Save to iManage', detail: 'Matter workspace sync with audit trail.' },
                        { label: 'Sync with Clio', detail: 'Case timeline and verified notes.' },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-lexi-mist"
                        >
                          <p className="text-xs uppercase tracking-[0.3em] text-lexi-sun">{item.label}</p>
                          <p className="mt-2 text-sm text-lexi-slate">{item.detail}</p>
                          <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-lexi-slate">
                            <span>Status</span>
                            <span className="text-lexi-sun status-pulse">READY</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-lexi-ink/70 px-4 py-4 text-xs text-lexi-slate">
                      Integration output remains evidence-bound and inherits the same audit ledger.
                    </div>
                  </div>
                )}

                {activeDemo === 'security' && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-lexi-sun">Security & Trust</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        Guardrails + audit trails visible.
                      </h3>
                      <p className="mt-3 text-sm text-lexi-slate">
                        Mirrors the Security Audit module with system checks and guardrail telemetry.
                      </p>
                    </div>
                    <div className="grid gap-4">
                      {[
                        'AIGIS policy enforced',
                        'Immutable audit ledger active',
                        'Release gate armed',
                        'Workspace boundary locked',
                        'BYOK encryption supported',
                        'Data residency controls',
                        'SSO / RBAC enforced',
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-lexi-mist"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={runSecurity}
                      className="rounded-full bg-lexi-sun px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-lexi-ink"
                    >
                      Run security check
                    </button>
                  </div>
                )}

                {activeDemo === 'roi' && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-lexi-sun">ROI Snapshot</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        Outcome clarity for stakeholders.
                      </h3>
                      <p className="mt-3 text-sm text-lexi-slate">
                        Mirrors the ROI dashboard with time saved, risk reduction, and readiness.
                      </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      {[
                        { label: 'Hours saved', value: '214' },
                        { label: 'Risk reduction', value: '38%' },
                        { label: 'Audit readiness', value: '96%' },
                      ].map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center"
                        >
                          <p className="text-3xl font-semibold text-white">{metric.value}</p>
                          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-lexi-slate">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                      {[
                        { label: 'Billable hours saved', value: '14.5' },
                        { label: 'Non-billable overhead reduced', value: '82%' },
                        { label: 'Cost recovery', value: '$4,200' },
                      ].map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-white/10 bg-lexi-ink/70 px-4 py-6 text-center"
                        >
                          <p className="text-3xl font-semibold text-white">{metric.value}</p>
                          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-lexi-slate">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <aside className="rounded-3xl border border-white/10 bg-lexi-ink/70 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-lexi-sun">Audit Trail</p>
                <div className="mt-4 space-y-2 text-xs text-lexi-slate">
                  {demoTimeline.map((step, index) => (
                    <div
                      key={step}
                      className={`rounded-xl border px-3 py-2 ${
                        index < demoStep
                          ? 'border-lexi-sun/50 bg-lexi-sun/10 text-lexi-mist'
                          : 'border-white/10 bg-white/5'
                      }`}
                    >
                      Step {index + 1}: {step}
                    </div>
                  ))}
                </div>
                <div className="mt-4 space-y-3 text-sm text-lexi-mist">
                  {demoLog.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.3em] text-lexi-slate">
                  Output mode: evidence-bound
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="before-after" className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="rounded-[2.5rem] border border-white/10 bg-lexi-panel p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-lexi-sun">Before / After</p>
                <h2 className="font-display text-3xl text-white md:text-4xl">
                  From chaos to admissible proof.
                </h2>
              </div>
              <p className="max-w-md text-sm text-lexi-slate">
                A quick visual split that shows what changes when the system enforces evidence,
                custody, and auditability.
              </p>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-lexi-slate">Before</p>
                <h3 className="mt-3 text-xl font-semibold text-white">Discovery chaos</h3>
                <div className="mt-6 space-y-4 text-sm text-lexi-slate">
                  <div className="rounded-2xl border border-white/10 bg-lexi-ink/70 px-4 py-3">
                    Unstructured exhibits, inconsistent logs.
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-lexi-ink/70 px-4 py-3">
                    No consistent citations or custody chain.
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-lexi-ink/70 px-4 py-3">
                    Review time balloons; admissibility uncertain.
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-lexi-sun/40 bg-lexi-ink/70 p-6 pulse-glow">
                <p className="text-xs uppercase tracking-[0.3em] text-lexi-sun">After</p>
                <h3 className="mt-3 text-xl font-semibold text-white">Deterministic proof</h3>
                <div className="mt-6 space-y-4 text-sm text-lexi-mist">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    Exhibits hashed and sealed with custody continuity.
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    Every claim anchored to verified citations.
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    Audit‑ready exports delivered in minutes.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proof" className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-lexi-sun">Proof signals</p>
              <h2 className="font-display text-3xl text-white md:text-4xl">Everything is measurable.</h2>
              <p className="text-sm text-lexi-slate">
                The demo makes the pillars visible with a clear evidence trail, integrity checks,
                and repeatable outputs. It is designed for diligence walkthroughs and review sessions.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                'Every claim cites a verified anchor',
                'Hash lineage is logged on each step',
                'Audit events are immutable and timestamped',
                'No hidden or implied data sources',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-lexi-mist"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proof-pack" className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="rounded-[2.5rem] border border-white/10 bg-lexi-panel p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-lexi-sun">Proof pack</p>
                <h2 className="font-display text-3xl text-white md:text-4xl">
                  Artifacts an acquirer can verify.
                </h2>
              </div>
              <p className="max-w-md text-sm text-lexi-slate">
                These are the specific outputs that convert demo confidence into diligence clarity.
                All items are deterministic and reproducible.
              </p>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="space-y-4">
                {[
                  {
                    title: 'Forensic Audit Report',
                    detail: 'Signed export with citations, audit trail, and integrity summary.',
                  },
                  {
                    title: 'Integrity Certificate',
                    detail: 'Hash lineage and verification record for custody continuity.',
                  },
                  {
                    title: 'Evidence Trace Pack',
                    detail: 'Anchor map, exhibit index, and audit ledger snapshot.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-lexi-ink/70 px-6 py-6"
                  >
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm text-lexi-slate">{item.detail}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-white/10 bg-lexi-ink/70 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-lexi-sun">Sample artifact</p>
                  <span className="rounded-full border border-lexi-sun/40 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-lexi-sun">
                    Verified
                  </span>
                </div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">Integrity Certificate</p>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-lexi-slate">SHA-256</p>
                  </div>
                  <div className="mt-4 space-y-2 text-xs text-lexi-slate">
                    <div className="flex justify-between">
                      <span>Exhibit hash</span>
                      <span className="font-mono">9f3a...c1d8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Anchor set</span>
                      <span>42 citations</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Audit timestamp</span>
                      <span className="font-mono">UTC 03:26:15</span>
                    </div>
                  </div>
                  <div className="mt-4 h-1.5 w-full rounded-full bg-white/10">
                    <div className="h-1.5 w-5/6 rounded-full bg-lexi-sun" />
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-lexi-slate">Audit excerpt</p>
                  <div className="mt-3 space-y-2 text-xs text-lexi-mist">
                    <div className="flex justify-between">
                      <span>Anchor verification</span>
                      <span className="text-lexi-sun status-pulse">PASS</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Custody continuity</span>
                      <span className="text-lexi-sun status-pulse">PASS</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Export integrity</span>
                      <span className="text-lexi-sun status-pulse">PASS</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-lexi-ink/80 px-4 py-3 text-xs uppercase tracking-[0.3em] text-lexi-slate">
                  <span>LexiPro Seal</span>
                  <span className="text-lexi-sun status-pulse">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-now" className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="rounded-[2.5rem] border border-white/10 bg-lexi-panel p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-lexi-sun">Why now</p>
                <h2 className="font-display text-3xl text-white md:text-4xl">
                  Legal AI needs admissibility, not hype.
                </h2>
              </div>
              <p className="max-w-md text-sm text-lexi-slate">
                Courts and enterprises require verifiable evidence trails. LexiPro turns AI output
                into admissible proof with custody, anchors, and auditability.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Pilot launch', value: '2 weeks' },
                { label: 'Stack integration', value: '45 days' },
                { label: 'Enterprise rollout', value: '90 days' },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-lexi-slate">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-lexi-panel">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-lexi-sun">Request the demo</p>
                <h2 className="font-display text-3xl text-white md:text-4xl">
                  Ready for an acquisition‑grade demo.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:demo@lexipro.ai"
                  className="rounded-full bg-lexi-sun px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-lexi-ink transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(246,191,77,0.35)]"
                >
                  Email demo@lexipro.ai
                </a>
                <a
                  href="#pillars"
                  className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-lexi-mist"
                >
                  Review pillars
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-lexi-ink">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-xs text-lexi-slate md:flex-row md:items-center md:justify-between">
          <span>LexiPro Forensic OS Demo</span>
          <span>Evidence bound. Audit ready. Deployment proven.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;


