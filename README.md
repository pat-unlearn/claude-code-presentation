# Claude Code Presentation: "Agentic Development with Claude Code"

A compelling interactive Slidev presentation showcasing the transformative power of Claude Code through planning mode, specialized agents, hooks, slash commands, and CLAUDE.md context persistence.

## 🌐 Live Demo
**https://pat-unlearn.github.io/claude-code-presentation/**

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Export to PDF
npm run export
```

## 🎯 Presentation Overview

This presentation tells the story of how Claude Code transforms developers from "code monkeys" doing repetitive tasks into "code orchestrators" who direct AI agents to build better software faster.

### Key Narrative Arc

1. **The Problem**: Developers spend 85% of time on non-creative tasks
2. **The Evolution**: Introduction of AI-powered development tools
3. **The Transformation**: Demonstrating 3-4x productivity improvements
4. **The Future**: Vision of developers as code conductors

## 🏗️ Architecture

- **Framework**: Slidev with Vue.js 3 components
- **Styling**: TailwindCSS with custom animations and gradients
- **Interactive Demos**: Vue 3 Composition API components with real-time simulations
- **Theme**: Seriph with custom dark mode styling
- **Build System**: Vite with Vue plugin

## 🎭 Interactive Components

### ClaudeMdEditor
Live-typing animation demonstrating CLAUDE.md project context setup with benefits sidebar.

### PlanningModeDemo  
Shows step-by-step strategic planning process with thinking animations and progress indicators.

### DetectiveCorkboard
Interactive detective corkboard analogy demonstrating LLM context window limitations and summarization.

### AgentDashboard
Simulates multiple specialized agents (Frontend, Backend, Testing) working in parallel with real-time terminal output.

### HookFlow
Demonstrates automated quality gates and error prevention through different hook execution scenarios.

### CommandPalette
Interactive slash command execution with built-in vs custom command categorization.

### McpServersDemo
Interactive MCP server demonstration showing real-time server capabilities and terminal integration.

### WorkflowDemo
Complete workflow demonstration from prompt to implementation showing Claude Code's thinking process.

## 📁 Project Structure

```
claude-code-presentation/
├── slides.md              # Main presentation content (28 slides)
├── components/             # Vue.js interactive components
│   ├── ClaudeMdEditor.vue
│   ├── PlanningModeDemo.vue
│   ├── DetectiveCorkboard.vue
│   ├── AgentDashboard.vue
│   ├── HookFlow.vue
│   ├── CommandPalette.vue
│   ├── McpServersDemo.vue
│   └── WorkflowDemo.vue
├── .github/workflows/      # GitHub Actions CI/CD
│   └── deploy.yml
├── public/                 # Static assets
├── style.css              # Custom styling
├── vite.config.ts         # Vite configuration (includes GitHub Pages base URL)
├── CLAUDE.md              # Project context and documentation
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6), Purple (#8B5CF6)  
- **Success**: Green (#10B981)
- **Warning**: Orange (#F97316)
- **Error**: Red (#EF4444)
- **Background**: Dark grays (#1F2937, #111827)

### Typography
- **Headers**: Bold, gradient text effects
- **Code**: Monaco, Menlo, Ubuntu Mono
- **Body**: Clean, developer-focused fonts

## 🔧 Key Features Demonstrated

### 1. Planning Mode
- Architectural thinking before coding
- Edge case anticipation
- Step-by-step implementation plans
- 90% faster execution with planning

### 2. CLAUDE.md Context Persistence
- Project knowledge retention across sessions
- Consistent coding standards enforcement
- Business rule awareness
- Team knowledge in AI form

### 3. Specialized Agents
- Frontend agent: React/Vue components, UI/UX, responsive design
- Backend agent: APIs, databases, business logic
- Testing agent: Unit tests, integration tests, coverage
- Security agent: OWASP compliance, vulnerability scanning  
- Performance agent: Optimization, caching, N+1 query detection
- Architecture agent: Design patterns, separation of concerns
- Parallel execution for comprehensive code improvement

### 4. Hooks
- Pre-commit quality gates
- Pre-edit validation
- Post-task analysis
- Automated error prevention

### 5. Slash Commands
- `/test` - Run test suite
- `/plan` - Enter planning mode
- `/review` - Code review
- `/commit` - Smart commit
- Custom commands for team workflows

## 📊 Impact Metrics

- **Feature Implementation**: 4-6 hours → 30-45 minutes
- **Bug Discovery**: Production → Before commit
- **Test Coverage**: 40-60% → 90%+
- **Developer Productivity**: 8-10 tasks/week → 25-30 tasks/week
- **Code Quality**: 75% reduction in production bugs

## 🎪 Presentation Flow (28 Slides, 30-40 minutes)

### Part 1: Context (Slides 1-16)
1. **Opening (1-3)**: Problem statement and AI evolution comparison
2. **CLAUDE.md (4-6)**: Project DNA and context persistence  
3. **Planning Mode (7-9)**: Strategic development demonstration
4. **MCP Overview (10-11)**: Model Context Protocol explanation and demos
5. **Context Limitations (12-13)**: Detective corkboard analogy
6. **Subagents (14-16)**: Specialized agent architecture and live demo

### Part 2: Helpful Tools (Slides 17-22)  
7. **Hooks (17-19)**: Custom shell scripts and automation workflow
8. **Slash Commands (20-22)**: Power user toolkit and interactive demo

### Part 3: Workflow (Slides 23-27)
9. **Terminal Integration (23)**: Native CLI tool access
10. **Real Workflow (24)**: How this presentation was built
11. **Agent Creation (25)**: From session to specialized agent

### Part 4: Vision & Getting Started (Slides 26-28)
12. **Future Vision (26)**: Developers as "Code Conductors"  
13. **Getting Started (27)**: Practical implementation steps
14. **Tips & Tricks (28)**: Power user techniques

## 🎯 Key Takeaways

- **"Stop coding. Start orchestrating."**
- **"Building software at the speed of thought"**
- **"From keyboard warrior to code conductor"**  
- **"Perception → Planning → Execution → Feedback Loop"**
- **"The 10x developer myth becomes reality through AI teammates"**

## 🔧 Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development
```bash
npm run dev
```
Opens presentation at `http://localhost:3030`

### Building
```bash
npm run build
```
Generates static site in `dist/`

### PDF Export
```bash
npm run export
```
Creates `slides-export.pdf`

## 🚀 Deployment

### GitHub Pages (Current Deployment)
**Live at**: https://pat-unlearn.github.io/claude-code-presentation/

#### Automatic Deployment
- Push to `main` branch triggers GitHub Actions workflow
- Builds Slidev presentation with correct base URL
- Deploys to GitHub Pages (2-3 minutes total)

#### Critical Configuration
```typescript
// vite.config.ts - REQUIRED for GitHub Pages subpath deployment
export default defineConfig({
  base: '/claude-code-presentation/',
})
```

#### Setup Steps
1. Enable GitHub Pages with "GitHub Actions" source
2. Ensure `vite.config.ts` has correct `base` path
3. Push changes to trigger deployment

### Alternative Hosting
- **Netlify/Vercel**: Easier setup, no base URL configuration needed
- **Any static hosting**: Build outputs to `dist/` folder

## 🎨 Customization

### Updating Content
Edit `slides.md` for slide content changes.

### Modifying Interactions
Update Vue.js components in `components/` directory using Composition API.

### Styling Changes
Modify `style.css` for custom styling.

### Adding Examples
Add new demo files to `demos/` directory.

## 📝 Speaker Notes

- Use construction analogies throughout
- Emphasize the paradigm shift from implementation to orchestration
- Show live demos when possible
- Engage audience with the "what if everyone had this power?" question
- End with clear call-to-action for getting started

## 📄 License

MIT License - Feel free to adapt this presentation for your own team demos.

---

**Built with ❤️ using Claude Code** - The presentation itself demonstrates the power of AI-assisted development!
