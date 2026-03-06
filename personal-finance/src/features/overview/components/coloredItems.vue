<script setup>
const props = defineProps({
  vertical: {
    type: Boolean,
    default: false
  },
  items: {
    type: Array,
    required: false
  }
})
</script>

<template>
  <div class="flex  gap-y-3 justify-between *:basis-1/2"
      :class="{'flex-col flex-nowrap':vertical, 'flex-wrap w-full':!vertical}">

    <div v-for="(item, _) in items.slice(0, 4)" :key="item.id" class="flex gap-4">
      <div :class="`border-2 h-10.75 rounded-lg ${item.color}`"></div>
      <div>
        <p class="text-[12px]">
          {{item.name||item.category}}
        </p>
        <p class="font-bold">
          {{item.saved||item.max}}
        </p>
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>

</style>