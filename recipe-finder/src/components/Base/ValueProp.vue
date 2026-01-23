<script>
</script>

<template>
  <div class="flex flex-col gap-7 -20 2lg:flex-row">
    <div class="2lg:self-center">
      <h1 class="text-[40px] font-extrabold ">
        <slot name="header"></slot>
      </h1>
      <slot name="description"></slot>

    </div>
    <slot name="image"></slot>
  </div>
  <hr class="w-screen relative  my-24 -mx-[50vw] border border-lightgreen">
</template>
