<template>
  <div class="p-4 card-clean h-full flex flex-col">
    <h3 class="text-lg font-semibold text-gray-800 mb-4">Planning Mode: Strategic Thinking First</h3>

    <div class="grid grid-cols-2 gap-4 flex-1">
      <!-- Planning Interface -->
      <div class="space-y-4 flex flex-col">
        <div class="bg-gray-900 rounded-lg p-4 flex-1 overflow-y-auto font-mono text-sm">
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

        <div class="flex gap-3">
          <button @click="startPlanning"
                  :disabled="isPlanning"
                  class="btn-primary">
            {{ isPlanning ? 'Planning...' : 'Start Planning' }}
          </button>
          <button @click="reset" class="px-6 py-3 border border-gray-300 rounded-lg">
            Reset
          </button>
        </div>
      </div>

      <!-- Planning Benefits -->
      <div class="space-y-2 flex flex-col">
        <div class="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400 flex-1">
          <h4 class="font-semibold text-blue-800 mb-1 text-sm">🎯 Requirements</h4>
        </div>

        <div class="p-3 bg-green-50 rounded-lg border-l-4 border-green-400 flex-1">
          <h4 class="font-semibold text-green-800 mb-1 text-sm">🏗️ Architecture</h4>
        </div>

        <div class="p-3 bg-purple-50 rounded-lg border-l-4 border-purple-400 flex-1">
          <h4 class="font-semibold text-purple-800 mb-1 text-sm">⚠️ Risk Analysis</h4>
        </div>

        <div class="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400 flex-1">
          <h4 class="font-semibold text-orange-800 mb-1 text-sm">📋 Implementation</h4>
        </div>

        <div v-if="showResults" class="p-3 bg-green-100 rounded-lg border-l-4 border-green-500 flex-1">
          <h4 class="font-semibold text-green-800 mb-1 text-sm">✨ Ready</h4>
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
    content: 'Found: FastAPI backend, PostgreSQL database, Jest testing. Security requires rate limiting and session management.'
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
