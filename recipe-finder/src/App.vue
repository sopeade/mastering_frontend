<script setup lang="ts">
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"

</script>

<template>
    <Navbar/>
    <div class="grid grid-cols-[1fr_calc(100%_-_32px)_1fr] lg:grid-cols-[1fr_calc(100%_-_128px)_1fr] 2lg:grid-cols-[1fr_min(calc(100%_-_248px),1440px)_1fr]
      [&>*]:col-start-2 grid-rows-[auto_1fr_auto] min-h-screen">
      <router-view />
    <Footer/>
    </div>
</template>


