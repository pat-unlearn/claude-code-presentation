# Claude Code Presentation Project

## Project Overview
Interactive Slidev presentation demonstrating Claude Code's agentic development capabilities. The presentation showcases how Claude Code evolves AI-assisted development from basic "prompt engineering" to sophisticated "agentic workflows" with persistent context, strategic planning, specialized agents, and automated tooling integration.

**Target Audience**: Software engineers, technical leads, and development teams interested in AI-powered development workflows.

**Core Message**: Claude Code transforms developers from individual coders into orchestrators of AI development teams.

## Architecture & Technology Stack

### Core Framework
- **Presentation Engine**: Slidev 0.52.1 with Vue.js 3+ Composition API
- **Styling System**: TailwindCSS with custom dark theme and animations
- **Build System**: Vite with Vue plugin for fast hot-reload development
- **Package Manager**: npm with dependency management

### Interactive Components
- **Vue.js Components**: Self-contained, reactive demonstrations
- **Animation System**: CSS transitions with Vue state management
- **Visual Debugging**: playwright-mcp for automated testing and screenshots
- **Responsive Design**: Mobile-first approach with desktop optimizations

### Development Tools
- **Visual Testing**: playwright-mcp (MANDATORY for UI changes)
- **Local Development**: `npm run dev` with hot-reload
- **Production Build**: `npm run build` for static site generation
- **Export Options**: PDF generation and static hosting compatibility

## Presentation Structure (28 Slides Total)

### Opening: The Evolution of AI Development (Slides 1-2)
- **Title Slide**: Agentic Development with Claude Code
- **The AI Development Evolution**: Three-column comparison showing progression from "Vibe Coding" → "Prompt Engineering" → "Agentic Development"

### Part 1: Context Engineering (Slides 3-12)
**Core Theme**: Building persistent, project-aware AI workflows

#### CLAUDE.md: Project DNA (Slides 3-5)
- **ClaudeMdEditor Component**: Live typing animation showing project context file
- **Before/After Comparison**: Generic AI responses vs context-aware solutions
- **Key Message**: Context = Consistency across all interactions

#### Planning Mode: Strategic Development (Slides 6-7)
- **PlanningModeDemo Component**: Interactive step-by-step planning visualization
- **Comparison**: Traditional prompting vs strategic planning approach
- **Statistics**: 60-90% reduction in development time, 4-6x fewer bugs

#### MCP: Extensibility System (Slides 8-9)
- **Smartphone Analogy**: Claude as phone, MCP servers as apps
- **McpServersDemo Component**: Live server integration examples
- **Real Examples**: playwright-mcp, serena-mcp, xcodebuild-mcp

#### Context Window Management (Slides 10-12)
- **DetectiveCorkboard Component**: Interactive analogy showing LLM memory limitations
- **36 Evidence Cards**: Demonstrates "full board" with realistic memory pressure
- **Summarization Process**: 80% reduction showing automatic context management

### Part 2: Helpful Tools & Automation (Slides 13-18)
**Core Theme**: Workflow automation and power-user features

#### Specialized Agents (Slides 13-15)
- **AgentDashboard Component**: Parallel agent execution simulation
- **Architecture**: Frontend, Backend, Testing specialists
- **Key Benefit**: Domain expertise with isolated context windows

#### Hooks & Automation (Slides 16-17)
- **HookFlow Component**: Visual workflow automation pipeline  
- **Hook Types**: UserPromptSubmit, PreToolUse, PostToolUse, Stop
- **Use Cases**: Quality gates, team policy enforcement, notifications

#### Slash Commands & CLI Integration (Slides 18)
- **CommandPalette Component**: Built-in vs custom commands
- **Terminal Integration**: Native tool access and output parsing
- **Examples**: /test, /plan, /review, /commit, custom workflows

### Part 3: Workflow & Vision (Slides 19-28)
**Core Theme**: Real-world application and future possibilities

#### Live Workflow Examples (Slides 19-21)
- **WorkflowDemo Component**: Prompt → PRD → Plan → Execute workflow
- **AgentCreationDemo Component**: Session-to-agent transformation
- **Real Case Study**: How this presentation was built

#### Developer Transformation (Slides 22-24)
- **Vision**: Developers as "Code Conductors"
- **Getting Started Guide**: 4-step implementation process
- **Tips & Tricks**: Power-user features and optimization strategies

#### Resources & Conclusion (Slides 25-28)
- **Sources & References**: Research supporting productivity claims
- **Community Links**: Documentation, Discord, GitHub
- **Thank You**: Call-to-action for adoption

## Interactive Components Library

### Vue Components (`/components/`)
All components use Vue 3 Composition API with consistent styling patterns and state management:

#### Core Demonstration Components

1. **ClaudeMdEditor.vue**
   - **Purpose**: Shows CLAUDE.md typing with character-by-character animation
   - **Features**: Auto-start animation, realistic typing speed, HTML line breaks
   - **State**: `isTyping`, `typedText`, `hasStarted` refs
   - **Styling**: Terminal-style dark background, green text, blinking cursor

2. **DetectiveCorkboard.vue** ⭐ *New Interactive Analogy*
   - **Purpose**: Demonstrates LLM context window limitations through detective corkboard
   - **Features**: 36 evidence cards, 5-phase interactive demo, 80% summarization
   - **Phases**: Ready → Filling → Full → Summarizing → Continuing → Complete  
   - **Visual**: Corkboard background, pinned yellow cards, "BOARD FULL!" indicator
   - **Animation**: Staggered card placement, removal transitions, summary cards

3. **PlanningModeDemo.vue**
   - **Purpose**: Step-by-step strategic planning visualization
   - **Features**: Progressive phase revelation, visual progress indicators
   - **Phases**: Requirements → Analysis → Architecture → Planning
   - **Styling**: Clean cards with colored left borders, smooth transitions

4. **AgentDashboard.vue**
   - **Purpose**: Parallel specialist agent execution simulation
   - **Features**: Frontend/Backend/Testing agents, terminal output, progress tracking
   - **Animation**: Real-time typing simulation, agent status indicators
   - **Layout**: Split dashboard with agent cards and terminal output

5. **HookFlow.vue**
   - **Purpose**: Workflow automation pipeline visualization
   - **Features**: Multi-scenario demonstrations, visual flow diagrams
   - **Hook Types**: UserPromptSubmit, PreToolUse, PostToolUse, Stop hooks
   - **Interactive**: Button-triggered scenarios, terminal log simulation

6. **CommandPalette.vue**
   - **Purpose**: Slash command system demonstration
   - **Features**: Built-in vs custom commands, execution simulation
   - **Commands**: /test, /plan, /review, /commit + custom examples
   - **Layout**: Command palette UI with categorized command lists

7. **McpServersDemo.vue**
   - **Purpose**: MCP server integration examples
   - **Features**: Server status cards, capability demonstrations
   - **Examples**: playwright-mcp, serena-mcp, xcodebuild-mcp
   - **Layout**: Server cards below terminal with side-by-side arrangement

8. **WorkflowDemo.vue**
   - **Purpose**: Complete development workflow from prompt to execution
   - **Features**: Thinking animations, PRD generation, planning phases
   - **Process**: Shows real Claude Code usage patterns and decision-making

9. **AgentCreationDemo.vue**
   - **Purpose**: Natural language agent creation from sessions
   - **Features**: Live typing animation, session-to-agent transformation
   - **Interactive**: Demonstrates workflow memorization and agent generation

## Design System & Styling Guidelines

### Color Palette
- **Primary Theme**: Dark gradient backgrounds with professional accents
- **Core Colors**: 
  - Blue (#3B82F6) - Primary actions, links, Claude Code branding
  - Purple (#8B5CF6) - Secondary accents, advanced features  
  - Green (#10B981) - Success states, positive outcomes
  - Orange (#F59E0B) - Warnings, intermediate states
  - Red (#EF4444) - Errors, problems, "before" states
- **Background Gradients**: Dark purple-to-black theme (`#1A081C` to `#3d2a4f`)
- **Text Hierarchy**: White primary, gray-300 secondary, colored accents for emphasis

### Component Styling Patterns
- **Card Design**: Rounded corners, colored left borders for categorization
- **Interactive Elements**: Hover effects, smooth transitions, visual feedback
- **Terminal Styling**: Dark backgrounds, green/white text, monospace fonts
- **Animation Timing**: CSS transitions with 200-500ms durations
- **Layout**: Clean, developer-focused aesthetic with generous whitespace

### Responsive Design
- **Mobile-first**: Components adapt to smaller screens
- **Grid Layouts**: 2-3 column layouts that stack on mobile  
- **Typography**: Scalable text sizes, appropriate line heights
- **Touch Targets**: Buttons sized for touch interaction

## Content & Messaging Strategy

### Core Narrative Arc
1. **Problem Recognition**: Current AI development limitations
2. **Solution Introduction**: Agentic development approach  
3. **Feature Demonstration**: Interactive component showcases
4. **Transformation Vision**: "Code Conductors" future state
5. **Implementation Path**: Practical getting-started guidance

### Key Value Propositions
- **Context Persistence**: "Every interaction builds on established patterns"
- **Strategic Planning**: "Think before you code" - 60-90% time reduction
- **Agent Specialization**: "Domain experts working in parallel"
- **Workflow Automation**: "Quality gates and team policy enforcement"
- **Professional Development**: "From individual coder to AI team orchestrator"

### Tone & Voice
- **Professional yet Approachable**: Technical depth with clear explanations
- **Transformation-focused**: Emphasize evolution, not replacement
- **Evidence-based**: Include statistics and research citations
- **Action-oriented**: Clear next steps and implementation guidance

## Technical Implementation Notes
- All interactive components are self-contained Vue 3 components
- Animations use CSS transitions for smooth performance  
- Components use Vue's reactivity system for state management
- Error states and loading states included
- Mobile-responsive design considerations
- **CRITICAL**: Always use playwright-mcp for visual verification during active development

## Development Workflow
1. Edit slides.md for content changes
2. Modify Vue components in /components/ for interactivity
3. Update demos/ for example content
4. Test locally with `npm run dev`
5. **ALWAYS use playwright-mcp to verify visual changes** - Essential for catching layout issues, formatting problems, and ensuring components render correctly
6. Build for production with `npm run build`
7. **For GitHub Pages**: Push to main branch for automatic deployment

### GitHub Pages Development Notes
- **Local vs Production**: Local dev uses root path `/`, production uses `/claude-code-presentation/`
- **Base URL Testing**: Cannot fully test GitHub Pages paths locally
- **Quick Verification**: Use playwright-mcp on deployed site after changes
- **Asset Issues**: Always check browser console on deployed site for 404 errors

## Visual Development Guidelines
- **playwright-mcp is MANDATORY** for all UI changes
- Use screenshots to verify slide layouts before and after changes
- Check component animations and interactions visually
- Verify responsive behavior across different screen sizes
- Ensure proper spacing, typography, and color consistency
- Test v-click animations and slide transitions

## Deployment

### GitHub Pages Deployment (Recommended)
**Repository**: https://github.com/pat-unlearn/claude-code-presentation  
**Live URL**: https://pat-unlearn.github.io/claude-code-presentation/

#### Setup Requirements
1. **Vite Configuration**: Must include `base: '/repository-name/'` in `vite.config.ts`
2. **GitHub Actions Workflow**: Automated build and deploy on push to main
3. **Pages Settings**: Configure repository to use "GitHub Actions" as Pages source

#### Critical Configuration
```typescript
// vite.config.ts
export default defineConfig({
  base: '/claude-code-presentation/', // REQUIRED for GitHub Pages subpath
})
```

#### Common Issues & Solutions
- **Asset 404 Errors**: Usually caused by missing or incorrect `base` configuration in vite.config.ts
- **Blank Page**: Check browser console for 404s on CSS/JS files
- **Build Failures**: Ensure Pages is enabled with "GitHub Actions" source before workflow runs

#### Deployment Workflow
1. Push changes to `main` branch
2. GitHub Actions automatically builds via `npm run build`
3. Deploys to GitHub Pages (2-3 minute total time)
4. Available at `https://username.github.io/repository-name/`

### Alternative Hosting
- **Netlify/Vercel**: Static site generation via Slidev build (easier setup, no base URL needed)
- **PDF Export**: Available for offline sharing via `npm run export`
- **Local Hosting**: Speaker notes included for presentation delivery

---
Last Updated: 2025-08-11
Version: 2.0
Presentation Duration: ~30-40 minutes
GitHub Pages: https://pat-unlearn.github.io/claude-code-presentation/