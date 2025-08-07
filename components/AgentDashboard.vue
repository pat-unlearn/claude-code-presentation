<template>
  <div class="p-3 card-clean">
    <div class="flex justify-between items-center mb-3">
      <h3 class="text-base font-semibold text-gray-800">Subagent Orchestration</h3>
      <button @click="startOrchestration" 
              :disabled="isRunning"
              class="btn-primary">
        {{ isRunning ? 'Orchestrating...' : 'Deploy Agents' }}
      </button>
    </div>
    
    <!-- Agent Status Grid -->
    <div class="grid grid-cols-3 gap-2 mb-3">
      <div v-for="agent in agents" 
           :key="agent.id"
           :class="['p-3 rounded-lg border-2 transition-all duration-500 bg-white',
                   activeAgents.includes(agent.id) 
                     ? `border-${agent.color.replace('text-', '')}-500 shadow-lg` 
                     : 'border-gray-200 opacity-60']">
        <div class="text-center">
          <div class="text-2xl mb-1">{{ agent.icon }}</div>
          <h4 class="font-semibold text-gray-800 text-xs">{{ agent.name }}</h4>
          <div class="text-xs text-gray-600 mt-1 truncate">{{ agent.specialty }}</div>
          <div class="mt-3">
            <div v-if="activeAgents.includes(agent.id)" 
                 class="flex items-center justify-center gap-2">
              <div :class="['animate-pulse w-2 h-2 rounded-full', 
                          `bg-${agent.color.replace('text-', '')}-500`]"></div>
              <span class="text-xs text-gray-600">Active</span>
            </div>
            <div v-else-if="completedAgents.includes(agent.id)"
                 class="flex items-center justify-center gap-2">
              <div class="w-2 h-2 rounded-full bg-green-500"></div>
              <span class="text-xs text-gray-600">Complete</span>
            </div>
            <div v-else class="text-xs text-gray-400">Standby</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Terminal Output -->
    <div class="bg-gray-900 rounded-xl p-2 h-32 overflow-y-auto font-mono text-xs">
      <div class="text-blue-400 mb-1">$ claude "Secure the payment processing system"</div>
      <div v-for="(log, index) in logs" :key="index" class="mb-1">
        <span :class="getAgentColor(log.agentId)">[{{ log.agentName }}]</span>
        <span class="text-gray-300 ml-2">{{ log.message }}</span>
      </div>
      <div v-if="isRunning && logs.length === 0" class="text-yellow-400">
        Initializing subagents...
      </div>
      <div v-if="!isRunning && logs.length > 0" class="text-green-400 mt-4">
        ✨ All subagents completed! Payment system secured with comprehensive improvements.
      </div>
    </div>
    
    <!-- Agent Benefits -->
    <div class="grid grid-cols-3 gap-1 mt-2">
      <div class="p-1 bg-blue-50 rounded border-l-4 border-blue-400">
        <h4 class="font-semibold text-blue-800 text-xs">🔄 Parallel</h4>
      </div>
      <div class="p-1 bg-green-50 rounded border-l-4 border-green-400">
        <h4 class="font-semibold text-green-800 text-xs">🎯 Specialized</h4>
      </div>
      <div class="p-1 bg-purple-50 rounded border-l-4 border-purple-400">
        <h4 class="font-semibold text-purple-800 text-xs">🔒 Isolated</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isRunning = ref(false)
const activeAgents = ref([])
const completedAgents = ref([])
const logs = ref([])

const agents = [
  {
    id: 'security',
    name: 'Security Agent',
    specialty: 'OWASP & Vulnerability Analysis',
    icon: '🔒',
    color: 'text-red-500',
    tasks: [
      'Scanning payment endpoints for SQL injection vulnerabilities...',
      'Analyzing authentication middleware for session fixation...',
      'Checking input validation on credit card processing...',
      'Validating HTTPS enforcement and certificate pinning...',
      'Security audit complete - 3 critical issues found and fixed'
    ]
  },
  {
    id: 'docs',
    name: 'Documentation Agent',
    specialty: 'API Docs & Code Comments',
    icon: '📚',
    color: 'text-blue-500',
    tasks: [
      'Generating OpenAPI specification for payment endpoints...',
      'Creating developer documentation for integration...',
      'Adding inline code comments for complex payment logic...',
      'Building troubleshooting guide for common errors...',
      'Documentation suite complete - ready for developers'
    ]
  },
  {
    id: 'validator',
    name: 'Validation Agent',
    specialty: 'Testing & Quality Gates',
    icon: '✅',
    color: 'text-green-500',
    tasks: [
      'Creating unit tests for payment validation logic...',
      'Building integration tests for payment gateway...',
      'Setting up end-to-end tests for checkout flow...',
      'Configuring code coverage requirements (95%+)...',
      'Validation complete - all tests passing with full coverage'
    ]
  }
]

const getAgentColor = (agentId) => {
  const agent = agents.find(a => a.id === agentId)
  return agent ? agent.color : 'text-gray-400'
}

const startOrchestration = () => {
  if (isRunning.value) return
  
  isRunning.value = true
  activeAgents.value = []
  completedAgents.value = []
  logs.value = []
  
  // Start all agents with slight delays
  agents.forEach((agent, agentIndex) => {
    setTimeout(() => {
      activeAgents.value.push(agent.id)
      
      // Execute agent tasks
      agent.tasks.forEach((task, taskIndex) => {
        setTimeout(() => {
          logs.value.push({
            agentId: agent.id,
            agentName: agent.name,
            message: task,
            timestamp: Date.now()
          })
          
          // Complete agent after last task
          if (taskIndex === agent.tasks.length - 1) {
            setTimeout(() => {
              activeAgents.value = activeAgents.value.filter(id => id !== agent.id)
              completedAgents.value.push(agent.id)
              
              // Check if all agents are done
              if (completedAgents.value.length === agents.length) {
                setTimeout(() => {
                  isRunning.value = false
                }, 1000)
              }
            }, 1000)
          }
        }, taskIndex * 2500)
      })
    }, agentIndex * 800)
  })
}
</script>