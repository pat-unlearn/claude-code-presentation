<template>
  <div class="p-3 card-clean h-full flex flex-col max-h-screen">
    <h3 class="text-base font-semibold text-gray-800 mb-3">MCP Servers: Extending Claude's Reach</h3>

    <div class="grid grid-cols-2 gap-3 flex-1 min-h-0">
      <!-- MCP Servers Panel -->
      <div class="flex flex-col h-full min-h-0">
        <!-- Terminal Output -->
        <div class="bg-gray-900 rounded-lg p-3 flex-1 overflow-y-auto font-mono text-xs scroll-smooth max-h-72">
          <div class="text-green-400 mb-2">🔗 MCP Server Connection</div>
          <div class="text-gray-300">
            <div v-if="!activeServer" class="text-gray-400">
              $ Click on an MCP server below to see its capabilities...
            </div>
            <div v-for="(log, index) in terminalLogs"
                 :key="index"
                 :class="['mb-1', log.type === 'command' ? 'text-blue-400' :
                                log.type === 'success' ? 'text-green-400' :
                                log.type === 'info' ? 'text-yellow-400' : 'text-gray-300']">
              {{ log.message }}
            </div>
            <div v-if="isLoading" class="flex items-center text-yellow-400">
              <div class="animate-spin rounded-full h-3 w-3 border-b border-yellow-400 mr-2"></div>
              Loading MCP tools...
            </div>
          </div>
        </div>

        <!-- Server Cards - Side by Side -->
        <div class="grid grid-cols-2 gap-2 mt-3">
          <div v-for="server in mcpServers"
               :key="server.id"
               @click="activateServer(server.id)"
               :class="['p-2 rounded border-2 cursor-pointer transition-all duration-300',
                       activeServer === server.id
                         ? `border-${server.color}-500 bg-${server.color}-50 shadow-lg`
                         : 'border-gray-200 hover:border-gray-300 bg-white']">
            <div class="flex items-center justify-between">
              <div class="flex-1 min-w-0">
                <h4 class="font-semibold text-gray-800 text-xs truncate">{{ server.icon }} {{ server.name }}</h4>
                <p class="text-gray-600 text-xs truncate">{{ server.description }}</p>
              </div>
              <div v-if="activeServer === server.id"
                   :class="['w-2 h-2 rounded-full animate-pulse', `bg-${server.color}-500`]"></div>
            </div>
          </div>
        </div>

        <div class="flex gap-2 mt-2">
          <button @click="resetDemo" class="px-3 py-1 border border-gray-300 rounded text-xs">
            Reset
          </button>
        </div>
      </div>

      <!-- Benefits Panel -->
      <div class="flex flex-col h-full space-y-2">
        <div class="px-2 py-1 bg-blue-50 rounded border-l-4 border-blue-400">
          <h5 class="font-semibold text-blue-800 text-xs">🌐 Extended Capabilities</h5>
          <p class="text-blue-700" style="font-size: 14px;">Beyond built-in tools</p>
        </div>

        <div class="px-2 py-1 bg-green-50 rounded border-l-4 border-green-400">
          <h5 class="font-semibold text-green-800 text-xs">🔧 Specialized Tools</h5>
          <p class="text-green-700" style="font-size: 14px;">Domain-specific functionality</p>
        </div>

        <div class="px-2 py-1 bg-purple-50 rounded border-l-4 border-purple-400">
          <h5 class="font-semibold text-purple-800 text-xs">🔗 Third-party Integration</h5>
          <p class="text-purple-700" style="font-size: 14px;">Connect external services</p>
        </div>

        <div class="px-2 py-1 bg-orange-50 rounded border-l-4 border-orange-400">
          <h5 class="font-semibold text-orange-800 text-xs">⚡ Real-time Interaction</h5>
          <p class="text-orange-700" style="font-size: 14px;">Live tool execution</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeServer = ref(null)
const terminalLogs = ref([])
const isLoading = ref(false)

const mcpServers = [
  {
    id: 'playwright-mcp',
    name: 'playwright-mcp',
    icon: '🎭',
    color: 'blue',
    description: 'Browser automation & web testing',
    tools: [
      'browser_navigate',
      'browser_click',
      'browser_type',
      'browser_take_screenshot',
      'browser_evaluate'
    ],
    demoLogs: [
      { type: 'command', message: '$ Connecting to playwright-mcp server...' },
      { type: 'success', message: '✅ Connected! Available tools:' },
      { type: 'info', message: '  • browser_navigate - Navigate to URLs' },
      { type: 'info', message: '  • browser_click - Interact with elements' },
      { type: 'info', message: '  • browser_type - Fill forms and input fields' },
      { type: 'info', message: '  • browser_take_screenshot - Capture page states' },
      { type: 'info', message: '  • browser_evaluate - Execute JavaScript' },
      { type: 'success', message: '🎭 Browser automation ready!' },
      { type: 'command', message: '$ claude "Test the user login flow end-to-end"' },
      { type: 'info', message: '🔍 Navigating to http://localhost:3000/login...' },
      { type: 'info', message: '⌨️  Filling username: test@example.com' },
      { type: 'info', message: '⌨️  Filling password: ••••••••' },
      { type: 'info', message: '🖱️  Clicking login button...' },
      { type: 'info', message: '⏳ Waiting for dashboard redirect...' },
      { type: 'success', message: '✅ Login successful! User redirected to /dashboard' },
      { type: 'success', message: '📸 Screenshot saved: login-flow-success.png' },
      { type: 'success', message: '🧪 E2E test completed in 3.2s' }
    ]
  },
  {
    id: 'serena-mcp',
    name: 'serena-mcp',
    icon: '🔍',
    color: 'green',
    description: 'Code analysis & project indexing',
    tools: [
      'analyze_code',
      'refactor_function',
      'generate_tests',
      'check_dependencies'
    ],
    demoLogs: [
      { type: 'command', message: '$ Connecting to serena-mcp server...' },
      { type: 'success', message: '✅ Connected! Available tools:' },
      { type: 'info', message: '  • analyze_code - Deep code analysis' },
      { type: 'info', message: '  • refactor_function - Smart refactoring' },
      { type: 'info', message: '  • generate_tests - Auto test generation' },
      { type: 'info', message: '  • check_dependencies - Dependency audit' },
      { type: 'success', message: '🔍 Code analysis tools ready!' },
      { type: 'command', message: '$ claude "Analyze my authentication module"' },
      { type: 'info', message: '🔍 Analyzing authentication.py...' },
      { type: 'success', message: '✅ Found 3 optimization opportunities' },
      { type: 'success', message: '📝 Generated 12 test cases for edge cases' }
    ]
  }
]

const activateServer = (serverId) => {
  if (activeServer.value === serverId) return

  activeServer.value = serverId
  isLoading.value = true
  terminalLogs.value = []

  const server = mcpServers.find(s => s.id === serverId)

  // Simulate connection and tool discovery
  let logIndex = 0
  const showNextLog = () => {
    if (logIndex < server.demoLogs.length) {
      terminalLogs.value.push(server.demoLogs[logIndex])
      logIndex++

      // Auto-scroll to bottom
      setTimeout(() => {
        const terminal = document.querySelector('.bg-gray-900')
        if (terminal) {
          terminal.scrollTop = terminal.scrollHeight
        }
      }, 100)

      const delay = server.demoLogs[logIndex - 1].type === 'command' ? 1000 : 800
      setTimeout(showNextLog, delay)
    } else {
      isLoading.value = false
    }
  }

  setTimeout(() => {
    isLoading.value = false
    showNextLog()
  }, 1000)
}

const resetDemo = () => {
  activeServer.value = null
  terminalLogs.value = []
  isLoading.value = false
}
</script>
