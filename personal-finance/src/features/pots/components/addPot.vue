<script setup>
import {ref, onMounted, onUnmounted, onUpdated} from "vue";
import Dropdown from "@/components/dropdown.vue";
import { usePotsStore } from "@/features/pots/store/usePotsStore.ts";
import { storeToRefs } from "pinia";
import useVuelidate from "@vuelidate/core";
import formError from "@/components/formError.vue";
import {rules} from "@/utils/validationSchemas.ts";
import {postData} from "@/utils/helpers.ts";

const store = usePotsStore();
const { pots } = storeToRefs(store);
const emit = defineEmits(['closeModal'])
const isMdUp = ref(false);
const widthSmall = '295px'
const widthMid = '496px'
const arr = ['a', 'b', 'c']
let mediaQuery
const showModal = ref(true);
const closeModal = () => {
  emit('closeModal')
}

onMounted(() => {
  mediaQuery = window.matchMedia("(min-width: 768px)")
  isMdUp.value = mediaQuery.matches
  console.log("isMdUp")
  mediaQuery.addEventListener("change", e => {
    isMdUp.value = e.matches;
  })
})

// validation---
const newPot = ref({
  id: 15,
  name: "",
  target: null,
  color: "",
  saved: 0,
})
// const newPotRules = {
//   name: rules.text,
//   target: rules.numbers,
//   theme: rules.text
// }
// const v$ = useVuelidate(newPotRules, newPot.value);
// const onAddingPotSubmit = async()=>{
//   const isFormCorrect = await v$.value.$validate();
//   if (!isFormCorrect) {
//     console.log("Form Is Incorrect")
//   }
// }
// -----

// const addingPot = () => {
//   console.log("showAddPot")
//   pots.value.push(newPot.value)
//   console.log("pots.value", pots.value)
// }

const potUrl = import.meta.env.VITE_API_POTS_URL
const addingPot = async() => {
  try{
    await postData(potUrl,  newPot.value);
    pots.value.push(newPot.value);
    closeModal();
  }
  catch(err){}
}
onUnmounted(() => {
  console.log("modal UNMOUNTED!")
  mediaQuery.removeEventListener("change", () => {})
})
onUpdated(() => {
  console.log("updated showmodal", showModal.value)
  console.log("newPot.theme", newPot.value)
})
</script>

<template>
<div class="overlay flex justify-center items-center" @click.self="closeModal">
    <div :class="`bg-white w-83.75 md:w-140 h-128 rounded-lg py-6 px-5 md:p-8 grid gap-5`">
      <div class="flex justify-between h-9.5">
        <p class="text-[20px] md:text-[32px] font-bold">Add New Pot</p>
        <button @click="closeModal">
          <img src="@/assets/images/icon-close-modal.svg" alt="close">
        </button>
      </div>
      <p class="">Create a pot to set savings targets.
        These can help keep you on track as you save for special purchases.</p>
      <form class="flex flex-col justify-between h-58.25 mb-2" @submit.prevent="onAddingPotSubmit">
        <div class="grid h-22.25">
          <span>Pot Name</span>
          <input class="pot_name_local border h-11.25 pl-3 border-gray-400 rounded-lg" v-model="newPot.name" type="text">
<!--          <form-error :error="v$.name.$error" :errorMsg="v$.name.$errors[0]?.$message"/>-->
          <small></small>
        </div>
        <div class="grid h-16.75 relative mb-4">
          <span>Target</span>
          <div class="target_local">
            <input class=" border w-full border-gray-400 pl-6 rounded-lg h-11.25" v-model="newPot.target" type="number">
          </div>
        </div>
        <div class="h-16.75">
          <span>Theme</span>
<!--          val => newPot.theme=val-->
          <dropdown :items="arr" :select-width="isMdUp ? widthMid : widthSmall" @updatedOption="val => newPot.color=val"
                    select-focus-border="1px solid #696868" select-border="1px solid #99a1af" options-gap="3rem" id="theme"/>
        </div>
      </form>
      <button @click="addingPot" class="bg-black text-white rounded-lg h-13.25">Add Pot</button>
    </div>
</div>
</template>

<style scoped>
.overlay{
  background: rgba(0, 0, 0, 0.5);
  inset: 0;
  position: fixed;
  z-index: 10;
}


.target_local::before{
  content:"$";
  position: absolute;
  left: 10px;
  top: 35px;
  font-size: 16px;
  color: gray;
}
</style>
<!--  background-image: url('src/assets/images/icon-search.svg');-->
<!--  //background-repeat: no-repeat;-->
<!--  //background-position: left 20px center;-->
<!--  //padding: 10px 20px;-->
