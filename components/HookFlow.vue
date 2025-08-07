<template>
  <div class="p-3 card-clean">
    <h3 class="text-base font-semibold text-gray-800 mb-2">Claude Code Hooks in Action</h3>
    
    <div class="grid grid-cols-2 gap-2">
      <!-- Hook Buttons -->
      <div class="space-y-2">
        <button
          @click="runFlow('validation')"
          :disabled="currentFlow !== 'idle'"
          class="w-full px-3 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700 disabled:opacity-50"
        >
          🛡️ UserPromptSubmit
        </button>
        <button
          @click="runFlow('enhancement')"
          :disabled="currentFlow !== 'idle'"
          class="w-full px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 disabled:opacity-50"
        >
          ⚡ PreToolUse
        </button>
        <button
          @click="runFlow('logging')"
          :disabled="currentFlow !== 'idle'"
          class="w-full px-3 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700 disabled:opacity-50"
        >
          📊 PostToolUse
        </button>
        <button
          @click="runFlow('quality')"
          :disabled="currentFlow !== 'idle'"
          class="w-full px-3 py-2 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 disabled:opacity-50"
        >
          🎯 Stop Hook
        </button>
      </div>
      
      <!-- Hook Log -->
      <div class="bg-gray-900 rounded-lg p-2 h-32 overflow-y-auto font-mono text-xs">
        <div class="text-blue-400 mb-1">Hook Execution Log:</div>
        <div v-for="(log, index) in logs" :key="index" class="mb-1">
          <div class="flex items-start">
            <span :class="log.color" class="mr-2">{{ log.icon }}</span>
            <div class="text-gray-300 text-xs">
              <div>{{ log.action }}</div>
              <div v-if="log.script" class="text-yellow-400 font-mono text-xs ml-2 mt-1">
                $ {{ log.script }}
              </div>
            </div>
          </div>
        </div>
        <div v-if="currentFlow === 'idle' && logs.length === 0" class="text-gray-500 text-xs">
          Select a hook to see execution flow...
        </div>
        <div v-if="currentFlow !== 'idle'" class="flex items-center text-yellow-400">
          <div class="animate-spin rounded-full h-2 w-2 border-b border-yellow-400 mr-1"></div>
          <span class="text-xs">Executing...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentFlow = ref('idle')
const logs = ref([])

const flows = {
  'validation': {
    name: 'UserPromptSubmit Hook',
    steps: [
      { action: 'User submits dangerous command', icon: '⚠️', color: 'text-red-400', script: null },
      { action: 'Executing: ./validate-command.sh "rm -rf /"', icon: '🔍', color: 'text-orange-400', script: './validate-command.sh "rm -rf /"' },
      { action: 'Command blocked by hook', icon: '🛡️', color: 'text-red-400', script: null }
    ]
  },
  'enhancement': {
    name: 'PreToolUse Hook',
    steps: [
      { action: 'Claude prepares file operation', icon: '📝', color: 'text-blue-400', script: null },
      { action: 'Executing: ./add-security-context.sh auth.js', icon: '🔒', color: 'text-blue-400', script: './add-security-context.sh auth.js' },
      { action: 'Enhanced operation proceeds', icon: '✅', color: 'text-green-400', script: null }
    ]
  },
  'logging': {
    name: 'PostToolUse Hook',
    steps: [
      { action: 'Claude completes code change', icon: '🔧', color: 'text-green-400', script: null },
      { action: 'Executing: ./log-to-dashboard.sh --file auth.js', icon: '📊', color: 'text-blue-400', script: './log-to-dashboard.sh --file auth.js --action modified' },
      { action: 'Slack notification sent', icon: '💬', color: 'text-purple-400', script: null }
    ]
  },
  'quality': {
    name: 'Stop Hook',
    steps: [
      { action: 'Claude finishes task', icon: '🎯', color: 'text-blue-400', script: null },
      { action: 'Executing: ./quality-gate.sh --session abc123', icon: '🔍', color: 'text-orange-400', script: './quality-gate.sh --session abc123 --run-all' },
      { action: 'Quality gate passed', icon: '🎉', color: 'text-green-400', script: null }
    ]
  }
}

const runFlow = (flowType) => {
  currentFlow.value = flowType
  logs.value = []
  
  const flow = flows[flowType]
  
  flow.steps.forEach((step, index) => {
    setTimeout(() => {
      logs.value.push(step)
      
      // Keep only last 3 logs
      if (logs.value.length > 3) {
        logs.value.shift()
      }
      
      if (index === flow.steps.length - 1) {
        setTimeout(() => {
          currentFlow.value = 'idle'
        }, 1500)
      }
    }, index * 1200)
  })
}
</script>