# Claude Code Presentation Project

## Project Overview
Interactive Slidev presentation showcasing Claude Code's capabilities including planning mode, CLAUDE.md context persistence, specialized agents, hooks, and slash commands. The presentation uses a compelling "From Code Monkeys to Code Orchestrators" narrative with construction site analogies.

## Architecture
- **Presentation Framework**: Slidev with Vue.js components
- **Styling**: TailwindCSS with custom animations
- **Interactive Components**: Vue.js with composition API for demonstrations
- **Theme**: Seriph with custom dark mode styling
- **Build System**: Vite with Vue plugin

## Technology Stack
- **Core**: Slidev 52.1.0
- **UI Library**: Vue.js 3+ with Composition API
- **Styling**: TailwindCSS (via Slidev theme)
- **Build Tool**: Vite with Vue plugin
- **Package Manager**: npm
- **Development Tools**: playwright-mcp for visual debugging

## Presentation Structure

### Act 1: The Problem (Slides 1-5)
- Opening: "The Lonely Developer" problem statement
- Statistics on development time waste
- Traditional development workflow demonstration

### Act 2: The Evolution (Slides 6-25)
**Core Features Demonstrated:**

#### Planning Mode (Slides 7-9)
- Interactive PlanningModeVisualizer component
- Before/after comparison
- Live demo of planning workflow
- Shows thoughtful approach vs diving in blindly

#### CLAUDE.md Context Persistence (Slides 10-12)
- Project manual concept
- Session continuity demonstration
- Business rules and standards enforcement

#### Specialized Agents (Slides 13-16)
- AgentOrchestrator interactive component
- Security, Performance, and Architecture agents
- Parallel execution demonstration
- Real-time agent communication simulation

#### Hooks (Slides 17-19)
- HookFlow component showing automation pipeline
- Pre-commit, pre-edit, and post-task hooks
- Error prevention demonstration
- Quality gates visualization

#### Slash Commands (Slides 20-22)
- CommandPalette interactive component
- Built-in vs custom commands
- Live execution simulation
- Power user workflow examples

### Act 3: The Transformation (Slides 23-27)
- ROI calculator and productivity metrics
- Before/after development workflow comparison
- Live case study demonstration

### Act 4: The Future (Slides 28-32)
- "Code Conductors" vision
- Team transformation implications
- Getting started guide

## Interactive Components

### Vue Components (`/components/`)
All components use Vue 3 Composition API and follow consistent styling patterns:

1. **PlanningModeDemo.vue**
   - Shows step-by-step planning process
   - Interactive animation with start button
   - Visual progress indicators

2. **AgentDashboard.vue**
   - Simulates multiple agents working in parallel
   - Real-time terminal-style output
   - Agent status visualization with animations

3. **HookFlow.vue**
   - Multiple hook execution scenarios
   - Visual flow diagram with progress tracking
   - Terminal log output simulation

4. **CommandPalette.vue**
   - Interactive command execution
   - Built-in vs custom command categorization
   - Real-time output simulation

5. **McpServersDemo.vue**
   - Interactive MCP server demonstration
   - Real-time server status and capabilities
   - Terminal integration examples

6. **WorkflowDemo.vue**
   - Complete workflow from prompt to implementation
   - Shows thinking process and planning phases
   - Demonstrates real Claude Code usage patterns

## Styling Guidelines
- **Color Scheme**: Dark theme with neon accents
- **Primary Colors**: Blue (#3B82F6), Purple (#8B5CF6), Green (#10B981)
- **Background**: Dark grays (#1F2937, #111827)
- **Text**: White primary, gray-300 secondary
- **Animations**: Smooth transitions with hover effects
- **Layout**: Clean, developer-focused aesthetic

## Content Standards
- Use construction site analogies consistently
- Emphasize transformation from "coding" to "orchestrating"
- Include specific metrics and timeframes
- Show real code examples in demos
- Maintain professional but engaging tone

## Demo Examples (`/demos/`)
- **planning-example.md**: Detailed planning mode walkthrough
- **claude-md-example.md**: Comprehensive CLAUDE.md template
- **agent-examples.md**: Before/after code with agent improvements

## Presentation Flow
1. **Hook the audience** with the "Code Monkeys" problem
2. **Build tension** with traditional development pain points
3. **Introduce solution** through construction site analogy
4. **Demonstrate each feature** with interactive components
5. **Show transformation** with before/after comparisons
6. **Inspire action** with future vision and getting started guide

## Key Messages
- "Stop coding. Start orchestrating."
- "Your code, amplified."
- "From keyboard warrior to code conductor."
- "The 10x developer myth becomes reality through AI teammates"

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

## Visual Development Guidelines
- **playwright-mcp is MANDATORY** for all UI changes
- Use screenshots to verify slide layouts before and after changes
- Check component animations and interactions visually
- Verify responsive behavior across different screen sizes
- Ensure proper spacing, typography, and color consistency
- Test v-click animations and slide transitions

## Deployment
- Static site generation via Slidev build
- Can be hosted on any static hosting platform
- PDF export available for offline sharing
- Speaker notes included for presentation delivery

---
Last Updated: 2024-01-15
Version: 1.0
Presentation Duration: ~30-40 minutes