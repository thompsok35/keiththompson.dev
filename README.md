# Keith Thompson — Executive Technical Showcase & Architecture Portfolio

> **High-Availability Enterprise Systems Meets Modern AI Engineering**
>
> 25+ years architecting mission-critical platforms at **Susquehanna International Group (SIG)**, now engineering zero-data-leakage RAG engines, Knowledge Graphs, and full-stack financial applications with deterministic precision.

---

## 🚀 Live Demo & Operational Highlights
- **Zero Authentication Barrier:** Public, frictionless portfolio for technical executives, hiring teams, and prospective consulting partners.
- **Sanitized Presentation:** Proprietary quantitative strategies and live brokerage keys are fully isolated; interactive sandboxes consume deterministic client-side models and sanitized JSON structures.
- **Containerized & Railway-Ready:** Multi-stage Docker build served via high-efficiency `nginx:alpine` with SPA routing support.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 19 + TypeScript + Vite |
| **Styling & Design System** | Tailwind CSS v4 + Glassmorphism + Custom Dark Slate Matrix |
| **Iconography & Visuals** | Lucide React + Custom Crisp SVG Brand Vectors |
| **AI & Vector Architectures** | PostgreSQL + `pgvector`, Knowledge Graph Traversal, AST Citation Guards |
| **Enterprise & Quant Backend** | C# ASP.NET Core, Node.js / TypeScript, Tradier Brokerage API, Sinch SMS |
| **Production Container** | Docker (Multi-stage `node:20-alpine` & `nginx:alpine`) |
| **Hosting Platform** | Railway (Zero-config instant deployment) |

---

## 📂 Project Structure

```
keiththompson.dev/
├── Dockerfile                      # Multi-stage Railway/Docker production build
├── nginx.conf                      # High-performance NGINX SPA routing configuration
├── .dockerignore                   # Docker build context exclusions
├── index.html                      # HTML5 entry with Inter & JetBrains Mono font imports
├── vite.config.ts                  # Vite config with @tailwindcss/vite
├── package.json                    # Project metadata & dependencies
└── src/
    ├── App.tsx                     # Main page assembler & modal state controller
    ├── main.tsx                    # React DOM root entry
    ├── index.css                   # Tailwind v4 directives, custom glow utilities, glassmorphism
    ├── data/
    │   └── portfolioData.ts        # Strongly-typed data layer (Projects, SIG Milestones, RAG queries)
    └── components/
        ├── Navbar.tsx              # Glassmorphic header with smooth-scroll & intro CTA
        ├── Hero.tsx                # Executive headline, live telemetry widget & core metrics
        ├── ProjectsSection.tsx     # Featured systems vault with category filters
        ├── ProjectCard.tsx         # Modular system card with problem-solution breakdown
        ├── ArchitectureSection.tsx # Topology node inspector & Naive vs Grounded RAG comparison
        ├── ArchitectureModal.tsx   # Interactive modal (Blueprints, Sanitized Code, 16:9 Walkthrough)
        ├── EnterpriseSection.tsx   # 25+ years at SIG (CRON migration, PHLX/CBOE/AMEX, Telemetry)
        ├── DemoWidget.tsx          # 3-in-1 Live Sandboxes (RAG Grounder, Opus ROC, SMS Bot Daemon)
        ├── TechStackSection.tsx    # Technical mastery matrix categorized by domain
        ├── ContactScheduler.tsx    # Cal.com meeting scheduler & direct contact channels
        └── Footer.tsx              # System status, confidentiality note & verified links
```

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🐳 Docker & Railway Deployment

### Build and Run Docker Container Locally
```bash
# Build the production image
docker build -t keiththompson-portfolio .

# Run on port 80 (or port 8080)
docker run -p 8080:80 keiththompson-portfolio
```
Navigate to [http://localhost:8080](http://localhost:8080).

### Deploy to Railway
1. Push this repository to GitHub: `github.com/thompsok35/keiththompson.dev`.
2. In Railway, click **New Project** &rarr; **Deploy from GitHub repo**.
3. Railway will automatically detect the `Dockerfile`, build the multi-stage image, and provision a live HTTPS endpoint with zero manual configuration.

---

## 📬 Contact & Advisory Inquiries
- **Email:** [thompsok35@gmail.com](mailto:thompsok35@gmail.com)
- **LinkedIn:** [linkedin.com/in/keith-thompson-36b758](https://linkedin.com/in/keith-thompson-36b758)
- **GitHub:** [github.com/thompsok35](https://github.com/thompsok35)
- **Scheduler:** [Cal.com Direct Booking](https://cal.com/keith-thompson-dev/15min)
