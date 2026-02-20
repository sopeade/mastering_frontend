<script setup>
const props = defineProps({
  vertical: {type: Boolean,
            default: false}
})
console.log("props.vertical", props.vertical)
</script>

<template>
  <div class="flex  gap-y-3 justify-between *:basis-1/2"
      :class="{'flex-col flex-nowrap':vertical, 'flex-wrap w-full':!vertical}">

    <div class="flex gap-4">
      <div class="border-2 h-10.75 rounded-lg border-potgreen"></div>
      <div>
        <p class="text-[12px]">
          <slot name="item1"></slot>
        </p>
        <p class="font-bold">
          <slot name="sum1"></slot>
        </p>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="border-2 h-10.75 rounded-lg border-potlightgreen"></div>
      <div>
        <p class="text-[12px]">
          <slot name="item2"></slot>
        </p>
        <p class="font-bold">
          <slot name="sum2"></slot>
        </p>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="border-2 h-10.75 rounded-lg border-potgrey"></div>
      <div>
        <p class="text-[12px]">
          <slot name="item3"></slot>
        </p>
        <p class="font-bold">
          <slot name="sum3"></slot>
        </p>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="border-2 h-10.75 rounded-lg border-potorange"></div>
      <div>
        <p class="text-[12px]">
          <slot name="item4"></slot>
        </p>
        <p class="font-bold">
          <slot name="sum4"></slot>
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>