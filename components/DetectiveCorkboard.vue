<template>
  <div class="p-4 card-clean">

    <div class="grid grid-cols-2 gap-6">
      <!-- Corkboard Visualization -->
      <div class="flex flex-col">
        <div class="relative bg-amber-100 rounded-lg p-3 h-64 border-4 border-amber-200"
             :style="{ background: 'linear-gradient(45deg, #f3e8c7 25%, transparent 25%), linear-gradient(-45deg, #f3e8c7 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f3e8c7 75%), linear-gradient(-45deg, transparent 75%, #f3e8c7 75%)', backgroundSize: '20px 20px' }">

          <!-- Board Title -->
          <div class="text-center mb-4 text-amber-900 font-bold text-sm">
            🕵️ CASE EVIDENCE BOARD
          </div>

          <!-- Evidence Cards -->
          <div class="relative h-full overflow-hidden">
            <div v-for="(item, index) in visibleItems"
                 :key="item.id"
                 :class="[
                   'absolute transition-all duration-500 transform',
                   item.type === 'evidence' ? 'bg-yellow-200 border-2 border-yellow-400' : 'bg-green-200 border-2 border-green-400',
                   'rounded p-2 text-xs shadow-md',
                   item.removing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                 ]"
                 :style="{
                   left: item.x + 'px',
                   top: item.y + 'px',
                   width: item.width + 'px',
                   zIndex: item.zIndex || 1,
                   transform: item.removing ? 'rotate(5deg)' : `rotate(${item.rotation}deg)`
                 }">

              <!-- Pin -->
              <div class="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full shadow-sm border border-red-600"></div>

              <div class="font-semibold text-gray-800 mb-1">{{ item.title }}</div>
              <div class="text-gray-600 text-xs">{{ item.content }}</div>

              <!-- Summary indicator -->
              <div v-if="item.type === 'summary'" class="absolute -bottom-1 -right-1 bg-green-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                📋
              </div>
            </div>

            <!-- Capacity indicator -->
            <div v-if="boardFull" class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold animate-pulse">
              BOARD FULL!
            </div>
          </div>
        </div>

        <!-- Controls -->
        <div class="flex gap-2 mt-4">
          <button @click="nextPhase"
                  :disabled="currentPhase === 'complete'"
                  class="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400">
            {{ getButtonText() }}
          </button>
          <button @click="reset" class="px-4 py-2 border border-gray-300 rounded text-sm">
            Reset
          </button>
        </div>
      </div>

      <!-- Explanation Panel -->
      <div class="flex flex-col justify-center space-y-4">
        <div v-if="currentPhase === 'ready'" class="p-4 bg-gray-50 rounded border-l-4 border-gray-400">
          <h5 class="font-semibold text-gray-800 text-sm">🚀 Start Debugging</h5>
          <p class="text-gray-700 text-sm">A detective investigates a crime, much like Claude Code investigates a bug.</p>
        </div>

        <div v-if="currentPhase === 'filling'" class="p-4 bg-blue-50 rounded border-l-4 border-blue-400">
          <h5 class="font-semibold text-blue-800 text-sm">📌 Building the Case</h5>
          <p class="text-blue-700 text-sm">Adding evidence, notes, and witness statements. As the details are added, the context window fills.</p>
        </div>

        <div v-if="currentPhase === 'full'" class="p-4 bg-red-50 rounded border-l-4 border-red-400">
          <h5 class="font-semibold text-red-800 text-sm">⚠️ Board at Capacity</h5>
          <p class="text-red-700 text-sm">Eventually we run out of space, and we can't add new evidence without making room first. This is the LLM context limit.</p>
        </div>

        <div v-if="currentPhase === 'summarizing'" class="p-4 bg-yellow-50 rounded border-l-4 border-yellow-400">
          <h5 class="font-semibold text-yellow-800 text-sm">📝 Creating Summaries</h5>
          <p class="text-yellow-700 text-sm">Those detailed notes are replaced with essential summaries to make space. LLMs do this automatically.</p>
        </div>

        <div v-if="currentPhase === 'continuing'" class="p-4 bg-green-50 rounded border-l-4 border-green-400">
          <h5 class="font-semibold text-green-800 text-sm">🔄 Case Continues</h5>
          <p class="text-green-700 text-sm">That summary gives us a good idea of the investigation. It's not perfect, but it frees up space to continue adding new notes</p>
        </div>

        <div v-if="currentPhase === 'complete'" class="p-4 bg-indigo-50 rounded border-l-4 border-indigo-400">
          <h5 class="font-semibold text-indigo-800 text-sm">✅ Demo Complete</h5>
          <p class="text-indigo-700 text-sm">You've seen how fixed-size memory forces summarization. This is exactly how LLMs work!</p>
        </div>

        <!-- LLM Connection -->
        <div class="p-4 bg-purple-50 rounded border-l-4 border-purple-400">
          <h5 class="font-semibold text-purple-800 text-sm">🧠 LLM Context Window</h5>
          <p class="text-purple-700 text-sm">
            LLMs have a fixed memory size, this is their context window. Much like the detective's corkboard when its full, they must "summarize" old context to make room for new information.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentPhase = ref('ready')
const visibleItems = ref([])
const boardFull = ref(false)
const nextId = ref(1)
let phaseStep = 0

// Evidence items to add
const evidencePool = [
  { title: "Witness A", content: "Saw suspect at 3:15pm near coffee shop" },
  { title: "Security Cam", content: "Red sedan leaving at 3:22pm" },
  { title: "Phone Record", content: "Last call at 3:10pm unknown number" },
  { title: "Fingerprint", content: "Partial print on door handle" },
  { title: "Witness B", content: "Heard shouting at 3:00pm" },
  { title: "Photo", content: "Broken window outside angle" },
  { title: "Receipt", content: "Gas purchase 2:45pm same day" },
  { title: "DNA Sample", content: "Hair fiber from scene" },
  { title: "Timeline", content: "Events between 2:45-3:25pm" },
  { title: "Vehicle Info", content: "Red sedan, license partial" },
  { title: "Witness C", content: "Saw argument in parking lot" },
  { title: "Credit Card", content: "Used at 2:30pm nearby ATM" },
  { title: "CCTV Clip", content: "Suspect entering building" },
  { title: "Email Trail", content: "Threatening messages found" },
  { title: "Alibi Check", content: "Suspect's story inconsistent" },
  { title: "Footprints", content: "Size 10 boot prints muddy" },
  { title: "New Witness", content: "Anonymous tip hotline call" },
  { title: "Bank Records", content: "Unusual withdrawal pattern" },
  { title: "Witness D", content: "Delivery driver saw getaway" },
  { title: "Store Receipt", content: "Bought cable ties day before" },
  { title: "Text Messages", content: "Deleted texts recovered" },
  { title: "GPS Data", content: "Phone location matches scene" },
  { title: "Neighbor", content: "Heard car doors slamming" },
  { title: "Tool Analysis", content: "Screwdriver left at scene" },
  { title: "Social Media", content: "Posted threats online" },
  { title: "Insurance", content: "Policy increased recently" },
  { title: "Work Badge", content: "Keycard used after hours" },
  { title: "Witness E", content: "Saw suspect fleeing area" },
  { title: "Parking Ticket", content: "Car parked illegally nearby" },
  { title: "Glove Found", content: "DNA match on glove" },
  { title: "Video Call", content: "Background shows location" },
  { title: "Hotel Record", content: "False alibi confirmed" },
  { title: "Medical Report", content: "Victim defensive wounds" },
  { title: "Lab Results", content: "Blood type matches suspect" },
  { title: "Flight Data", content: "Never left town as claimed" },
  { title: "Taxi Receipt", content: "Dropped off near scene" }
]

const summaryCards = [
  { title: "Key Timeline", content: "Incident 3:00-3:25pm, red sedan, multiple witnesses" },
  { title: "Evidence Summary", content: "DNA, prints, photos, digital trail confirmed suspect" }
]

// Generate random position for items (constrained to visible board area)
const getRandomPosition = () => {
  return {
    x: Math.random() * 280 + 10,  // Constrain to visible board width
    y: Math.random() * 140 - 10,  // Constrain to visible board height (avoid title and overflow)
    rotation: Math.random() * 20 - 10,
    width: Math.random() * 25 + 75
  }
}

const addEvidence = (evidence, delay = 0) => {
  setTimeout(() => {
    const newItem = {
      id: nextId.value++,
      type: 'evidence',
      title: evidence.title,
      content: evidence.content,
      removing: false,
      ...getRandomPosition()
    }
    visibleItems.value.push(newItem)
  }, delay)
}

const addSummary = (summary, delay = 0) => {
  setTimeout(() => {
    const newItem = {
      id: nextId.value++,
      type: 'summary',
      title: summary.title,
      content: summary.content,
      removing: false,
      zIndex: 2,
      ...getRandomPosition()
    }
    visibleItems.value.push(newItem)
  }, delay)
}

const removeOldItems = (count, delay = 0) => {
  setTimeout(() => {
    const itemsToRemove = visibleItems.value
      .filter(item => item.type === 'evidence')
      .slice(0, count)

    itemsToRemove.forEach(item => {
      item.removing = true
    })

    setTimeout(() => {
      visibleItems.value = visibleItems.value.filter(item => !item.removing)
    }, 600)
  }, delay)
}

const getButtonText = () => {
  switch (currentPhase.value) {
    case 'ready': return 'Start Building Case'
    case 'filling': return 'Fill Board Completely'
    case 'full': return 'Create Summaries'
    case 'summarizing': return 'Add New Evidence'
    case 'continuing': return 'Demo Complete'
    case 'complete': return 'Completed'
    default: return 'Next Phase'
  }
}

const nextPhase = () => {
  switch (currentPhase.value) {
    case 'ready':
      // Phase 1: Start filling the board with evidence (more items)
      currentPhase.value = 'filling'
      evidencePool.slice(0, 18).forEach((evidence, index) => {
        addEvidence(evidence, index * 200)
      })
      break

    case 'filling':
      // Phase 2: Add even more evidence to really fill the board
      evidencePool.slice(18, 32).forEach((evidence, index) => {
        addEvidence(evidence, index * 150)
      })

      setTimeout(() => {
        currentPhase.value = 'full'
        boardFull.value = true
      }, 2500)
      break

    case 'full':
      // Phase 3: Start summarizing
      currentPhase.value = 'summarizing'
      boardFull.value = false

      // Remove 80% of evidence cards to dramatically free up memory
      removeOldItems(26, 0)
      summaryCards.forEach((summary, index) => {
        addSummary(summary, index * 500 + 1000)
      })
      break

    case 'summarizing':
      // Phase 4: Continue adding new evidence
      currentPhase.value = 'continuing'

      // Add remaining evidence
      evidencePool.slice(32).forEach((evidence, index) => {
        addEvidence(evidence, index * 500)
      })
      break

    case 'continuing':
      // Demo complete
      currentPhase.value = 'complete'
      break
  }
}

const reset = () => {
  currentPhase.value = 'ready'
  visibleItems.value = []
  boardFull.value = false
  nextId.value = 1
  phaseStep = 0
}
</script>
