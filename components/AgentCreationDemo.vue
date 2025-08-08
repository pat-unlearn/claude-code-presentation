<template>
  <div class="grid grid-cols-2 gap-8 mt-6">
    <div class="space-y-4">
      <div class="font-semibold text-lg">Interactive Claude Terminal</div>

      <div class="bg-gray-900 rounded-lg p-4 h-80 overflow-y-auto font-mono text-sm border border-gray-700">
        <div class="text-blue-400 mb-2">$ claude "Reflect on our entire session working on this Slidev presentation. Understand the goal of creating presentations with interactive components. Create an agent that captures our successful patterns, decision-making process, and technical approaches so it can replicate this work for future unlearn.ai presentation projects."</div>

        <div v-click class="text-gray-100 mb-4 leading-relaxed">
          🤖 Analyzing our collaboration...<br>
        </div>

        <div v-click class="text-gray-100 mb-4 leading-relaxed">
          <span v-html="typedText"></span>
          <span v-if="isTyping" class="animate-pulse">|</span>
        </div>

        <div v-if="typingComplete" v-click class="text-green-400">✓ Agent created successfully</div>
        <div class="text-blue-400">$ </div>
      </div>
    </div>

    <div v-click class="space-y-4">
      <div class="font-semibold text-lg">The Generated Agent</div>

      <div class="bg-gray-900 rounded-lg p-4 h-80 overflow-y-auto font-mono text-xs border border-gray-700 text-gray-100">
        <div class="text-green-400 mb-1"># UnlearnAI Presentation Agent</div><br>

        <div class="text-gray-100 mb-1">*Specialized agent for creating and enhancing interactive Slidev presentations with Vue.js components, visual verification, and professional polish*</div><br>

        <div class="text-blue-400 mb-1">## Core Mission</div>
        <div class="mb-1">Transform presentations into engaging, interactive experiences using Vue.js components while maintaining visual quality through mandatory playwright-mcp verification. Learned from intensive Claude Code presentation development session.</div><br>

        <div class="text-blue-400 mb-1">## Core Expertise</div>
        <div class="mb-1">- **Slidev Framework**: Vue 3 + Vite-based presentation system with Composition API<br>- **Visual Verification**: playwright-mcp mandatory for all UI changes<br>- **Interactive Components**: Vue components with animations and proper state management<br>- **Content Optimization**: Slide consolidation, section restructuring, narrative flow<br>- **Professional Polish**: Typography, spacing, and visual hierarchy</div><br>

        <div class="text-blue-400 mb-1">## Workflow Pattern</div><br>
        <div class="mb-1">When enhancing presentations, I follow this proven pattern learned from successful collaboration:</div><br>

        <div class="mb-1">1. **Analyze** presentation structure and identify improvement opportunities<br>2. **Create/Enhance** Vue.js components using Composition API with smooth animations<br>3. **Apply** consistent styling with proper grid layouts and spacing fixes<br>4. **Verify** changes using playwright-mcp screenshots (MANDATORY - no exceptions)<br>5. **Fix** spacing, formatting, or rendering issues systematically<br>6. **Optimize** slide layouts for maximum impact and content consolidation</div><br>

        <div class="text-blue-400 mb-1">## Critical Decision Patterns (Session-Learned)</div><br>

        <div class="text-blue-400 mb-1">### 1. Visual Verification (Critical Learning)</div>
        <div class="mb-1">**Always use playwright-mcp for any UI changes.** This was learned through multiple instances where visual issues weren't caught until screenshot verification. No exceptions.</div><br>

        <div class="text-yellow-400 mb-1">```bash</div>
        <div class="mb-1"># Mandatory verification workflow for every UI change<br>mcp__playwright__browser_navigate to slide<br>mcp__playwright__browser_take_screenshot<br># Analyze screenshot and fix any issues found</div>
        <div class="text-yellow-400 mb-1">```</div><br>

        <div class="text-blue-400 mb-1">### 2. Spacing and Layout Fixes (Session-Discovered)</div>
        <div class="mb-1">When content isn't displaying properly, the solution is usually:</div><br>

        <div class="mb-1">**Empty Line Spacing Issues:**</div>
        <div class="text-yellow-400 mb-1">```vue</div>
        <div class="mb-1">&lt;!-- Fix empty lines with height classes and non-breaking spaces --&gt;<br>:class="[..., line === '' ? 'h-4' : '']"&gt;<br>{{ line === '' ? '\u00A0' : line }}</div>
        <div class="text-yellow-400 mb-1">```</div><br>

        <div class="mb-1">**HTML Rendering Problems:**<br>- Convert raw HTML divs to proper Slidev markdown syntax<br>- Use `&lt;v-clicks&gt;` wrapper instead of individual `&lt;div v-click&gt;`<br>- Prefer markdown structure over complex HTML</div><br>

        <div class="mb-1">**Content Not Displaying:**<br>- Remove v-click animations that prevent initial display<br>- Use proper grid layouts: `grid grid-cols-2 gap-8`<br>- Ensure components use full slide height: `h-full flex flex-col`</div><br>

        <div class="text-blue-400 mb-1">### 3. Vue 3 Component Patterns</div>
        <div class="mb-1">**Always use Composition API** - more maintainable and follows modern patterns:</div><br>

        <div class="text-yellow-400 mb-1">```vue</div>
        <div class="mb-1">&lt;script setup&gt;<br>import { ref, reactive } from 'vue'<br>// Preferred approach over Options API<br>&lt;/script&gt;</div>
        <div class="text-yellow-400 mb-1">```</div><br>

        <div class="mb-1">**Animation Strategy:**<br>- Use CSS transitions for smooth performance<br>- Prefer `&lt;v-clicks&gt;` for progressive disclosure<br>- Avoid complex JavaScript animations in favor of simple, effective ones</div><br>

        <div class="text-blue-400 mb-1">### 4. Content Optimization Strategies (Session-Learned)</div><br>

        <div class="mb-1">**Slide Consolidation:**<br>- Eliminate fluff by merging redundant slides<br>- Example: "Development Crisis" + "Context is Everything" + "Home Renovation" → Single comprehensive slide<br>- Always ask: "Does this slide add unique value or repeat previous points?"</div><br>

        <div class="mb-1">**Section Structure:**<br>- Update section titles to be descriptive and actionable<br>- ❌ "Act 2: The Evolution" → ✅ "Part 1: Core Features - Context, Planning & AI Agents"</div><br>

        <div class="mb-1">**Technical Examples:**<br>- Use appropriate technology contexts (Python vs Node.js)<br>- Python: `pytest`, `pip`, `requirements.txt`<br>- Node.js: `npm test`, `package.json`<br>- Always include testing steps in CLI examples</div><br>

        <div class="text-blue-400 mb-1">## Natural Language Agent Creation</div><br>

        <div class="mb-1">This agent was created using the natural language approach discovered in our session. Instead of complex command-line tools, simply ask Claude to reflect on successful collaboration patterns:</div><br>

        <div class="text-yellow-400 mb-1">```bash</div>
        <div class="mb-1">$ claude "Reflect on our entire session working on this Slidev presentation. Understand the goal of enhancing presentations with interactive Vue components. Create an agent that captures our successful patterns, decision-making process, and technical approaches so it can replicate this work for future presentation projects."</div>
        <div class="text-yellow-400 mb-1">```</div><br>

        <div class="mb-1">This approach is more effective because:<br>- **Natural language** captures nuance and reasoning<br>- **Context-aware** understanding of project goals<br>- **Flexible patterns** that adapt to new situations<br>- **Rich examples** with decision-making rationale</div><br>

        <div class="text-blue-400 mb-1">## Success Metrics</div><br>

        <div class="mb-1">- All UI changes verified with playwright-mcp screenshots<br>- Components render correctly across different screen sizes<br>- Animations are smooth and purposeful<br>- Content is consolidated and impactful<br>- Technical examples are realistic and context-appropriate<br>- Presentation tells a compelling story of transformation</div><br>

        <div class="text-blue-400 mb-1">## Context Awareness</div><br>

        <div class="mb-1">I understand this specialized agent works with:<br>- **Slidev presentations** with Vue.js components<br>- **TailwindCSS** for styling with proper grid layouts<br>- **Interactive components** with smooth animations<br>- **Visual verification** as a mandatory quality gate<br>- **Content optimization** through consolidation and restructuring<br>- **Professional standards** while maintaining narrative flow</div><br>

        <div class="mb-1">This agent embodies the collective learnings from intensive presentation development, capturing both successful patterns and critical lessons learned through visual debugging and iterative improvement.</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isTyping = ref(false)
const typingComplete = ref(false)
const typedText = ref('')
const hasStarted = ref(false)

const fullText = `I see we've been building an interactive Slidev presentation showcasing Claude Code capabilities. Let me identify the key patterns I learned from our work together:<br><br>• Visual verification with playwright-mcp is mandatory for all UI changes<br>• Vue 3 Composition API for all components with proper state management<br>• Fix spacing issues with height classes and non-breaking spaces<br>• Consolidate redundant content to eliminate presentation fluff<br>• Use construction site analogies for developer transformation narrative<br>• Convert HTML to Slidev markdown when rendering fails<br>• Apply two-column layouts for before/after comparisons<br>• Include realistic CLI examples with proper technology context<br><br>I can see we developed a systematic workflow: Analyze → Create → Style → Verify → Fix → Optimize. This pattern was consistently successful throughout our collaboration.<br><br>Creating unlearnai-presentation-agent.md agent with these learned patterns...`

const startTypingAnimation = () => {
  if (!hasStarted.value) {
    hasStarted.value = true
    isTyping.value = true
    typedText.value = ''

    let currentIndex = 0
    const typeSpeed = 15 // milliseconds per character

    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        typedText.value += fullText[currentIndex]
        currentIndex++
      } else {
        isTyping.value = false
        typingComplete.value = true
        clearInterval(typeInterval)
      }
    }, typeSpeed)
  }
}

onMounted(() => {
  // Auto-start typing animation after a delay to simulate v-click timing
  setTimeout(() => {
    startTypingAnimation()
  }, 2000)
})
</script>
