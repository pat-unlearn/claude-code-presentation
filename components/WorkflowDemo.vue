<template>
  <div class="p-3 card-clean h-full flex flex-col max-h-screen">

    <!-- Progress Bar -->
    <div class="flex items-center mb-4">
      <div v-for="(phase, index) in phases" :key="index" class="flex items-center">
        <div :class="['w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500',
                     currentPhase >= index ? `bg-${phase.color}-500 text-white` : 'bg-gray-200 text-gray-500']">
          {{ index + 1 }}
        </div>
        <div v-if="index < phases.length - 1" :class="['h-1 w-16 transition-all duration-500',
                                                        currentPhase > index ? `bg-${phases[index + 1].color}-500` : 'bg-gray-200']"></div>
      </div>
    </div>

    <div class="flex-1 min-h-0 flex flex-col">
      <!-- Phase Headers -->
      <div class="grid grid-cols-3 gap-2 mb-3">
        <div v-for="(phase, index) in phases" :key="index"
             :class="['text-center py-1 px-2 rounded text-xs font-semibold transition-all duration-300',
                     currentPhase === index ? `bg-${phase.color}-100 text-${phase.color}-800 border border-${phase.color}-300` : 'bg-gray-50 text-gray-600']">
          {{ phase.icon }} {{ phase.name }}
        </div>
      </div>

      <!-- Content Display -->
      <div class="bg-gray-900 rounded-lg p-3 flex-1 overflow-y-auto font-mono text-xs">
        <div :class="['text-blue-400 mb-2']">{{ phases[currentPhase].header }}</div>
        <div class="text-gray-300">
          <div v-if="isThinking" class="flex items-center text-gray-400 mb-3">
            <div class="animate-spin rounded-full h-3 w-3 border-b border-gray-400 mr-2"></div>
            {{ thinkingMessage }}
          </div>
          <div v-for="(line, index) in visibleLines" :key="index"
               :class="['transition-all duration-300',
                       index <= currentLine ? 'opacity-100' : 'opacity-30',
                       line === '' ? 'h-4' : '']">
            {{ line === '' ? '\u00A0' : line }}
          </div>
          <div v-if="isTyping" class="inline-block w-2 h-4 bg-green-400 animate-pulse"></div>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex gap-2 mt-3">
        <button @click="showPhase(0)"
                :class="['px-3 py-1 text-xs rounded transition-colors',
                        currentPhase === 0 ? 'bg-orange-500 text-white' : 'border border-orange-500 text-orange-500 hover:bg-orange-50']">
          {{ phases[0].icon }} Prompt
        </button>
        <button @click="showPhase(1)"
                :class="['px-3 py-1 text-xs rounded transition-colors',
                        currentPhase === 1 ? 'bg-blue-500 text-white' : 'border border-blue-500 text-blue-500 hover:bg-blue-50']">
          {{ phases[1].icon }} PRD
        </button>
        <button @click="showPhase(2)"
                :class="['px-3 py-1 text-xs rounded transition-colors',
                        currentPhase === 2 ? 'bg-green-500 text-white' : 'border border-green-500 text-green-500 hover:bg-green-50']">
          {{ phases[2].icon }} Plan
        </button>
        <button @click="startAutoDemo" :disabled="isAutoPlaying || isThinking || isTyping"
                class="px-3 py-1 text-xs rounded border border-purple-500 text-purple-500 hover:bg-purple-50 transition-colors disabled:opacity-50">
          🎬 Auto Demo
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentPhase = ref(0)
const currentLine = ref(-1)
const isTyping = ref(false)
const isThinking = ref(false)
const isAutoPlaying = ref(false)
const visibleLines = ref([])
const thinkingMessage = ref('')

const phases = [
  {
    name: 'Prompt',
    icon: '💬',
    color: 'orange',
    header: '$ Initial Request',
    thinking: null, // No thinking for raw user input
    content: [
      'Create a PRD for a compelling presentation using a modern slide building framework to showcase Claude Code\'s advance agentic workflows. Use analogies and/or metaphors to help explain some of the more niche concepts. Check out the unlearn.ai marketing page for graphics and stylistic color schemes. Use playwright-mcp to analyze the UI as the slides are developed and leverage any of the specialized agents as you see fit.',
      '',
      'In particular, it would be great if we had some demos for the following claude code concepts',
      '- Planning mode',
      '- CLAUDE.md',
      '- MCP Servers',
      '- Subagents',
      '- Hooks',
      '- Slash Commands'
    ]
  },
  {
    name: 'PRD',
    icon: '📋',
    color: 'blue',
    header: '📋 Product Requirements Document Generated',
    thinking: '🧠 Analyzing requirements and generating comprehensive PRD...',
    content: [
      'Requirements:',
      '',
      'Theme & Narrative:',
      '- Hook: "The Lonely Developer" problem - context loss, inefficiency, generic AI responses',
      '- Evolution story: From basic tools → Power tools → AI assistants → Full orchestration crew',
      '- Transformation: Developers become "Code Conductors" who orchestrate rather than type',
      '- Use construction site metaphors consistently (DIY → Power tools → Full renovation crew with project manager)',
      '',
      'Technical Implementation:',
      '- Slidev framework with Vue components for interactivity',
      '- Dark theme with Unlearn.ai brand colors (#2D4FFF primary blue)',
      '- TailwindCSS with custom animations and color schemes',
      '- Interactive Vue components with realistic terminal simulations',
      '',
      'Core Features to Demonstrate:',
      '',
      '1. Planning Mode',
      '  - Interactive component showing strategic thinking before coding',
      '  - Before/after comparison (4-6 hours → 1 hour)',
      '  - Step-by-step analysis: Requirements → Architecture → Risks → Implementation',
      '2. CLAUDE.md Context Engineering',
      '  - File editor component showing project DNA concept',
      '  - Before/after examples (generic Flask → context-aware FastAPI)',
      '  - Benefits: persistence, standards, business logic',
      '3. MCP Servers Extension System',
      '  - Smartphone app store analogy for extending capabilities',
      '  - Interactive demo with playwright-mcp and serena-mcp examples',
      '  - Real browser automation and code analysis scenarios',
      '4. Specialized Subagents',
      '  - Frontend, Backend, and Testing agents working in parallel',
      '  - Orchestrator that plans then deploys specialized agents',
      '  - Interactive terminal showing coordinated execution',
      '5. Hooks System',
      '  - "Custom shell scripts for AI workflows" concept',
      '  - 4 hook types: UserPromptSubmit, PreToolUse, PostToolUse, Stop',
      '  - Quality gates and team policy enforcement',
      '6. Slash Commands',
      '  - Power user toolkit demonstration',
      '  - Built-in vs custom command examples',
      '  - Interactive command palette simulation',
      '',
      'Visual Design:',
      '- Clean, developer-focused aesthetic with neon accents',
      '- Color scheme: Blue (#3B82F6), Purple (#8B5CF6), Green (#10B981) on dark backgrounds',
      '- Smooth transitions and hover effects throughout',
      '- Mobile-responsive considerations',
      '',
      'Content Standards:',
      '- Include specific metrics and research citations',
      '- Show real code examples in all demos',
      '- 4-act structure: Problem → Evolution → Transformation → Future',
      '- ROI-focused messaging with productivity multipliers',
      '',
      'Key Messages:',
      '- "Stop coding. Start orchestrating."',
      '- "The 10x developer myth becomes reality through AI teammates"',
      '- "Context is everything - AI without context is expensive autocomplete"',
      '',
      'Deliverables:',
      '- Interactive Slidev presentation with Vue components',
      '- All components should be self-contained with realistic simulations',
      '- PDF export capability for offline sharing',
      '- Speaker notes for presentation delivery',
      '- Getting started guide for audience',
      '',
      'Make every interaction feel authentic with realistic terminal outputs, proper loading states, and smooth animations that',
      'demonstrate the power of orchestrated AI development.'
    ]
  },
  {
    name: 'Plan',
    icon: '🧠',
    color: 'green',
    header: '🧠 Detailed Implementation Plan',
    thinking: '⚙️ Breaking down into actionable steps and creating implementation strategy...',
    content: [
      'Understanding Requirements',
      'Analyzing request: Interactive presentation for Unlearn.ai showcasing Claude Code',
      '- Target audience: Developers and technical decision makers',
      '- Goal: Transform perception from "coding" to "orchestrating"',
      '- Platform: Slidev for interactive web presentation',
      '- Branding: Unlearn.ai colors and professional aesthetic',
      '',
      'Context Analysis',
      'Found: Node.js environment, presentation context, need for interactivity',
      '- Framework: Slidev with Vue.js components for demos',
      '- Styling: TailwindCSS with custom Unlearn.ai brand colors',
      '- Interactive elements: Terminal simulations, live demos',
      '- Narrative: Construction site analogy throughout',
      '',
      'Architecture Design',
      'Planning component structure:',
      '1. Main slides.md with presentation flow',
      '2. Interactive Vue components for each major feature demo',
      '3. Custom styling with UnoCSS configuration',
      '4. Realistic data and terminal outputs for authenticity',
      '',
      'Risk Assessment',
      'Potential issues:',
      '- Component complexity affecting slide performance',
      '- Responsive design for different screen sizes',
      '- Animation timing and smooth transitions',
      '- Brand consistency with Unlearn.ai guidelines',
      '',
      'Implementation Strategy',
      'Breaking down into phases:',
      '1. Setup Slidev project with custom theme',
      '2. Create slide structure with 4-act narrative',
      '3. Build interactive components (PlanningMode, CLAUDE.md, MCP, Subagents, Hooks)',
      '4. Implement realistic terminal simulations and animations',
      '5. Polish styling and ensure responsive design',
      '',
      'Development Plan',
      '1. Initialize Slidev project with custom configuration',
      '2. Set up Unlearn.ai branding and color scheme',
      '3. Create main slide structure and navigation',
      '4. Build PlanningModeDemo component with step-by-step visualization',
      '5. Implement ClaudeMdEditor with file simulation',
      '6. Create McpServersDemo with realistic examples',
      '7. Build AgentDashboard with orchestrated execution flow',
      '8. Add HookFlow and CommandPalette components',
      '9. Fine-tune animations and responsive design',
      '10. Add speaker notes and polish presentation flow',
      '',
      '✨ Ready to Execute - Time to orchestrate!'
    ]
  }
]

const showPhase = (phaseIndex) => {
  if (isTyping.value || isThinking.value) return

  currentPhase.value = phaseIndex
  currentLine.value = -1
  visibleLines.value = []

  const phase = phases[phaseIndex]

  // Skip thinking for prompt (raw user input)
  if (phase.thinking === null) {
    // Direct to content for prompt
    isTyping.value = true
    visibleLines.value = [...phase.content]

    const showLine = () => {
      currentLine.value++
      if (currentLine.value < phase.content.length) {
        setTimeout(showLine, 120)
      } else {
        isTyping.value = false
      }
    }

    setTimeout(showLine, 300)
  } else {
    // Start thinking animation for PRD and Plan
    isThinking.value = true
    thinkingMessage.value = phase.thinking

    // Show thinking for 1.5 seconds, then start content
    setTimeout(() => {
      isThinking.value = false
      isTyping.value = true
      visibleLines.value = [...phase.content]

      const showLine = () => {
        currentLine.value++
        if (currentLine.value < phase.content.length) {
          setTimeout(showLine, 120)
        } else {
          isTyping.value = false
        }
      }

      setTimeout(showLine, 300)
    }, 1500)
  }
}

const startAutoDemo = () => {
  if (isAutoPlaying.value) return

  isAutoPlaying.value = true
  currentPhase.value = 0

  const autoSequence = async () => {
    for (let i = 0; i < phases.length; i++) {
      await new Promise(resolve => {
        showPhase(i)
        const checkComplete = () => {
          if (!isTyping.value && !isThinking.value) {
            setTimeout(resolve, 2000) // Wait 2 seconds after each phase
          } else {
            setTimeout(checkComplete, 100)
          }
        }
        checkComplete()
      })
    }
    isAutoPlaying.value = false
  }

  autoSequence()
}

// Initialize with first phase
setTimeout(() => showPhase(0), 500)
</script>
