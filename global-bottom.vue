<template>
  <footer 
    v-if="!['cover', 'end'].includes($nav.currentLayout)"
    class="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 py-2 z-30"
  >
    <div class="text-xs text-gray-500 text-center">
      © 2025 Unlearn.AI, Inc. • All Rights Reserved
    </div>
  </footer>
</template>

<script setup>
// Access to global navigation context is automatically available as $nav
</script>

<style scoped>
footer {
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>