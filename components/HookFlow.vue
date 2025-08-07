<template>
  <div class="p-3 card-clean flex flex-col">
    <h3 class="text-base font-semibold text-gray-800 mb-3">Claude Code Hooks in Action</h3>

    <div class="grid grid-cols-2 gap-3 flex-1">
      <!-- Left Column: Hook Controls and Details -->
      <div class="flex flex-col space-y-3">
        <!-- Hook Buttons -->
        <div class="space-y-2">
          <button
            @click="runFlow('validation')"
            :disabled="currentFlow !== 'idle'"
            class="w-full px-3 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700 disabled:opacity-50 transition-colors"
          >
            🛡️ UserPromptSubmit - Block Dangerous Commands
          </button>
          <button
            @click="runFlow('enhancement')"
            :disabled="currentFlow !== 'idle'"
            class="w-full px-3 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            ⚡ PreToolUse - Enhance Parameters
          </button>
          <button
            @click="runFlow('logging')"
            :disabled="currentFlow !== 'idle'"
            class="w-full px-3 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700 disabled:opacity-50 transition-colors"
          >
            📊 PostToolUse - Log & Notify
          </button>
          <button
            @click="runFlow('quality')"
            :disabled="currentFlow !== 'idle'"
            class="w-full px-3 py-2 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 disabled:opacity-50 transition-colors"
          >
            🎯 Stop Hook - Quality Gates
          </button>
        </div>

        <!-- Hook Description -->
        <div class="bg-gray-50 rounded-lg p-3 flex-1">
          <h4 class="font-semibold text-gray-800 text-sm mb-2">How Hooks Work:</h4>
          <div class="space-y-2 text-xs text-gray-600">
            <div class="flex items-start">
              <span class="text-red-500 mr-2">1.</span>
              <span><strong>UserPromptSubmit:</strong> Validates user input before Claude processes it</span>
            </div>
            <div class="flex items-start">
              <span class="text-blue-500 mr-2">2.</span>
              <span><strong>PreToolUse:</strong> Modifies tool parameters before execution</span>
            </div>
            <div class="flex items-start">
              <span class="text-green-500 mr-2">3.</span>
              <span><strong>PostToolUse:</strong> Processes results after tool execution</span>
            </div>
            <div class="flex items-start">
              <span class="text-purple-500 mr-2">4.</span>
              <span><strong>Stop:</strong> Runs quality checks before completing</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Hook Execution Log -->
      <div class="bg-gray-900 rounded-lg p-3 overflow-y-auto font-mono text-xs flex flex-col">
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
