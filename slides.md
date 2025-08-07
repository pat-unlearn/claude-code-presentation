---
theme: default
css: style.css
title: 'Claude Code'
info: |
  ## Claude Code: Building software at the speed of thought
  Unlearn.ai presentation on agentic development
class: text-center font-sans
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
colorSchema: dark
layout: cover
---

<style scoped>
.slidev-layout {
  background: linear-gradient(135deg, #1A081C 0%, #1A081C 50%, #2d1b3d 75%, #3d2a4f 100%) !important;
}
</style>

<!-- Unlearn.ai Logo -->
<div class="abs-tl m-8">
  <img src="/images/unlearn-logo.svg" alt="Unlearn.ai" class="h-12 w-auto opacity-90" />
</div>

<div class="h-full flex flex-col justify-center items-center space-y-12 px-8">
  <div class="space-y-8 max-w-5xl">
    <h1 class="text-7xl font-bold leading-tight tracking-tight">
      Agentic Development with <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500">Claude Code</span>
    </h1>
    <p class="text-2xl text-gray-300 font-light">
      Building software at the speed of thought
    </p>
  </div>
  
  <div class="pt-8">
    <button @click="$slidev.nav.next" class="px-8 py-4 bg-white/10 backdrop-blur text-white border border-white/20 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-200 transform hover:scale-105 cursor-pointer">
      Explore the Future →
    </button>
  </div>
</div>

<div class="abs-br m-6 mb-12 flex gap-2">
  <a href="https://claude.ai/code" target="_blank" alt="Claude Code"
    class="text-xl text-white opacity-70 hover:opacity-100 transition-opacity">
    🤖
  </a>
</div>

---
transition: slide-left
layout: default
---

# The Development Crisis
## Why Smart Developers Are Struggling

<v-clicks>

**The Reality of Modern Development:**
- **~23 minutes** to regain focus after each interruption*
- **70+ bugs** per 1,000 lines of code created on average
- **4-30x higher** cost to fix bugs found in production vs. design phase

**Context Issues:**
- AI forgets project context between sessions  
- No understanding of team conventions  
- Generic responses don't fit your codebase

<div class="mt-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
  <p class="text-red-800 font-semibold">
    💡 <strong>The core issue:</strong> AI without context is just expensive autocomplete
  </p>
</div>

</v-clicks>

---
layout: default
---

# Context is Everything
## The Missing Piece in AI Development

**Traditional AI Coding Tools:**
```python
# ai "write a login function"
# Generic code, doesn't match your patterns
# No knowledge of your auth system
```

**What Developers Actually Need:**

<v-clicks>

- Project awareness - Understanding your specific codebase
- Team standards - Following your conventions automatically  
- Business context - Knowing your domain and requirements
- UI feedback loops - Specific to frontend development

</v-clicks>

---
transition: slide-left
layout: section
background: linear-gradient(135deg, #dbeafe 0%, #f0f9ff 50%, #ffffff 100%)
class: text-center font-sans
---

# <span class="text-primary-700 font-bold">Act 2:</span> The Evolution

## <span class="text-gray-600 font-medium">From Tools to Teammates</span>

---
layout: two-cols
---

# The Home Renovation Analogy

<v-clicks>

- 🔨 **Traditional Coding** - DIY with basic hand tools
- ⚡ **IDE** - Power tools from Home Depot  
- 🧑 **Copilot** - Asking your neighbor to help
- 🏠 **Claude Code** - Full renovation crew with project manager

</v-clicks>

::right::

<div class="mt-8">
  <img src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800" class="rounded-lg shadow-2xl" />
</div>

---
layout: default
---

# The Planning Advantage
## Strategic Development with Claude Code
<div class="grid grid-cols-2 gap-8 mt-4">
<v-clicks>
  <div class="p-4 bg-red-50 border-l-4 border-red-400 rounded-lg">
    <h3 class="font-bold mb-3 text-red-800">⚡ Traditional Approach</h3>
    <ul class="space-y-2 text-sm">
      <li>Jump straight into coding</li>
      <li>Discover requirements as you go</li>
      <li>Hit unexpected edge cases</li>
      <li>Refactor and debug extensively</li>
    </ul>
    <div class="mt-4 p-3 bg-red-100 rounded text-red-800 font-semibold text-center">
      ⏱️ Time: 4-6 hours + debugging
    </div>
  </div>
</v-clicks>

<v-clicks> 
  <div class="p-4 bg-green-50 border-l-4 border-green-400 rounded-lg">
    <h3 class="font-bold mb-3 text-green-800">🧠 Planning Mode</h3>
    <ul class="space-y-2 text-sm">
      <li>Analyze requirements thoroughly</li>
      <li>Design architecture and data flow</li>
      <li>Identify edge cases and risks</li>
      <li>Execute with precision</li>
    </ul>
    <div class="mt-4 p-3 bg-green-100 rounded text-green-800 font-semibold text-center">
      ⚡ Time: 1 hour total
    </div>
  </div>
</v-clicks>
</div>

<div v-click class="mt-6 p-4 bg-blue-50 rounded border-l-4 border-blue-400 text-center">
  <p class="text-blue-800 font-semibold">
    🎯 Result: Early planning reduces bugs by 4-6x and cuts development time by 60-90%*
  </p>
  <p class="text-xs text-blue-600 mt-2">
    *Based on low-code/AI development studies (2024) and formal project management research
  </p>
</div>

---
layout: default
---

# Planning Mode: Think Before You Code
## How Claude Code Thinks Strategically

<div class="h-4/5 flex flex-col">
<PlanningModeDemo class="flex-1" />
</div>

---
layout: default
---

# CLAUDE.md: Your Project's DNA
## The Foundation of Context Engineering

<ClaudeMdEditor />

---
layout: default
---

# The Power of Context
## Before vs After CLAUDE.md

<div class="grid grid-cols-2 gap-6 mt-4">
  <div class="p-4 bg-red-50 border-l-4 border-red-400 rounded-lg">
    <h3 class="font-bold mb-4 text-red-800">❌ Without Context</h3>
    <div class="space-y-3 text-sm">
      <div>
        <div class="font-mono text-xs text-gray-600 mb-1">$ claude "add user login"</div>
        <div class="text-gray-700">Generic Flask login, no FastAPI integration</div>
      </div>
      <div>
        <div class="font-mono text-xs text-gray-600 mb-1">$ claude "write tests"</div>
        <div class="text-gray-700">Uses unittest instead of your pytest setup</div>
      </div>
      <div>
        <div class="font-mono text-xs text-gray-600 mb-1">$ claude "fix bug"</div>
        <div class="text-gray-700">Generic solution breaks your standards</div>
      </div>
    </div>
  </div>
  
  <div class="p-4 bg-green-50 border-l-4 border-green-400 rounded-lg">
    <h3 class="font-bold mb-4 text-green-800">✅ With CLAUDE.md</h3>
    <div class="space-y-3 text-sm">
      <div>
        <div class="font-mono text-xs text-gray-600 mb-1">$ claude "add user login"</div>
        <div class="text-gray-700">FastAPI OAuth + Pydantic models + error handling</div>
      </div>
      <div>
        <div class="font-mono text-xs text-gray-600 mb-1">$ claude "write tests"</div>
        <div class="text-gray-700">Pytest + fixtures + 90% coverage</div>
      </div>
      <div>
        <div class="font-mono text-xs text-gray-600 mb-1">$ claude "fix bug"</div>
        <div class="text-gray-700">Follows patterns + docs + regression test</div>
      </div>
    </div>
  </div>
</div>

<div v-click class="mt-6 p-4 bg-purple-50 rounded border-l-4 border-purple-400 text-center">
  <p class="text-purple-800 font-semibold">
    🎯 Context = Consistency: Every interaction builds on your established patterns
  </p>
</div>

---
layout: default
---

# Subagents: Your Specialized Team
## Focused AI Assistants for Complex Tasks

<v-clicks>

**What are Subagents?**
- **Specialized AI assistants** with focused expertise
- **Isolated context windows** for better concentration  
- **Limited tool access** for security and reliability
- **Parallel execution** for faster task completion

**Key Advantages:**
- 🎯 **Domain Expertise** - Each agent is an expert in their field
- 🔄 **Concurrent Processing** - Work on multiple aspects simultaneously
- 🔒 **Secure Isolation** - Agents can't interfere with each other
- 📊 **Quality Assurance** - Validation agents enforce standards

</v-clicks>

<div v-click class="mt-4 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
  <p class="text-center text-sm text-purple-800 font-semibold">
    🎭 <strong>Think of it as:</strong> Having a senior security expert, documentation specialist, and QA engineer all working on your code simultaneously
  </p>
</div>

---
layout: two-cols
---

# Subagent Architecture
## How Specialized Agents Work

## Agent Types

**🔒 Security Agent**  
OWASP scanning, auth review, input validation

**📚 Documentation Agent**  
API docs, code comments, setup guides

**✅ Validation Agent**  
Test suites, coverage, quality gates

::right::

## Orchestration Flow

**1.** User requests complex task

**2.** Claude analyzes and plans approach  

**3.** Multiple agents deploy in parallel

**4.** Results combined & validated

---

<div class="mt-6 p-4 bg-purple-50 rounded border-l-4 border-purple-400 text-center">
  <p class="text-purple-800 font-semibold">
    ✨ Three specialists working in parallel, each focused on their domain expertise
  </p>
</div>

---
layout: default
---

# Live Subagent Demo
## Watch Specialized Agents in Action

<AgentDashboard />

---
layout: center
---

# Claude Code Hooks
## <span class="text-gradient-accent font-semibold">"Custom Shell Scripts for AI Workflows"</span>

<v-clicks>

**What are hooks?** Custom shell scripts that execute at specific points in Claude's workflow to enforce your team's policies and integrate with your tools.

<div class="mt-4 space-y-3">
  <div class="p-3 card-clean border-l-4 border-red-500">
    <h3 class="font-bold mb-1 text-sm text-gray-800">🛡️ UserPromptSubmit Hook</h3>
    <p class="text-sm text-gray-600">Validates and blocks dangerous commands</p>
  </div>
  
  <div class="p-3 card-clean border-l-4 border-unlearn-blue">
    <h3 class="font-bold mb-1 text-sm text-gray-800">⚡ PreToolUse Hook</h3>
    <p class="text-sm text-gray-600">Enhances parameters with team context</p>
  </div>
  
  <div class="p-3 card-clean border-l-4 border-green-500">
    <h3 class="font-bold mb-1 text-sm text-gray-800">📊 PostToolUse Hook</h3>
    <p class="text-sm text-gray-600">Logs to dashboard, sends notifications</p>
  </div>
  
  <div class="p-3 card-clean border-l-4 border-purple-500">
    <h3 class="font-bold mb-1 text-sm text-gray-800">🎯 Stop Hook</h3>
    <p class="text-sm text-gray-600">Quality gates and reporting</p>
  </div>
</div>

</v-clicks>

---

# Hooks in Action

<HookFlow />

---
layout: center
---

# Slash Commands
## <span class="text-gradient-primary font-semibold">"The Power User's Toolkit"</span>

<div class="grid grid-cols-2 gap-4 mt-6">
  <div v-click class="p-4 bg-white rounded-lg border-l-4 border-green-500">
    <h3 class="text-base font-bold mb-3 text-gray-800">Built-in Commands</h3>
    <div class="space-y-2 text-sm">
      <div class="font-mono text-green-600">/test - Run test suite</div>
      <div class="font-mono text-blue-600">/plan - Enter planning mode</div>
      <div class="font-mono text-purple-600">/review - Code review</div>
      <div class="font-mono text-orange-600">/commit - Smart commit</div>
    </div>
  </div>
  
  <div v-click class="p-4 bg-white rounded-lg border-l-4 border-blue-500">
    <h3 class="text-base font-bold mb-3 text-gray-800">Custom Commands</h3>
    <div class="space-y-2 text-sm">
      <div class="font-mono text-blue-600">/deploy-staging</div>
      <div class="font-mono text-blue-600">/generate-docs</div>
      <div class="font-mono text-blue-600">/security-scan</div>
      <div class="font-mono text-blue-600">/refactor-to-microservice</div>
    </div>
  </div>
</div>

---

# Slash Commands Demo

<CommandPalette />

---
layout: section
transition: slide-left
background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #f8fafc 100%)
class: text-center font-sans
---

# <span class="text-primary-700 font-bold">Act 3:</span> The Transformation

## <span class="text-gray-600 font-medium">The Multiplier Effect</span>

---
layout: center
---

# Before vs After

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-6 card-clean">
    <h3 class="text-lg font-bold mb-4 text-gray-700">Traditional Development</h3>
    <ul class="space-y-3 text-gray-600">
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 bg-red-400 rounded-full"></div>
        Feature implementation: 4-6 hours
      </li>
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 bg-red-400 rounded-full"></div>
        Bug discovery: In production
      </li>
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 bg-red-400 rounded-full"></div>
        Refactoring: 2-3 days
      </li>
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 bg-red-400 rounded-full"></div>
        Documentation: Often skipped
      </li>
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 bg-red-400 rounded-full"></div>
        Test coverage: 40-60%
      </li>
    </ul>
  </div>
  
  <div class="p-6 card-clean border-2 border-primary-200">
    <h3 class="text-lg font-bold mb-4 text-primary-700">With Claude Code</h3>
    <ul class="space-y-3 text-gray-600">
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
        Feature implementation: 30-45 min
      </li>
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
        Bug discovery: Before commit
      </li>
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
        Refactoring: 30 minutes
      </li>
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
        Documentation: Auto-generated
      </li>
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 bg-primary-500 rounded-full"></div>
        Test coverage: 90%+
      </li>
    </ul>
  </div>
</div>


---
layout: two-cols
---

# Specialized Agent Orchestration
## How Agents Handle Complex Tasks

::left::

**🎯 Task: FastAPI Authentication System**
- JWT token management
- Pydantic user models  
- Password reset endpoints
- Rate limiting middleware
- Comprehensive pytest suite

::right::

**🔒 Security Agent**  
Reviews JWT implementation, validates password policies, checks for auth vulnerabilities

**🐍 Python Expert Agent**  
Ensures FastAPI best practices, proper type hints, Pydantic model validation

**✅ Testing Agent**  
Creates pytest fixtures, async test cases, mocks external dependencies

---

**✨ Three specialists working in parallel, each focused on their domain expertise**

---
layout: section
background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f1f5f9 100%)
class: text-center font-sans
---

# <span class="text-primary-700 font-bold">Act 4:</span> The Future

## <span class="text-gray-600 font-medium">Your New Development Paradigm</span>

---
layout: center
---

# The Vision

<div class="text-center mb-8">
  <div v-click class="text-4xl font-bold mb-8 text-gradient-primary">
    Developers as "Code Conductors"
  </div>
</div>

<div v-click class="grid grid-cols-3 gap-6 mt-6">
  <div class="text-center">
    <div class="text-4xl mb-3">🎼</div>
    <h3 class="font-bold mb-2">Compose</h3>
    <p class="text-sm text-gray-600">Design systems and architecture</p>
  </div>
  
  <div class="text-center">
    <div class="text-4xl mb-3">🎭</div>
    <h3 class="font-bold mb-2">Direct</h3>
    <p class="text-sm text-gray-600">Guide AI agents to build</p>
  </div>
  
  <div class="text-center">
    <div class="text-4xl mb-3">🎯</div>
    <h3 class="font-bold mb-2">Perfect</h3>
    <p class="text-sm text-gray-600">Refine and optimize results</p>
  </div>
</div>

---

# Team Transformation

<div v-click class="mt-8 mb-6">
  <h3 class="text-xl font-bold mb-4">When Everyone Has This Power:</h3>
  <ul class="space-y-2 text-lg">
    <li>🚀 Junior devs produce senior-level code</li>
    <li>💡 Senior devs focus on architecture and innovation</li>
    <li>🔍 Agents analyze codebases and explain intent for faster onboarding</li>
    <li>🎯 Teams tackle previously impossible projects</li>
  </ul>
</div>

<div v-click class="p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg backdrop-blur-sm border border-purple-500/20">
  <p class="text-center">
    <span class="text-xl font-bold">"The 10x developer myth becomes reality"</span><br>
    <span class="text-base mt-2 block">Not through working harder, but working with AI teammates</span>
  </p>
</div>

---

# Getting Started

<div v-click class="mt-6">
  <h3 class="text-xl font-bold mb-4">🚀 Quick Start Guide</h3>
  
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 card-clean border-l-4 border-unlearn-blue">
      <div class="font-bold text-gray-800 mb-2">1. Install Claude Code</div>
      <code class="text-sm bg-gray-50 px-2 py-1 rounded text-unlearn-blue">npm install -g @anthropic/claude-code</code>
    </div>
    
    <div class="p-4 card-clean border-l-4 border-unlearn-blue">
      <div class="font-bold text-gray-800 mb-2">2. Initialize in your project</div>
      <code class="text-sm bg-gray-50 px-2 py-1 rounded text-unlearn-blue">claude init</code>
    </div>
    
    <div class="p-4 card-clean border-l-4 border-unlearn-blue">
      <div class="font-bold text-gray-800 mb-2">3. Create your CLAUDE.md file</div>
      <span class="text-sm text-gray-600">Add project context and standards</span>
    </div>
    
    <div class="p-4 card-clean border-l-4 border-unlearn-blue">
      <div class="font-bold text-gray-800 mb-2">4. Start orchestrating</div>
      <code class="text-sm bg-gray-50 px-2 py-1 rounded text-unlearn-blue">claude "Your first task"</code>
    </div>
  </div>
</div>


---
layout: center
---

# Key Takeaways

<div class="mt-6 space-y-3">
  <div v-click class="p-4 card-clean border-l-4 border-unlearn-blue">
    <strong class="text-gray-800 text-base">Stop coding. Start orchestrating.</strong>
  </div>
  
  <div v-click class="p-4 card-clean border-l-4 border-purple-500">
    <strong class="text-gray-800 text-base">Your code, amplified.</strong>
  </div>
  
  <div v-click class="p-4 card-clean border-l-4 border-green-500">
    <strong class="text-gray-800 text-base">From keyboard warrior to code conductor.</strong>
  </div>
  
  <div v-click class="p-4 card-clean border-l-4 border-orange-500">
    <strong class="text-gray-800 text-base">The future of development is here. Today.</strong>
  </div>
</div>

---
layout: default
---

# Sources & References
## Research Supporting Our Claims

<div class="text-sm space-y-4">

**Planning & Bug Reduction:**
- IBM Systems Science Institute Research (2008): "Bugs cost 4-6x more to fix post-release vs. design phase"
- 2024 Software Development Statistics: "73% of organizations using formal project management meet goals"

**AI Development Efficiency:**
- GitHub Research (2024): "97% of developers using AI tools, 60% more frequent usage"
- Low-code Platform Studies (2024): "90% reduction in application development time"
- Stack Overflow Survey (2024): "76% of developers using or planning to use AI tools"

**Project Success Rates:**
- TeamStage Project Management Statistics (2024): "70% of projects fail globally due to inadequate planning"
- Functionize SDLC Research: "Early bug detection significantly reduces maintenance costs"

**Development Productivity:**
- JetBrains Developer Ecosystem Report (2024): "Automation tools lead to better code quality"
- ITTransition Software Development Trends (2025): "20% average revenue growth from software investment"

</div>

<div class="mt-6 p-3 bg-gray-50 rounded text-xs text-gray-600">
Note: Statistics are compiled from multiple 2024-2025 industry reports and studies. Individual results may vary based on project complexity, team experience, and implementation approach.
</div>

---
layout: end
class: text-center font-sans
---

<style scoped>
.slidev-layout {
  background: linear-gradient(135deg, #1A081C 0%, #1A081C 50%, #2d1b3d 75%, #3d2a4f 100%) !important;
}
</style>

<div class="h-full flex flex-col justify-center items-center space-y-8">
  <h1 class="text-5xl font-bold text-white mb-8">Thank You!</h1>
  <p class="text-2xl text-gray-300 font-light">Ready to transform your development?</p>
  
  <div class="space-y-6 mt-12">
    <div class="text-lg text-gray-300">
      🌐 <a href="https://claude.ai/code" class="text-blue-400 hover:text-blue-300 font-medium">claude.ai/code</a>
    </div>
    <div class="text-lg text-gray-300">
      📚 <a href="https://docs.anthropic.com/claude-code" class="text-blue-400 hover:text-blue-300 font-medium">Documentation</a>
    </div>
    <div class="text-lg text-gray-300">
      💬 <a href="https://discord.gg/claude-code" class="text-blue-400 hover:text-blue-300 font-medium">Join the Community</a>
    </div>
  </div>
  
  <div class="mt-16 text-6xl">
    🚀
  </div>
</div>
