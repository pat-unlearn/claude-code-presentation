<template>
  <div class="p-3 card-clean">
    <h3 class="text-base font-semibold text-gray-800 mb-3">CLAUDE.md: Your Project's DNA</h3>
    
    <div class="grid grid-cols-2 gap-3">
      <!-- File Editor -->
      <div class="space-y-3">
        <div class="bg-gray-900 rounded-lg p-2 h-36 overflow-y-auto font-mono text-xs">
          <div class="text-green-400 mb-2">📄 CLAUDE.md</div>
          <div class="text-gray-300">
            <div v-for="(line, index) in displayLines" 
                 :key="index" 
                 :class="['transition-all duration-500', 
                         index <= currentLine ? 'opacity-100' : 'opacity-30']">
              {{ line }}
            </div>
            <div v-if="isTyping" class="inline-block w-2 h-4 bg-green-400 animate-pulse"></div>
          </div>
        </div>
        
        <div class="flex gap-2">
          <button @click="startDemo" 
                  :disabled="isTyping"
                  class="btn-primary text-sm">
            {{ isTyping ? 'Generating...' : 'Generate CLAUDE.md' }}
          </button>
          <button @click="reset" class="px-4 py-2 border border-gray-300 rounded-lg text-sm">
            Reset
          </button>
        </div>
      </div>
      
      <!-- Benefits Panel -->
      <div class="space-y-2">
        <div class="p-2 bg-blue-50 rounded-lg border-l-4 border-blue-400">
          <h4 class="font-semibold text-blue-800 mb-1 text-xs">🧠 Context Persistence</h4>
        </div>
        
        <div class="p-2 bg-green-50 rounded-lg border-l-4 border-green-400">
          <h4 class="font-semibold text-green-800 mb-1 text-xs">📊 Team Standards</h4>
        </div>
        
        <div class="p-2 bg-purple-50 rounded-lg border-l-4 border-purple-400">
          <h4 class="font-semibold text-purple-800 mb-1 text-xs">🎯 Business Logic</h4>
        </div>
        
        <div class="p-2 bg-orange-50 rounded-lg border-l-4 border-orange-400">
          <h4 class="font-semibold text-orange-800 mb-1 text-xs">📜 Hierarchical Context</h4>
          <p class="text-orange-700 text-xs">Reads from project root, parent dirs, home directory</p>
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
  '- PR requires 2 code reviews',
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