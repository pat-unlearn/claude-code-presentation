<template>
  <div class="p-3 card-clean flex flex-col max-h-screen">
    <h3 class="text-base font-semibold text-gray-800 mb-3">Planning Mode: Strategic Thinking First</h3>

    <div class="grid grid-cols-2 gap-3 flex-1 min-h-0">
      <!-- Planning Interface -->
      <div class="flex flex-col h-full min-h-0">
        <div class="bg-gray-900 rounded-lg p-3 flex-1 overflow-y-auto font-mono text-xs scroll-smooth max-h-72">
          <div class="text-blue-400 mb-2">🧠 Planning Session</div>
          <div class="text-gray-300">
            <div v-if="!isPlanning" class="text-green-400">
              $ claude --plan "Build user authentication with OAuth"
            </div>
            <div v-for="(step, index) in visibleSteps"
                 :key="index"
                 :class="['mb-3', step.type === 'thinking' ? 'text-yellow-400' : step.type === 'analysis' ? 'text-blue-400' : 'text-green-400']">
              <div class="font-semibold">{{ step.title }}</div>
              <div class="ml-4 text-gray-400 text-xs leading-relaxed">{{ step.content }}</div>
            </div>
            <div v-if="isPlanning && visibleSteps.length < planningSteps.length"
                 class="flex items-center text-yellow-400">
              <div class="animate-spin rounded-full h-3 w-3 border-b border-yellow-400 mr-2"></div>
              Analyzing...
            </div>
          </div>
        </div>

        <div class="flex gap-2 mt-2">
          <button @click="startPlanning"
                  :disabled="isPlanning"
                  class="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors">
            {{ isPlanning ? 'Planning...' : 'Start Planning' }}
          </button>
          <button @click="reset" class="px-4 py-2 border border-gray-300 rounded text-sm">
            Reset
          </button>
        </div>
      </div>

      <!-- Planning Benefits -->
      <div class="flex flex-col justify-center h-full space-y-2">
        <div class="px-2 py-1 bg-blue-50 rounded border-l-4 border-blue-400">
          <h5 class="font-semibold text-blue-800 text-xs">🎯 Requirements Analysis</h5>
          <p class="text-blue-700" style="font-size: 14px;">Context and project needs</p>
        </div>

        <div class="px-2 py-1 bg-green-50 rounded border-l-4 border-green-400">
          <h5 class="font-semibold text-green-800 text-xs">🏗️ Architecture Design</h5>
          <p class="text-green-700" style="font-size: 14px;">System structure and data flow</p>
        </div>

        <div class="px-2 py-1 bg-purple-50 rounded border-l-4 border-purple-400">
          <h5 class="font-semibold text-purple-800 text-xs">⚠️ Risk Assessment</h5>
          <p class="text-purple-700" style="font-size: 14px;">Issues and edge cases</p>
        </div>

        <div class="px-2 py-1 bg-orange-50 rounded border-l-4 border-orange-400">
          <h5 class="font-semibold text-orange-800 text-xs">📋 Implementation Plan</h5>
          <p class="text-orange-700" style="font-size: 14px;">Development strategy</p>
        </div>

        <div v-if="showResults" class="px-2 py-1 bg-green-100 rounded border-l-4 border-green-500">
          <h5 class="font-semibold text-green-800 text-xs">✨ Ready to Execute</h5>
          <p class="text-green-700" style="font-size: 14px;">Time to code!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isPlanning = ref(false)
const visibleSteps = ref([])
const showResults = ref(false)

const planningSteps = [
  {
    type: 'thinking',
    title: '🤔 Understanding Requirements',
    content: 'User wants OAuth authentication. Checking CLAUDE.md for existing auth patterns and security requirements...'
  },
  {
    type: 'analysis',
    title: '📊 Context Analysis',
    content: 'Found: FastAPI backend, PostgreSQL database, Pytest testing. Security requires rate limiting and session management.'
  },
  {
    type: 'thinking',
    title: '🏗️ Architecture Design',
    content: 'Planning OAuth flow: Google/GitHub providers, JWT tokens, refresh mechanism, middleware integration...'
  },
  {
    type: 'analysis',
    title: '⚠️ Risk Assessment',
    content: 'Potential issues: CSRF attacks, token expiry, race conditions in refresh, callback URL validation...'
  },
  {
    type: 'thinking',
    title: '🧪 Testing Strategy',
    content: 'Need unit tests for auth middleware, integration tests for OAuth flow, security tests for edge cases...'
  },
  {
    type: 'plan',
    title: '📋 Implementation Plan',
    content: `1. OAuth config & providers\n2. JWT middleware & validation\n3. Database user model updates\n4. API endpoints & routes\n5. Error handling & logging\n6. Comprehensive test suite`
  }
]

const startPlanning = () => {
  if (isPlanning.value) return

  isPlanning.value = true
  visibleSteps.value = []
  showResults.value = false

  const showNextStep = (index) => {
    if (index < planningSteps.length) {
      visibleSteps.value.push(planningSteps[index])
      setTimeout(() => showNextStep(index + 1), 2000)
      // Auto-scroll to bottom as new content appears
      setTimeout(() => {
        const terminal = document.querySelector('.bg-gray-900')
        if (terminal) {
          terminal.scrollTop = terminal.scrollHeight
        }
      }, 2100)
    } else {
      isPlanning.value = false
      setTimeout(() => {
        showResults.value = true
      }, 1000)
    }
  }

  setTimeout(() => showNextStep(0), 1000)
}

const reset = () => {
  isPlanning.value = false
  visibleSteps.value = []
  showResults.value = false
}
</script>
