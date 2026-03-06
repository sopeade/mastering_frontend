<script setup>
  import { onMounted, ref, computed } from "vue";
  import router from "@/router/index.ts";
  import useVuelidate from "@vuelidate/core";
  import formError from "@/components/formError.vue";
  import { rules } from "@/utils/validationSchemas.ts";
  import {sameAs, required} from "@vuelidate/validators";

  const isLogin = ref(true);
  //Form validation start -----
  const login = ref({
    email: "",
    password: "",
  })
  const loginRules = {
    email: rules.email,
    password: rules.password,
  }


  const v$ = useVuelidate(loginRules, login.value);
  const onLoginSubmit = async()=>{
    console.log("Login")
    const isFormCorrect = await v$.value.$validate();
    if (!isFormCorrect) {
      console.log("Form Is Incorrect")
    }
    else{
      router.push({name: "Dashboard"})
    }
  }

  const signup = ref({
    name: "",
    email: "",
    password: "",
  })
  const signupRules = ref({
    name: rules.text,
    email: rules.email,
    password: rules.password,
  })

  const v2$ = useVuelidate(signupRules, signup.value);
  const onSignupSubmit = async()=>{
    console.log("Signup")
    const isFormCorrect = await v2$.value.$validate();
    if (!isFormCorrect) {
      console.log("Form Is Incorrect")
    }
  }
  //Form validation end -----
</script>

<template>
  <div class="flex flex-col 2lg:flex-row 2lg:gap-4">
    <header class="flex font-bold justify-center items-center bg-black
      h-16 rounded-b-lg text-4xl text-white 2lg:hidden">finance</header>
    <aside class="hidden 2lg:grid grid-rows-11 h-screen max-w-240 overflow-hidden p-5">
      <img class="col-start-1 row-start-1 row-span-full w-full h-full object-cover rounded-lg" src="@/assets/images/illustration-authentication.svg" alt="">
      <img class="col-start-1 row-start-2 ml-25 w-[121.45px] place-items-start text-white" src="@/assets/images/logo-large.svg" alt="">
      <div class="grid gap-6 max-w-125 col-start-1 row-start-10 self-end ml-25 text-white">
        <h1 class="font-bold text-[32px]">Keep track of your money and save for your future</h1>
        <p class="text-[14px]">Personal finance app puts you in control of your spending.
          Track transactions, set budgets, and add to savings pots easily.</p>
      </div>
    </aside>
    <div class="mt-42 self-center mx-auto bg-white p-5 md:p-8 md:w-140 rounded-lg w-85.75
      min-h-101.5 2lg:-mt-50">

      <!--Login Section -->
      <form class="grid gap-8" @submit.prevent="onLoginSubmit" v-if="isLogin">
        <h1 class="font-bold text-3xl">Login</h1>
        <div class="grid *:rounded-lg gap-px">
          <label class="text-gray-600" for="email">Email</label>
          <input class="border-gray-300 h-11.5 mb-2" id="email" placeholder=" Enter Email" v-model="login.email"/>
          <form-error :error="v$.email.$error" :errorMsg="v$.email.$errors[0]?.$message"/>
          <label class="text-gray-600" for="password">Password</label>
          <input class="border-gray-300 h-11.5" type="text" id="password" placeholder=" Enter Password" v-model="login.password"/>
          <form-error :error="v$.password.$error" :errorMsg="v$.password.$errors[0]?.$message"/>
        </div>
        <button class="bg-black text-white rounded-lg h-13">Login</button>
        <div>
          <div>
            <p class="text-gray-500 text-center">Need to create an account? <span class="text-black underline font-bold cursor-pointer" @click="isLogin=!isLogin">Sign Up</span></p>
          </div>
        </div>
      </form>

      <!--Signup Section -->
      <form class="grid gap-8" @submit.prevent="onSignupSubmit" v-else>
        <h1 class="font-bold text-3xl">Login</h1>
        <div class="grid *:rounded-lg gap-px">
          <label class="text-gray-600" for="email">Name</label>
          <input class="border-gray-300 h-11.5 mb-2" id="name" placeholder=" Enter Name" v-model="signup.name"/>
          <form-error :error="v2$.name.$error" :errorMsg="v2$.name.$errors[0]?.$message"/>
          <label class="text-gray-600" for="email">Email</label>
          <input class="border-gray-300 h-11.5 mb-2" id="email" placeholder=" Enter Email" v-model="signup.email"/>
          <form-error :error="v2$.email.$error" :errorMsg="v2$.email.$errors[0]?.$message"/>
          <label class="text-gray-600" for="password">Password</label>
          <input class="border-gray-300 h-11.5" type="text" id="password" placeholder=" Enter Password" v-model="signup.password"/>
          <form-error :error="v2$.password.$error" :errorMsg="v2$.password.$errors[0]?.$message"/>
        </div>
        <button class="bg-black text-white rounded-lg h-13">Create Account</button>
        <div>
          <div>
            <p class="text-gray-500 text-center">Already have an account? <span class="text-black underline font-bold cursor-pointer" @click="isLogin=!isLogin">Login</span></p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<style scoped>
.bg_raw{
  background-color: green;
}
</style>