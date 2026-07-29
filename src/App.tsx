import "./App.css";

type IconName =
  | "overview"
  | "pipeline"
  | "deployment"
  | "resource"
  | "settings"
  | "github"
  | "build"
  | "test"
  | "azure"
  | "check"
  | "clock"
  | "arrow"
  | "storage"
  | "connection";

interface IconProps {
  name: IconName;
  size?: number;
}

function Icon({ name, size = 20 }: IconProps) {
  const paths: Record<IconName, React.ReactNode> = {
    overview: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </>
    ),
    pipeline: (
      <>
        <circle cx="5" cy="12" r="2.5" />
        <circle cx="19" cy="5" r="2.5" />
        <circle cx="19" cy="19" r="2.5" />
        <path d="M7.5 12h4a5 5 0 0 0 5-5" />
        <path d="M7.5 12h4a5 5 0 0 1 5 5" />
      </>
    ),
    deployment: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
    resource: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.08V21h-4v-.08A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.08-.4H3v-4h.08A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.08V3h4v.08A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.3.35.5.7.6 1 .1.3.13.66.08 1H21v4h-.08A1.7 1.7 0 0 0 19.4 15Z" />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-6 0C6 0 4.8.5 4.8.5A5 5 0 0 0 4.7 4a5.4 5.4 0 0 0-1.5 3.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4" />
        <path d="M9 19c-3 .9-3-1.5-4-2" />
      </>
    ),
    build: (
      <>
        <path d="m14.7 6.3-3 3" />
        <path d="M7 17 4 20" />
        <path d="M15.7 3.3a5 5 0 0 0-6.4 6.4L3 16v5h5l6.3-6.3a5 5 0 0 0 6.4-6.4l-3 3-4-1-1-4 3-3Z" />
      </>
    ),
    test: (
      <>
        <path d="M9 3h6" />
        <path d="M10 9V3" />
        <path d="M14 9V3" />
        <path d="m8 9-4.5 9A2 2 0 0 0 5.3 21h13.4a2 2 0 0 0 1.8-3L16 9" />
        <path d="M7 15h10" />
      </>
    ),
    azure: (
      <>
        <path d="M9.5 3 4 12.5l4.5 5L16 21l4-3-7-15H9.5Z" />
        <path d="m4 12.5 9-1.5" />
        <path d="m8.5 17.5 4.5-6.5" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    storage: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
    connection: (
      <>
        <path d="M8 12h8" />
        <path d="M6 8H4a4 4 0 0 0 0 8h2" />
        <path d="M18 8h2a4 4 0 0 1 0 8h-2" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const pipelineSteps = [
  {
    icon: "github" as IconName,
    title: "Source",
    subtitle: "GitHub Repository",
    status: "Connected",
  },
  {
    icon: "build" as IconName,
    title: "Build",
    subtitle: "Install and compile",
    status: "Completed",
  },
  {
    icon: "test" as IconName,
    title: "Quality",
    subtitle: "Lint and validation",
    status: "Passed",
  },
  {
    icon: "azure" as IconName,
    title: "Deploy",
    subtitle: "Azure Static Website",
    status: "Successful",
  },
];

const deployments = [
  {
    version: "Build #24",
    branch: "main",
    message: "Update dashboard interface",
    status: "Successful",
    duration: "1m 42s",
    time: "5 minutes ago",
  },
  {
    version: "Build #23",
    branch: "main",
    message: "Configure Azure deployment",
    status: "Successful",
    duration: "1m 58s",
    time: "2 hours ago",
  },
  {
    version: "Build #22",
    branch: "main",
    message: "Add production build validation",
    status: "Successful",
    duration: "1m 31s",
    time: "Yesterday",
  },
];

function App() {
  return (
    <div className="application-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-symbol">
            <span />
            <span />
            <span />
          </div>

          <div>
            <strong>FlowForge</strong>
            <small>CI/CD Platform</small>
          </div>
        </div>

        <nav className="navigation">
          <p className="navigation-label">WORKSPACE</p>

          <button className="navigation-item active" type="button">
            <Icon name="overview" />
            Overview
          </button>

          <button className="navigation-item" type="button">
            <Icon name="pipeline" />
            Pipelines
            <span className="navigation-count">1</span>
          </button>

          <button className="navigation-item" type="button">
            <Icon name="deployment" />
            Deployments
          </button>

          <button className="navigation-item" type="button">
            <Icon name="resource" />
            Azure Resources
          </button>

          <p className="navigation-label secondary-label">MANAGEMENT</p>

          <button className="navigation-item" type="button">
            <Icon name="settings" />
            Settings
          </button>
        </nav>

        <div className="sidebar-user">
          <div className="user-avatar">KS</div>
          <div>
            <strong>Kasturi</strong>
            <span>Contributor</span>
          </div>
          <span className="user-online" />
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="breadcrumb">Projects / React Deployment</p>
            <h1>CI/CD Command Center-updated</h1>
          </div>

          <div className="topbar-actions">
            <span className="environment-badge">
              <span />
              Production Healthy
            </span>

            <button className="icon-button" type="button" aria-label="Settings">
              <Icon name="settings" />
            </button>

            <div className="topbar-avatar">KS</div>
          </div>
        </header>

        <section className="hero-card">
          <div className="hero-decoration decoration-one" />
          <div className="hero-decoration decoration-two" />

          <div className="hero-text">
            <span className="hero-label">REACT APPLICATION DELIVERY</span>

            <h2>
              Ship confidently with an
              <span> automated Azure pipeline.</span>
            </h2>

            <p>
              Every push to the main GitHub branch automatically triggers code
              validation, production build creation and deployment to Azure.
            </p>

            <div className="hero-actions">
              <button className="primary-button" type="button">
                <Icon name="pipeline" />
                Run pipeline
              </button>

              <button className="secondary-button" type="button">
                <Icon name="github" />
                View repository
              </button>
            </div>
          </div>

          <div className="pipeline-visual">
            <div className="visual-circle visual-circle-one" />
            <div className="visual-circle visual-circle-two" />

            <div className="code-window">
              <div className="window-header">
                <span />
                <span />
                <span />
                <p>azure-pipelines.yml</p>
              </div>

              <div className="code-content">
                <p>
                  <span className="code-purple">trigger:</span>
                  <span className="code-white"> main</span>
                </p>
                <p>
                  <span className="code-purple">pool:</span>
                </p>
                <p className="code-indent">
                  <span className="code-blue">vmImage:</span>
                  <span className="code-green"> ubuntu-latest</span>
                </p>
                <p>
                  <span className="code-purple">steps:</span>
                </p>
                <p className="code-indent">
                  <span className="code-blue">- script:</span>
                  <span className="code-green"> npm ci</span>
                </p>
                <p className="code-indent">
                  <span className="code-blue">- script:</span>
                  <span className="code-green"> npm run build</span>
                </p>
                <p className="code-indent">
                  <span className="code-blue">- task:</span>
                  <span className="code-green"> AzureCLI@2</span>
                </p>
              </div>

              <div className="code-status">
                <Icon name="check" size={18} />
                Pipeline completed successfully
              </div>
            </div>
          </div>
        </section>

        <section className="statistics-grid">
          <article className="statistic-card">
            <div className="statistic-icon purple">
              <Icon name="pipeline" />
            </div>
            <div>
              <span>Total pipelines</span>
              <strong>24</strong>
              <small className="positive">↑ 12% this month</small>
            </div>
          </article>

          <article className="statistic-card">
            <div className="statistic-icon green">
              <Icon name="check" />
            </div>
            <div>
              <span>Success rate</span>
              <strong>98.4%</strong>
              <small className="positive">↑ 3.2% improvement</small>
            </div>
          </article>

          <article className="statistic-card">
            <div className="statistic-icon blue">
              <Icon name="clock" />
            </div>
            <div>
              <span>Average duration</span>
              <strong>1m 47s</strong>
              <small>Last 30 deployments</small>
            </div>
          </article>

          <article className="statistic-card">
            <div className="statistic-icon orange">
              <Icon name="deployment" />
            </div>
            <div>
              <span>Last deployment</span>
              <strong>5 min</strong>
              <small className="positive">Production updated</small>
            </div>
          </article>
        </section>

        <div className="content-grid">
          <section className="dashboard-card pipeline-card">
            <div className="card-heading">
              <div>
                <span className="section-label">ACTIVE WORKFLOW</span>
                <h3>React production pipeline</h3>
              </div>

              <span className="success-badge">
                <Icon name="check" size={16} />
                Successful
              </span>
            </div>

            <div className="pipeline-flow">
              {pipelineSteps.map((step, index) => (
                <div className="pipeline-step-wrapper" key={step.title}>
                  <div className="pipeline-step">
                    <div className="pipeline-step-icon">
                      <Icon name={step.icon} size={24} />
                    </div>

                    <div>
                      <strong>{step.title}</strong>
                      <span>{step.subtitle}</span>
                    </div>

                    <small>
                      <Icon name="check" size={14} />
                      {step.status}
                    </small>
                  </div>

                  {index < pipelineSteps.length - 1 && (
                    <div className="pipeline-connector">
                      <Icon name="arrow" size={19} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pipeline-information">
              <div>
                <span>Triggered by</span>
                <strong>Kasturi pushed to main</strong>
              </div>

              <div>
                <span>Commit</span>
                <strong>8f27c4a</strong>
              </div>

              <div>
                <span>Started</span>
                <strong>Today, 12:42 PM</strong>
              </div>

              <div>
                <span>Total duration</span>
                <strong>1 minute 42 seconds</strong>
              </div>
            </div>
          </section>

          <section className="dashboard-card resources-card">
            <div className="card-heading">
              <div>
                <span className="section-label">INFRASTRUCTURE</span>
                <h3>Azure resources</h3>
              </div>

              <button className="text-button" type="button">
                View all
              </button>
            </div>

            <div className="resource-list">
              <article className="resource-item">
                <div className="resource-icon storage">
                  <Icon name="storage" />
                </div>
                <div>
                  <strong>Storage Account</strong>
                  <span>Hosts the React static website</span>
                </div>
                <span className="resource-status">Ready</span>
              </article>

              <article className="resource-item">
                <div className="resource-icon resource-group">
                  <Icon name="resource" />
                </div>
                <div>
                  <strong>Resource Group</strong>
                  <span>Contains related Azure resources</span>
                </div>
                <span className="resource-status">Active</span>
              </article>

              <article className="resource-item">
                <div className="resource-icon connection">
                  <Icon name="connection" />
                </div>
                <div>
                  <strong>Service Connection</strong>
                  <span>Authorizes Azure DevOps deployment</span>
                </div>
                <span className="resource-status">Secure</span>
              </article>
            </div>
          </section>
        </div>

        <section className="dashboard-card deployments-card">
          <div className="card-heading">
            <div>
              <span className="section-label">DEPLOYMENT HISTORY</span>
              <h3>Recent deployments</h3>
            </div>

            <button className="secondary-small-button" type="button">
              View deployment history
            </button>
          </div>

          <div className="deployment-table-wrapper">
            <table className="deployment-table">
              <thead>
                <tr>
                  <th>Pipeline</th>
                  <th>Commit message</th>
                  <th>Branch</th>
                  <th>Status</th>
                  <th>Duration</th>
                  <th>Completed</th>
                </tr>
              </thead>

              <tbody>
                {deployments.map((deployment) => (
                  <tr key={deployment.version}>
                    <td>
                      <strong>{deployment.version}</strong>
                    </td>
                    <td>{deployment.message}</td>
                    <td>
                      <span className="branch-badge">
                        <Icon name="pipeline" size={14} />
                        {deployment.branch}
                      </span>
                    </td>
                    <td>
                      <span className="table-success-status">
                        <Icon name="check" size={15} />
                        {deployment.status}
                      </span>
                    </td>
                    <td>{deployment.duration}</td>
                    <td>{deployment.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="page-footer">
          <span>CI/CD Learning Project</span>
          <p>React · GitHub · Azure DevOps · Azure Storage</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
