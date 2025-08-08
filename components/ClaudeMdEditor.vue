<template>
  <div class="p-3 card-clean flex flex-col max-h-screen">
    <h3 class="text-base font-semibold text-gray-800 mb-3">CLAUDE.md: Your Project's DNA</h3>

    <div class="grid grid-cols-2 gap-3 flex-1 min-h-0">
      <!-- File Editor -->
      <div class="flex flex-col h-full min-h-0">
        <div class="bg-gray-900 rounded-lg p-3 flex-1 overflow-y-auto font-mono text-xs scroll-smooth max-h-72">
          <div class="text-green-400 mb-2">📄 CLAUDE.md</div>
          <div class="text-gray-300">
            <div v-for="(line, index) in displayLines"
                 :key="index"
                 :class="['transition-all duration-500',
                         index <= currentLine ? 'opacity-100' : 'opacity-30',
                         line === '' ? 'h-4' : '']">
              {{ line === '' ? '\u00A0' : line }}
            </div>
            <div v-if="isTyping" class="inline-block w-2 h-4 bg-green-400 animate-pulse"></div>
          </div>
        </div>

        <div class="flex gap-2 mt-2">
          <button @click="startDemo"
                  :disabled="isTyping"
                  class="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors">
            {{ isTyping ? 'Generating...' : 'Generate CLAUDE.md' }}
          </button>
          <button @click="reset" class="px-4 py-2 border border-gray-300 rounded text-sm">
            Reset
          </button>
        </div>
      </div>

      <!-- Benefits Panel -->
      <div class="flex flex-col justify-center h-full space-y-2">
        <div class="px-2 py-1 bg-blue-50 rounded border-l-4 border-blue-400">
          <h5 class="font-semibold text-blue-800 text-xs">🧠 Context Persistence</h5>
          <p class="text-blue-700" style="font-size: 14px;">Project details across sessions</p>
        </div>

        <div class="px-2 py-1 bg-green-50 rounded border-l-4 border-green-400">
          <h5 class="font-semibold text-green-800 text-xs">📊 Team Standards</h5>
          <p class="text-green-700" style="font-size: 14px;">Coding conventions automatically</p>
        </div>

        <div class="px-2 py-1 bg-purple-50 rounded border-l-4 border-purple-400">
          <h5 class="font-semibold text-purple-800 text-xs">🎯 Business Logic</h5>
          <p class="text-purple-700" style="font-size: 14px;">Domain-specific requirements</p>
        </div>

        <div class="px-2 py-1 bg-orange-50 rounded border-l-4 border-orange-400">
          <h5 class="font-semibold text-orange-800 text-xs">📜 Hierarchical Context</h5>
          <p class="text-orange-700" style="font-size: 14px;">Project root, parent dirs, home</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentLine = ref(-1)
const isTyping = ref(false)

const claudeMdContent = [
  '# E-Commerce Platform',
  '',
  '## Project Overview',
  'Modern e-commerce platform built with FastAPI microservices.',
  'Handles high-traffic sales with real-time inventory management.',
  '',
  '## Architecture Standards',
  '- **Backend**: FastAPI with Python 3.11+',
  '- **Database**: PostgreSQL with Redis caching',
  '- **Frontend**: React with Next.js',
  '- **Testing**: pytest + httpx for API tests',
  '- **Deployment**: Docker + Kubernetes',
  '',
  '## Coding Conventions',
  '- Use black + ruff for formatting and linting',
  '- All functions must have type hints',
  '- Minimum 90% test coverage with pytest-cov',
  '- Follow conventional commit format',
  '',
  '## Business Rules',
  '- Free shipping on orders over $75',
  '- Tax calculation based on customer location',
  '- Inventory syncs every 5 minutes via Celery',
  '- Price changes require manager approval',
  '',
  '## Security Requirements',
  '- All API endpoints require JWT authentication',
  '- Pydantic models for input validation',
  '- Rate limiting: 100 requests/minute per user',
  '- PCI compliance for payment processing',
  '',
  '## Development Workflow',
  '- Feature branches from main',
  '- Utilize orchestration agents',
  '- All tests must pass before merge',
  '- Deploy to staging before production'
]

const displayLines = ref([])

const startDemo = () => {
  if (isTyping.value) return

  isTyping.value = true
  currentLine.value = -1
  displayLines.value = [...claudeMdContent]

  const showLine = () => {
    currentLine.value++
    if (currentLine.value < claudeMdContent.length) {
      setTimeout(showLine, 200)
      // Auto-scroll to bottom as new content appears
      setTimeout(() => {
        const terminal = document.querySelector('.bg-gray-900')
        if (terminal) {
          terminal.scrollTop = terminal.scrollHeight
        }
      }, 250)
    } else {
      isTyping.value = false
    }
  }

  setTimeout(showLine, 500)
}

const reset = () => {
  currentLine.value = -1
  isTyping.value = false
  displayLines.value = []
}
</script>
