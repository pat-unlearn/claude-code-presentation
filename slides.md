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
      Let's go! →
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

## The AI Development Evolution
### How Claude Code passes the vibe check

<div class="grid grid-cols-3 gap-6 mt-6">

<div v-click class="p-4 bg-red-50 border-l-4 border-red-400 rounded-lg">
  <h3 class="font-bold mb-3 text-red-800">❌ Vibe Coding</h3>
  <div class="space-y-2 text-sm">
    <div class="text-gray-700">• "Just make it work"</div>
    <div class="text-gray-700">• No planning or structure</div>
    <div class="text-gray-700">• Quick fixes pile up</div>
    <div class="text-gray-700">• Technical debt everywhere</div>
  </div>
  <div class="mt-3 text-xs text-red-600 font-semibold">
    🎯 Result: Chaos & rework
  </div>
</div>

<div v-click class="p-4 bg-orange-50 border-l-4 border-orange-400 rounded-lg">
  <h3 class="font-bold mb-3 text-orange-800">⚠️ Prompt Engineering</h3>
  <div class="space-y-2 text-sm">
    <div class="text-gray-700">• One-shot prompts</div>
    <div class="text-gray-700">• No project context</div>
    <div class="text-gray-700">• Generic solutions</div>
    <div class="text-gray-700">• Manual integration</div>
  </div>
  <div class="mt-3 text-xs text-orange-600 font-semibold">
    🎯 Result: Inconsistent compatibility
  </div>
</div>

<div v-click class="p-4 bg-green-50 border-l-4 border-green-400 rounded-lg">
  <h3 class="font-bold mb-3 text-green-800">✅ Agentic Development</h3>
  <div class="space-y-2 text-sm">
    <div class="text-gray-700">• Persistent project context</div>
    <div class="text-gray-700">• Strategic planning mode</div>
    <div class="text-gray-700">• Specialized AI agents</div>
    <div class="text-gray-700">• Automated workflows</div>
  </div>
  <div class="mt-3 text-xs text-green-600 font-semibold">
    🎯 Result: High quality code
  </div>
</div>

</div>

<div v-click class="mt-6 p-4 bg-blue-50 rounded border-l-4 border-blue-400 text-center">
  <p class="text-blue-800 font-semibold">
    🚀 <strong>Claude Code:</strong> AI development assistant that researches, thinks, and plans prior to execution
  </p>
</div>

---
transition: slide-left
layout: section
background: linear-gradient(135deg, #dbeafe 0%, #f0f9ff 50%, #ffffff 100%)
class: text-center font-sans
---

# <span class="text-primary-700 font-bold">Part 1:</span> Context

## <span class="text-gray-600 font-medium">CLAUDE.md, Planning, MCP & Specialized Agents</span>

<!--
arstarst
-->

---
layout: default
---

## CLAUDE.md: Your Project's DNA
### The Foundation of Context Engineering

<ClaudeMdEditor />


---
layout: default
---

## The Power of Context
### Before vs After CLAUDE.md

<div class="grid grid-cols-2 gap-6 mt-4">
  <div v-click class="p-4 bg-red-50 border-l-4 border-red-400 rounded-lg">
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
  
  <div v-click class="p-4 bg-green-50 border-l-4 border-green-400 rounded-lg">
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

## The Planning Advantage
### Strategic Development with Claude Code
<div class="grid grid-cols-2 gap-8 mt-4">
<v-clicks>
  <div class="p-4 bg-red-50 border-l-4 border-red-400 rounded-lg">
    <h3 class="font-bold mb-3 text-red-800">⚡ Traditional Prompt</h3>
    <ul class="space-y-2 text-sm">
      <li>Prompt your agent to write code</li>
      <li>Discover requirements as you go</li>
      <li>Hit unexpected edge cases</li>
      <li>Debug loop hell - "You're absolutely right!"</li>
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

## Planning Mode: Think Before You Code
### How Claude Code Thinks Strategically

<PlanningModeDemo />

---
layout: default
---

## What is MCP?
### Model Context Protocol: Claude's Power-Up System

<v-clicks>

**Think of Claude like a smartphone:**
- 📱 **Built-in apps** - Claude's native tools (Read, Write, Bash, etc.)
- 🔌 **App Store** - MCP servers add specialized capabilities
- 🚀 **Power-ups** - Each MCP server = new superpowers

**The Smartphone Analogy:**

<div class="grid grid-cols-2 gap-6 mt-6">
  <div class="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
    <h3 class="font-bold mb-3 text-blue-800">📱 Your Phone</h3>
    <ul class="space-y-2 text-sm text-blue-700">
      <li>Camera app for photos</li>
      <li>Maps app for navigation</li>
      <li>Banking app for finances</li>
      <li>Each app has specialized tools</li>
    </ul>
  </div>
  
  <div class="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
    <h3 class="font-bold mb-3 text-green-800">🤖 Claude + MCP</h3>
    <ul class="space-y-2 text-sm text-green-700">
      <li>playwright-mcp for browser automation</li>
      <li>serena-mcp for project indexing</li>
      <li>xcodebuild-mcp to connect Claude to phone simulator</li>
      <li>Each server adds domain expertise</li>
    </ul>
  </div>
</div>

</v-clicks>

<div v-click class="mt-6 p-4 bg-purple-50 rounded border-l-4 border-purple-400 text-center">
  <p class="text-purple-800 font-semibold">
    🔌 <strong>Result:</strong> Claude becomes a universal interface to your entire tech stack
  </p>
</div>

---
layout: default
---

## MCP Servers: Extending Claude's Reach
### Beyond Built-in Tools: Third-party Integrations

<McpServersDemo />

---
layout: default
---

## The Context Window Challenge
### Understanding LLM Memory Limitations

<v-clicks>

**LLMs Have Fixed-Size Memory**
- Context window = fixed-size buffer in memory
- Contains: past messages + model responses + system instructions
- Hard limit: cannot "see" anything beyond the cutoff point

**When the Buffer Fills Up...**
- New information pushes out old information
- Model literally "forgets" earlier conversation parts
- Long sessions become less coherent over time
- Context gets fragmented and disconnected

</v-clicks>

<div v-click class="mt-6 p-4 bg-red-50 rounded border-l-4 border-red-400 text-center">
  <p class="text-red-800 font-semibold">
    ⚠️ <strong>The Problem:</strong> LLMs can't maintain perfect memory across long conversations
  </p>
</div>

---
layout: default
---

## The Context Window Challenge
### The Detective's Corkboard Analogy

<DetectiveCorkboard />

---
layout: default
---

## Subagents: Your Specialized Team
### Focused AI Assistants for Complex Tasks

<v-clicks>

**What are Subagents?**
- **Specialized AI assistants** multiple detective each with an area of expertise
- **Isolated context windows** each detective has their own board
- **Limited tool access** for security and reliability
- **Parallel execution** for faster task completion

**Key Advantages:**
- 🎯 **Domain Expertise** - Each agent is an expert in their field
- 🔄 **Concurrent Processing** - Work on multiple aspects simultaneously
- 🔒 **Secure Isolation** - Agents can't interfere with each other
- 📊 **Context Windows** - More meaningful summaries since context is all relevant

</v-clicks>

<div v-click class="mt-4 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400">
  <p class="text-center text-sm text-purple-800 font-semibold">
    🎭 <strong>Think of it as:</strong> Having a senior security expert, documentation specialist, and QA engineer all working on your code
  </p>
</div>

---
layout: default
---

## Subagent Architecture
### How Specialized Agents Work

<div class="grid grid-cols-2 gap-6 mt-4">
  <div class="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
    <h3 class="font-bold mb-3 text-blue-800">Specialized Agent Types</h3>
    <ul class="space-y-2 text-sm">
      <li><strong>⚛️ Frontend Agent</strong><br>React components, UI/UX, responsive design</li>
      <li><strong>🖥️ Backend Agent</strong><br>APIs, databases, business logic</li>
      <li><strong>🧪 Testing Agent</strong><br>Unit tests, integration tests, coverage</li>
    </ul>
  </div>
  
  <div class="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
    <h3 class="font-bold mb-3 text-green-800">Orchestration Agents</h3>
    <ol class="space-y-2 text-sm">
      <li>User requests complex task</li>
      <li>Claude analyzes and plans approach</li>
      <li>Multiple agents deploy in parallel</li>
      <li>Results combined & validated</li>
    </ol>
  </div>
</div>

<div class="mt-6 p-4 bg-purple-50 rounded border-l-4 border-purple-400 text-center">
  <p class="text-purple-800 font-semibold">
    ✨ Three specialists working in parallel, each focused on their domain expertise
  </p>
</div>

---
layout: default
---

## Live Subagent Demo
### Watch Specialized Agents in Action

<AgentDashboard />

---
layout: center
---

# Claude Code Hooks
## <span class="text-gradient-accent font-semibold">Custom Shell Scripts for AI Workflows</span>

<v-clicks>

**What are hooks?** Custom shell scripts that execute at specific points in Claude's workflow to enforce your team's policies and integrate with your tools.

<div class="mt-3 space-y-2">
  <div class="p-2 card-clean border-l-4 border-red-500">
    <h4 class="font-bold mb-1 text-xs text-gray-800">🛡️ UserPromptSubmit Hook</h4>
    <h5 class="text-xs text-gray-600">Validates and blocks dangerous commands</h5>
  </div>
  
  <div class="p-2 card-clean border-l-4 border-unlearn-blue">
    <h4 class="font-bold mb-1 text-xs text-gray-800">⚡ PreToolUse Hook</h4>
    <h5 class="text-xs text-gray-600">Enhances parameters with team context</h5>
  </div>
  
  <div class="p-2 card-clean border-l-4 border-green-500">
    <h4 class="font-bold mb-1 text-xs text-gray-800">📊 PostToolUse Hook</h4>
    <h5 class="text-xs text-gray-600">Logs to dashboard, sends notifications</h5>
  </div>
  
  <div class="p-2 card-clean border-l-4 border-purple-500">
    <h4 class="font-bold mb-1 text-xs text-gray-800">🎯 Stop Hook</h4>
    <h5 class="text-xs text-gray-600">Quality gates and reporting</h5>
  </div>
</div>

</v-clicks>

---
layout: section
transition: slide-left
background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #f8fafc 100%)
class: text-center font-sans
---

# <span class="text-primary-700 font-bold">Part 2:</span> Helpful Tools

## <span class="text-gray-600 font-medium">Hooks, Slash Commands, CLI Tools</span>


---
layout: default
---

# Hooks in Action
## Automate Your Development Workflow

<div class="h-full flex flex-col">
  <HookFlow />
</div>

---
layout: center
---

## Slash Commands
### <span class="text-gradient-primary font-semibold">"The Power User's Toolkit"</span>

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
layout: default
---

## Slash Commands Demo
### Power User Toolkit at Your Fingertips

<div class="h-full flex flex-col">
  <CommandPalette />
</div>

---
layout: default
---

# Terminal Native Integration
## Claude Code + Your Favorite CLI Tools

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="space-y-4">

**The Terminal Advantage:**
- **Direct tool access** - Runs git, docker, npm natively
- **Tool output parsing** - Understands error messages
- **Workflow continuity** - No context switching
- **Custom CLI commands** - Create your own CLI commands for Claude to re-use

**Common tools it excels with:**
- Git • Docker • Kubernetes • npm/yarn • pytest • curl • jq
</div>

<div class="space-y-4">

**Real Workflow Example:**
```bash
$ claude "create feature branch and add proper logging with tests"

✓ Running 'git checkout -b feature/add-logging'
✓ Running 'pytest -v' 
✓ All 47 tests passing
✓ Adding structured logging to main.py
✓ Installing python-json-logger via pip
✓ Updating requirements.txt
✓ Creating logging configuration in config/logging.yaml
✓ Running 'pytest -v' (verifying changes)
✓ All tests still passing + 3 new logging tests
✓ Running 'git add . && git commit -m "feat: add structured logging and monitoring"'

Feature branch created with comprehensive logging setup.
```


</div>

</div>

---
layout: section
background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f1f5f9 100%)
class: text-center font-sans
---

# <span class="text-primary-700 font-bold">Part 3:</span> Workflow

## <span class="text-gray-600 font-medium">Your Path to Agentic Development</span>

---
layout: default
---

## How This Presentation Was Built
### Real Claude Code Workflow in Action

<WorkflowDemo />

---
layout: default
---

# From Session to Agent
## Natural Language Agent Creation

<AgentCreationDemo />

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

# Getting Started

<v-clicks>

### 🚀 Quick Start Guide

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 card-clean border-l-4 border-unlearn-blue">
    <div class="font-bold text-gray-800 mb-2">1. Install Claude Code</div>
    <code class="text-sm bg-gray-50 px-2 py-1 rounded text-unlearn-blue">npm install -g @anthropic/claude-code</code>
  </div>
  
  <div class="p-4 card-clean border-l-4 border-unlearn-blue">
    <div class="font-bold text-gray-800 mb-2">2. Initialize in your project</div>
    <code class="text-sm bg-gray-50 px-2 py-1 rounded text-unlearn-blue">claude init</code>
  </div>
  
  <div class="p-4 card-clean border-l-4 border-unlearn-blue">
    <div class="font-bold text-gray-800 mb-2">3. Populate your CLAUDE.md file</div>
    <span class="text-sm text-gray-600">Add project context and standards</span>
  </div>
  
  <div class="p-4 card-clean border-l-4 border-unlearn-blue">
    <div class="font-bold text-gray-800 mb-2">4. Start orchestrating</div>
    <code class="text-sm bg-gray-50 px-2 py-1 rounded text-unlearn-blue">claude</code>
  </div>
</div>

</v-clicks>


---
layout: center
---

# Tips and tricks

<div class="mt-6 space-y-3">
  <div v-click class="p-4 card-clean border-l-4 border-purple-500">
    <strong class="text-gray-800 text-base">Hashtags #:</strong> Can be used to add a concept directly to CLAUDE.md
  </div>
  
  <div v-click class="p-4 card-clean border-l-4 border-unlearn-blue">
    <strong class="text-gray-800 text-base">Shift + Tab:</strong> Cycles between modes: normal, accepts edits, planning, bypass permissions
  </div>
  
  <div v-click class="p-4 card-clean border-l-4 border-green-500">
    <strong class="text-gray-800 text-base">Memorialized Workflows:</strong> Completed workflows can be preserved in a specialized agent or command.
  </div>
  
  <div v-click class="p-4 card-clean border-l-4 border-yellow-500">
    <strong class="text-gray-800 text-base">Claude knows Claude:</strong> Create an agent to optimize your agents, hooks, commands, MCP servers
  </div>

  <div v-click class="p-4 card-clean border-l-4 border-orange-500">
    <strong class="text-gray-800 text-base">Orchestrate:</strong> Less coding, more orchestration. Utilize orchestration agents to delegate tasks.
  </div>
  
  <div v-click class="p-4 card-clean border-l-4 border-red-500">
    <strong class="text-gray-800 text-base">Reference Agents and docs in CLAUDE.md:</strong> Submit a prompt. Get coffee. Pretend it was hard.
  </div>
</div>

---
layout: default
---

# Sources & References
## Research Supporting Our Claims

<div class="text-sm space-y-4">

**Developer Productivity & Interruptions:**
- UC Irvine Study (2008) - Gloria Mark: "23 minutes to regain focus after interruption"
- Industry Studies: "70+ bugs per 1,000 lines of code created on average"
- IBM/CISQ Research: "Production bugs cost 4-30x more to fix than design-phase bugs"

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
