import React, { useState } from "react";

const skills = [
  ["AWS", "EC2 • S3 • EBS • ECR • ECS • IAM • CloudWatch"],
  ["CI/CD", "Jenkins • Bamboo • GitHub Actions • CodePipeline"],
  ["Containers", "Docker • Amazon ECR • Amazon ECS"],
  ["Observability", "CloudWatch • Prometheus • Grafana • New Relic"],
  ["Infrastructure", "CloudFormation • Terraform • Linux"],
  ["DevOps", "Automation • Release management • Troubleshooting"]
];

const experience = [
  {
    period: "2021 — Present",
    company: "Majesco",
    role: "Senior Associate DevOps Engineer",
    text: "Working on cloud infrastructure, CI/CD automation, deployments, production support and DevOps operations."
  },
  {
    period: "Previous",
    company: "Vitech Systems Asia Pvt Ltd",
    role: "AWS DevOps Analyst",
    text: "Hands-on experience with AWS services, Docker, Jenkins, Bamboo and cloud deployment/support workflows."
  }
];

const projects = [
  {
    title: "AWS CI/CD Platform",
    tags: ["AWS", "Jenkins", "Bamboo", "Docker"],
    text: "Automated application build, containerization and deployment workflows with repeatable release processes."
  },
  {
    title: "Container Deployment",
    tags: ["ECR", "ECS", "CloudWatch"],
    text: "Container delivery flow from Docker image creation through Amazon ECR into ECS environments with monitoring."
  },
  {
    title: "Cloud Operations",
    tags: ["EC2", "S3", "IAM", "CloudFormation"],
    text: "Cloud operations, infrastructure troubleshooting, access management and deployment support across AWS workloads."
  }
];

function Node({ x, y, label, icon, active, onClick }) {
  return (
    <button
      className={`graph-node ${active ? "active" : ""}`}
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={onClick}
      aria-label={label}
    >
      <span className="node-icon">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

function App() {
  const [activeNode, setActiveNode] = useState("AWS");

  const nodeInfo = {
    AWS: "Cloud foundation: EC2, S3, EBS, IAM, ECR, ECS and CloudWatch.",
    Docker: "Containerization and image workflows.",
    CI_CD: "Jenkins, Bamboo, GitHub Actions and release automation.",
    ECS: "Container orchestration and deployment on AWS.",
    Monitor: "CloudWatch, Prometheus, Grafana and observability."
  };

  return (
    <div className="app">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav">
        <a className="brand" href="#home">AG<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="resume-btn" href="#contact">Let's connect ↗</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR DEVOPS OPPORTUNITIES</p>
            <h1>Abhilash<br /><span>Guntuka.</span></h1>
            <p className="hero-role">Senior Associate DevOps Engineer</p>
            <p className="hero-text">
              5+ years of hands-on experience building, automating and supporting
              cloud infrastructure and CI/CD delivery on AWS.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects">Explore my work <span>↓</span></a>
              <a className="ghost-btn" href="#contact">Contact me</a>
            </div>
            <div className="quick-stats">
              <div><strong>5+</strong><span>Years experience</span></div>
              <div><strong>AWS</strong><span>Cloud focus</span></div>
              <div><strong>CI/CD</strong><span>Automation</span></div>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="photo-ring" />
            <div className="photo-card">
              <img src="/profile.jpg" alt="Abhilash Guntuka" />
              <div className="photo-overlay">
                <span>DEVOPS / CLOUD</span>
                <b>Building reliable delivery systems.</b>
              </div>
            </div>
            <div className="floating-card card-top">
              <span>☁</span><div><small>Cloud</small><b>AWS</b></div>
            </div>
            <div className="floating-card card-bottom">
              <span>⚙</span><div><small>Automation</small><b>CI / CD</b></div>
            </div>
          </div>
        </section>

        <section className="graph-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / DEVOPS ECOSYSTEM</p>
            <h2>My work lives at the<br /><em>intersection</em> of cloud & automation.</h2>
          </div>

          <div className="graph-layout">
            <div className="graph">
              <svg className="connections" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="50" y1="50" x2="20" y2="22" />
                <line x1="50" y1="50" x2="80" y2="22" />
                <line x1="50" y1="50" x2="18" y2="77" />
                <line x1="50" y1="50" x2="82" y2="77" />
                <line x1="20" y1="22" x2="80" y2="22" />
                <line x1="18" y1="77" x2="82" y2="77" />
              </svg>
              <div className="core-node">AG<span>.</span><small>DEVOPS</small></div>
              <Node x={10} y={10} label="AWS" icon="☁" active={activeNode === "AWS"} onClick={() => setActiveNode("AWS")} />
              <Node x={70} y={10} label="Docker" icon="◈" active={activeNode === "Docker"} onClick={() => setActiveNode("Docker")} />
              <Node x={8} y={66} label="CI/CD" icon="↻" active={activeNode === "CI_CD"} onClick={() => setActiveNode("CI_CD")} />
              <Node x={72} y={66} label="ECS" icon="▣" active={activeNode === "ECS"} onClick={() => setActiveNode("ECS")} />
              <Node x={38} y={43} label="Monitor" icon="⌁" active={activeNode === "Monitor"} onClick={() => setActiveNode("Monitor")} />
            </div>

            <div className="graph-info">
              <p className="eyebrow">SELECT A NODE</p>
              <h3>{activeNode === "CI_CD" ? "CI / CD" : activeNode}</h3>
              <p>{nodeInfo[activeNode]}</p>
              <div className="terminal">
                <div className="terminal-head"><span>●</span><span>●</span><span>●</span><b>~/devops</b></div>
                <code>$ whoami<br />abhilash@devops<br /><br />$ status<br /><span>✓ systems online</span></code>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div>
            <p className="eyebrow">02 / ABOUT ME</p>
            <h2>Engineering for<br /><em>reliability.</em></h2>
          </div>
          <div className="about-copy">
            <p>
              I am a DevOps engineer focused on AWS cloud operations, CI/CD,
              containerization and production support. I enjoy turning repetitive
              operational work into automated, reliable workflows.
            </p>
            <p>
              My experience includes EC2, EBS, S3, ECR, ECS, IAM, CloudWatch,
              Docker, Jenkins, Bamboo and modern observability tooling.
            </p>
          </div>
        </section>

        <section className="timeline-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">03 / EXPERIENCE</p>
            <h2>Where I've<br /><em>grown.</em></h2>
          </div>
          <div className="timeline">
            {experience.map((item, i) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-marker">{String(i + 1).padStart(2, "0")}</div>
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">04 / TOOLBOX</p>
            <h2>Tools I use to<br /><em>ship.</em></h2>
          </div>
          <div className="skill-grid">
            {skills.map(([title, text], i) => (
              <div className="skill-card" key={title}>
                <span className="skill-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">05 / SELECTED WORK</p>
            <h2>Things I've<br /><em>built & supported.</em></h2>
          </div>
          <div className="project-grid">
            {projects.map((project, i) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span>0{i + 1}</span>
                  <span>↗</span>
                </div>
                <div className="project-visual">
                  <div className="mini-node">APP</div><div className="mini-line" />
                  <div className="mini-node">CI</div><div className="mini-line" />
                  <div className="mini-node">AWS</div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">06 / CONTACT</p>
          <h2>Let's build something<br /><em>reliable.</em></h2>
          <p>Open to connecting about DevOps, cloud engineering and automation opportunities.</p>
          <a className="email-link" href="mailto:your-email@example.com">your-email@example.com ↗</a>
          <div className="contact-links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Abhilash Guntuka</span>
        <span>Designed for DevOps • Built with React</span>
      </footer>
    </div>
  );
}

export default App;