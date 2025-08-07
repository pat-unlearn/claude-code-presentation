<template>
  <div class="p-3 card-clean flex flex-col">
    <div class="grid grid-cols-2 gap-3 flex-1">
      <!-- Command Interface -->
      <div class="flex flex-col space-y-3">
        <div class="bg-gray-900 rounded-lg p-3 flex-1 overflow-y-auto font-mono text-sm">
          <div class="text-green-400 mb-1">$ claude</div>
          <div class="text-gray-300">
            <div v-if="!isRunning" class="text-blue-400">
              Type a slash command...
            </div>
            <div v-for="(cmd, index) in executedCommands"
                 :key="index"
                 class="mb-1">
              <div class="text-purple-400">{{ cmd.command }}</div>
              <div class="text-gray-400 text-xs ml-2">{{ cmd.result }}</div>
            </div>
            <div v-if="isRunning" class="flex items-center text-yellow-400">
              <div class="animate-spin rounded-full h-2 w-2 border-b border-yellow-400 mr-1"></div>
              <span class="text-xs">Executing...</span>
            </div>
          </div>
        </div>

        <!-- Command Buttons -->
        <div>
          <h4 class="font-semibold text-gray-700 text-xs mb-2">Quick Commands:</h4>
          <div class="flex gap-1 flex-wrap">
            <button v-for="cmd in commands"
                    :key="cmd.name"
                    @click="executeCommand(cmd)"
                    :disabled="isRunning"
                    class="px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition-colors disabled:opacity-50">
              {{ cmd.name }}
            </button>
          </div>
        </div>
      </div>

      <!-- Right Column: Command Details and Benefits -->
      <div class="flex flex-col space-y-3">
        <!-- Command Benefits -->
        <div class="space-y-2">
          <div class="p-2 bg-blue-50 rounded border-l-4 border-blue-400">
            <h4 class="font-semibold text-blue-800 text-xs">⚡ Instant Actions</h4>
            <p class="text-blue-700 text-xs mt-1">Execute complex workflows with a single command</p>
          </div>

          <div class="p-2 bg-green-50 rounded border-l-4 border-green-400">
            <h4 class="font-semibold text-green-800 text-xs">🎯 Context Aware</h4>
            <p class="text-green-700 text-xs mt-1">Commands understand your project structure</p>
          </div>

          <div class="p-2 bg-purple-50 rounded border-l-4 border-purple-400">
            <h4 class="font-semibold text-purple-800 text-xs">🔧 Customizable</h4>
            <p class="text-purple-700 text-xs mt-1">Create your own commands for team workflows</p>
          </div>

          <div class="p-2 bg-orange-50 rounded border-l-4 border-orange-400">
            <h4 class="font-semibold text-orange-800 text-xs">🚀 Composable</h4>
            <p class="text-orange-700 text-xs mt-1">Chain commands together for complex operations</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isRunning = ref(false)
const executedCommands = ref([])

const commands = [
  {
    name: '/test',
    command: '/test',
    result: '✅ All 127 tests passed in 2.3s'
  },
  {
    name: '/plan',
    command: '/plan "Add payment processing"',
    result: '🧠 Planning mode activated - analyzing requirements...'
  },
  {
    name: '/review',
    command: '/review --security',
    result: '🔍 Security review complete - 0 issues found'
  },
  {
    name: '/commit',
    command: '/commit',
    result: '📝 Smart commit: "feat: add OAuth authentication with tests"'
  },
  {
    name: '/deploy',
    command: '/deploy-staging',
    result: '🚀 Deployed to staging - https://staging.app.com'
  }
]

const executeCommand = (cmd) => {
  if (isRunning.value) return

  isRunning.value = true

  setTimeout(() => {
    executedCommands.value.push({
      command: cmd.command,
      result: cmd.result
    })

    // Keep only last 2 commands
    if (executedCommands.value.length > 2) {
      executedCommands.value.shift()
    }

    isRunning.value = false
  }, 1500)
}
</script>
