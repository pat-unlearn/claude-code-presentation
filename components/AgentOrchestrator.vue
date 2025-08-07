<template>
  <div class="p-8 card-clean">
    <div class="flex justify-between items-center mb-6">
      <h3 class="text-xl font-semibold text-gray-800">Agent Orchestration</h3>
      <button
        @click="startOrchestration"
        :disabled="isRunning"
        class="btn-primary"
      >
        {{ isRunning ? 'Orchestrating...' : 'Start Agents' }}
      </button>
    </div>

    <div class="grid grid-cols-3 gap-4 mb-6">
      <div
        v-for="agent in agents"
        :key="agent.id"
        :class="[
          'p-4 rounded-lg border-2 transition-all duration-500 bg-white',
          activeAgents.includes(agent.id)
            ? `border-current ${agent.color} animate-pulse shadow-lg`
            : 'border-gray-200 opacity-50'
        ]"
      >
        <div class="text-center">
          <div class="text-3xl mb-2">{{ agent.icon }}</div>
          <h4 class="font-semibold text-gray-800 text-sm">{{ agent.name }}</h4>
          <div class="mt-2">
            <div v-if="activeAgents.includes(agent.id)" class="flex justify-center">
              <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-50 border border-gray-200 rounded-xl p-4 h-48 overflow-y-auto text-sm">
      <div class="text-primary-600 font-semibold mb-2">$ claude "Refactor payment module for security and performance"</div>
      <div v-for="(result, index) in results" :key="index" class="mb-1">
        <span :class="getAgentColor(result.agentId)">
          [{{ result.agentName }}]
        </span>
        <span class="text-gray-800 ml-2">{{ result.task }}</span>
      </div>
      <div v-if="!isRunning && results.length > 0" class="text-primary-600 font-medium mt-4">
        ✨ All agents completed! Code refactored with security, performance, and architectural improvements.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeAgents = ref([])
const isRunning = ref(false)
const results = ref([])

const agents = [
  {
    id: 'security',
    name: 'Security Agent',
    icon: '🔒',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    tasks: [
      'Scanning for SQL injection vulnerabilities...',
      'Checking authentication middleware...',
      'Validating input sanitization...',
      'Found: Potential XSS risk in line 42'
    ]
  },
  {
    id: 'performance',
    name: 'Performance Agent',
    icon: '⚡',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    tasks: [
      'Analyzing query performance...',
      'Checking for N+1 queries...',
      'Evaluating caching strategies...',
      'Suggestion: Implement Redis caching'
    ]
  },
  {
    id: 'architecture',
    name: 'Architecture Agent',
    icon: '🏗️',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    tasks: [
      'Reviewing code structure...',
      'Checking design patterns...',
      'Evaluating separation of concerns...',
      'Recommendation: Extract service layer'
    ]
  }
]

const getAgentColor = (agentId) => {
  const agent = agents.find(a => a.id === agentId)
  return agent ? agent.color : 'text-gray-400'
}

const startOrchestration = () => {
  isRunning.value = true
  results.value = []
  activeAgents.value = []

  // Start all agents simultaneously
  agents.forEach((agent, index) => {
    setTimeout(() => {
      activeAgents.value.push(agent.id)
      
      // Execute agent tasks
      agent.tasks.forEach((task, taskIndex) => {
        setTimeout(() => {
          results.value.push({
            agentId: agent.id,
            agentName: agent.name,
            task: task,
            timestamp: Date.now()
          })
          
          // Complete agent after last task
          if (taskIndex === agent.tasks.length - 1) {
            setTimeout(() => {
              const agentIndex = activeAgents.value.indexOf(agent.id)
              if (agentIndex > -1) {
                activeAgents.value.splice(agentIndex, 1)
              }
              
              // Check if all agents are done
              if (index === agents.length - 1) {
                setTimeout(() => {
                  isRunning.value = false
                }, 500)
              }
            }, 1000)
          }
        }, taskIndex * 2000)
      })
    }, index * 500)
  })
}
</script>