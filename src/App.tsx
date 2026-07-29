import './App.css'

const flowSteps = [
  {
    number: '01',
    title: 'Develop',
    description: 'Create and test the React application locally.',
  },
  {
    number: '02',
    title: 'Push',
    description: 'Commit the changes and push them to GitHub.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Azure DevOps validates and builds the application.',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'The production files are deployed to Azure Storage.',
  },
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container navbar">
          <div className="logo">
            <span className="logo-icon">CI</span>
            <div>
              <strong>React CI/CD</strong>
              <small>Learning Project</small>
            </div>
          </div>

          <span className="status">
            <span className="status-dot" />
            Deployment Active
          </span>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-content">
            <span className="tag">REACT • GITHUB • AZURE DEVOPS</span>

            <h1>
              Build and deploy React
              <span> automatically</span>
            </h1>

            <p>
              Every push to the GitHub main branch automatically starts the
              Azure DevOps pipeline, validates the code, builds the application,
              and deploys it to Azure Storage.
            </p>

            <a href="#flow" className="primary-button">
              View CI/CD Flow
            </a>
          </div>
        </section>

        <section className="flow-section" id="flow">
          <div className="container">
            <div className="section-heading">
              <span>HOW IT WORKS</span>
              <h2>Application delivery flow</h2>
              <p>
                From local development to a publicly available Azure website.
              </p>
            </div>

            <div className="flow-grid">
              {flowSteps.map((step) => (
                <article className="flow-card" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="resources-section">
          <div className="container resources-card">
            <div>
              <span className="section-label">AZURE RESOURCES</span>
              <h2>Simple and cost-effective architecture</h2>
            </div>

            <div className="resource-list">
              <div className="resource-item">
                <strong>Resource Group</strong>
                <span>Organizes all project resources</span>
              </div>

              <div className="resource-item">
                <strong>Storage Account</strong>
                <span>Stores the production React files</span>
              </div>

              <div className="resource-item">
                <strong>Service Connection</strong>
                <span>Securely connects Azure DevOps to Azure</span>
              </div>

              <div className="resource-item">
                <strong>YAML Pipeline</strong>
                <span>Automates validation, build, and deployment</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <span>CI/CD Learning Project</span>
          <span>React · GitHub · Azure DevOps · Azure Storage</span>
        </div>
      </footer>
    </div>
  )
}

export default App