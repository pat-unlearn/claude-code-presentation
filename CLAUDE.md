# Claude Code Presentation Project

## Project Overview
Interactive Slidev presentation showcasing Claude Code's capabilities including planning mode, CLAUDE.md context persistence, specialized agents, hooks, and slash commands. The presentation uses a compelling "From Code Monkeys to Code Orchestrators" narrative with construction site analogies.

## Architecture
- **Presentation Framework**: Slidev with React components
- **Styling**: TailwindCSS with custom animations
- **Interactive Components**: React with hooks for demonstrations
- **Theme**: Seriph with custom dark mode styling
- **Build System**: Vite with React plugin

## Technology Stack
- **Core**: Slidev 52.1.0
- **UI Library**: React 19.1.1 with React DOM
- **Styling**: TailwindCSS (via Slidev theme)
- **Build Tool**: Vite with @vitejs/plugin-react
- **Package Manager**: npm

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

### React Components (`/components/`)
All components use React hooks and follow consistent styling patterns:

1. **PlanningModeVisualizer.jsx**
   - Shows step-by-step planning process
   - Interactive animation with start button
   - Visual progress indicators

2. **AgentOrchestrator.jsx**
   - Simulates multiple agents working in parallel
   - Real-time terminal-style output
   - Agent status visualization with animations

3. **HookFlow.jsx**
   - Multiple hook execution scenarios
   - Visual flow diagram with progress tracking
   - Terminal log output simulation

4. **CommandPalette.jsx**
   - Interactive command execution
   - Built-in vs custom command categorization
   - Real-time output simulation

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
- All interactive components are self-contained
- Animations use CSS transitions for smooth performance  
- Components handle their own state management
- Error states and loading states included
- Mobile-responsive design considerations

## Development Workflow
1. Edit slides.md for content changes
2. Modify React components in /components/ for interactivity
3. Update demos/ for example content
4. Test locally with `npm run dev`
5. Build for production with `npm run build`

## Deployment
- Static site generation via Slidev build
- Can be hosted on any static hosting platform
- PDF export available for offline sharing
- Speaker notes included for presentation delivery

---
Last Updated: 2024-01-15
Version: 1.0
Presentation Duration: ~30-40 minutes