<template>
  <div class="p-8 card-clean">
    <div class="flex justify-between items-center mb-8">
      <h3 class="text-xl font-semibold text-gray-800">Planning Mode in Action</h3>
      <button
        @click="startAnimation"
        :disabled="isAnimating"
        class="btn-primary"
      >
        {{ isAnimating ? 'Planning...' : 'Start Planning' }}
      </button>
    </div>

    <div class="space-y-4">
      <div
        v-for="(step, index) in planningSteps"
        :key="index"
        :class="[
          'flex items-center p-4 rounded-lg transition-all duration-500',
          index <= currentStep 
            ? `${step.bgColor} bg-opacity-20 border-l-4 border-current ${step.color}` 
            : 'bg-gray-100 opacity-50'
        ]"
      >
        <div class="text-2xl mr-4">{{ step.icon }}</div>
        <div class="flex-1">
          <h4 class="font-semibold text-gray-800">{{ step.title }}</h4>
          <p class="text-gray-600 text-sm">{{ step.description }}</p>
        </div>
        <div v-if="index <= currentStep" class="text-primary-600">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>

    <div v-if="currentStep >= planningSteps.length - 1" class="mt-8 p-6 bg-primary-50 border border-primary-200 rounded-xl">
      <p class="text-primary-700 font-semibold text-center">
        ✨ Planning Complete! Ready to implement with confidence.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentStep = ref(-1)
const isAnimating = ref(false)

const planningSteps = [
  {
    title: "Analyzing Requirements",
    description: "Understanding the task and identifying key components",
    icon: "🔍",
    color: "text-blue-500",
    bgColor: "bg-blue-500"
  },
  {
    title: "Designing Architecture",
    description: "Planning the structure and identifying patterns",
    icon: "🏗️",
    color: "text-green-500",
    bgColor: "bg-green-500"
  },
  {
    title: "Identifying Edge Cases",
    description: "Anticipating potential issues and error scenarios",
    icon: "⚠️",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500"
  },
  {
    title: "Planning Implementation",
    description: "Breaking down into actionable steps",
    icon: "📋",
    color: "text-purple-500",
    bgColor: "bg-purple-500"
  },
  {
    title: "Ready to Execute",
    description: "All considerations complete, ready to code",
    icon: "🚀",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500"
  }
]

const startAnimation = () => {
  isAnimating.value = true
  currentStep.value = -1
  
  const interval = setInterval(() => {
    currentStep.value++
    
    if (currentStep.value >= planningSteps.length - 1) {
      clearInterval(interval)
      setTimeout(() => {
        isAnimating.value = false
      }, 1000)
    }
  }, 1500)
}
</script>