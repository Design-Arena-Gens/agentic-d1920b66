export default function Page() {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <a className="logo" href="#">
            <img src="/logo.svg" alt="Vos Arkana logo" />
            <span>Vos Arkana</span>
          </a>
          <nav style={{ display: 'flex', gap: 10 }}>
            <a className="link" href="#features">Features</a>
            <a className="link" href="#why">Why</a>
            <a className="link" href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container hero">
            <div>
              <div className="badge" aria-label="Early access">
                <span className="kicker">Early Access</span>
                <span>Request an invite</span>
              </div>
              <h1 className="title">
                Unveil <span>Hidden Value</span> in Your Knowledge
              </h1>
              <p className="subtitle">
                Vos Arkana transforms scattered knowledge into a living system of intelligence?
                extract insights, automate workflows, and align teams with clarity.
              </p>
              <div className="hero-cta" style={{ marginTop: 18 }}>
                <a className="btn" href="mailto:hello@vosarkana.com?subject=Vos%20Arkana%20Early%20Access">
                  Request Early Access
                </a>
                <a className="btn secondary" href="#features">Explore Features</a>
              </div>
            </div>

            <div className="illustration">
              <div className="illus-wrap">
                <div className="illus-cell">
                  <h4 className="kicker">Ingest</h4>
                  <p>Connect docs, chats, wikis, and data sources securely.</p>
                  <div className="illus-caption">GDrive ? Slack ? Notion ? GitHub</div>
                </div>
                <div className="illus-cell">
                  <h4 className="kicker">Understand</h4>
                  <p>Semantic indexing and graph linking reveal true context.</p>
                  <div className="illus-caption">RAG ? Vectors ? Knowledge Graph</div>
                </div>
                <div className="illus-cell">
                  <h4 className="kicker">Act</h4>
                  <p>Generate briefs, decisions, and actions with traceability.</p>
                  <div className="illus-caption">Agents ? Playbooks ? Audits</div>
                </div>
                <div className="illus-cell">
                  <h4 className="kicker">Align</h4>
                  <p>Shared views keep teams focused and accountable.</p>
                  <div className="illus-caption">Workstreams ? Dashboards</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <p className="kicker">Platform</p>
            <h2 className="title">Everything you need to turn knowledge into action</h2>
            <div className="grid features" style={{ marginTop: 18 }}>
              <article className="card feature">
                <h3>Unified Knowledge Graph</h3>
                <p>Map people, concepts, and artifacts into an evolving graph for instant discovery.</p>
              </article>
              <article className="card feature">
                <h3>Retrieval-Augmented Generation</h3>
                <p>Grounded answers with citations from your trusted sources?no hallucinations.</p>
              </article>
              <article className="card feature">
                <h3>Agentic Workflows</h3>
                <p>Compose safe, auditable automations to draft, review, and ship outcomes.</p>
              </article>
              <article className="card feature">
                <h3>Granular Governance</h3>
                <p>Row-level permissions and data residency built for modern compliance.</p>
              </article>
              <article className="card feature">
                <h3>Observability by Design</h3>
                <p>Full traces, metrics, and human-in-the-loop feedback to improve quality.</p>
              </article>
              <article className="card feature">
                <h3>Private by Default</h3>
                <p>Your data never trains shared models. Bring your own keys and clouds.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="why" className="section">
          <div className="container card">
            <p className="kicker">Why Vos Arkana</p>
            <h2 className="title">Clarity, speed, and confidence?without chaos</h2>
            <p className="subtitle">
              Stop losing time to silos and search. Vos Arkana makes knowledge liquid, decisions traceable, and work compounding.
            </p>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 18, gap: 16 }}>
              <div>
                <h3>Faster onboarding</h3>
                <p className="illus-caption">Ramp teams in days, not months.</p>
              </div>
              <div>
                <h3>Better decisions</h3>
                <p className="illus-caption">Evidence-first briefs and transparent tradeoffs.</p>
              </div>
              <div>
                <h3>Operational leverage</h3>
                <p className="illus-caption">Automate the boring, amplify the expert.</p>
              </div>
              <div>
                <h3>Institutional memory</h3>
                <p className="illus-caption">What you learn compounds over time.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cta">
            <span className="kicker">Get started</span>
            <h3>Bring Vos Arkana to your team</h3>
            <p className="subtitle">We?re inviting a limited set of design partners. Secure your spot.</p>
            <div style={{ height: 8 }} />
            <a className="btn" href="mailto:hello@vosarkana.com?subject=Vos%20Arkana%20Early%20Access">Request Early Access</a>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <p className="kicker">FAQ</p>
            <div className="grid" style={{ gap: 14 }}>
              <details className="card">
                <summary><strong>How is my data secured?</strong></summary>
                <p>We isolate customer data, support private deployments, and never train shared models on your content.</p>
              </details>
              <details className="card">
                <summary><strong>Do you integrate with our stack?</strong></summary>
                <p>We support common tools out of the box and offer APIs for custom sources.</p>
              </details>
              <details className="card">
                <summary><strong>What does implementation look like?</strong></summary>
                <p>We start with a brief discovery, connect sources, and stand up guided workflows in weeks.</p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>? {new Date().getFullYear()} Vos Arkana</span>
          <a href="mailto:hello@vosarkana.com">Contact</a>
        </div>
      </footer>
    </>
  );
}
