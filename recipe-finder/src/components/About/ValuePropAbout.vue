<script setup>
import ValueProp from "@/components/Base/ValueProp.vue"
import choppingGreens from "@/assets/images/image-home-real-life-small.webp"
</script>

<template>
  <ValueProp>
  <template #header>
    Beyond the plate
  </template>
  <template #description>
    <div class="grid gap-3">
      <p>
        We believe food is a catalyst for community and well-being.
        By sharing approachable recipes, we hope to:
      </p>
      <ul>
        <li>
          Encourage family dinners and social cooking.
        </li>
        <li>
          Reduce reliance on single-use packaging and delivery waste.
        </li>
        <li>
          Spark curiosity about seasonal produce and local agriculture.
        </li>
      </ul>

    </div>
  </template>
  <template #image>
    <figure class="">
      <img class="rounded-2xl border-white border-6" :src="choppingGreens" alt="">
    </figure>
  </template>
  </ValueProp>
</template>
