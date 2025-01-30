<template>
  <div class="flex">
    <button
      class="bg-customRed shadow-lg opacity-100 transition duration-300 ease-linear hover:opacity-80 text-white  py-3 px-4 rounded-lg text-center text-lg sm:text-2xl break-words font-black max-w-[235px] w-full uppercase"
      v-if="type === 'primary'">
      <slot />
    </button>
    <NuxtLink :to="to"
      class="bg-customRed shadow-lg opacity-100 text-center break-words transition duration-300 ease-linear hover:opacity-80 text-white  py-3 px-4 rounded-lg text-lg sm:text-2xl font-black max-w-[235px] w-full uppercase"
      v-else-if="type === 'secondary'">
      <slot />
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  to: {
    type: String,
    default: '/',
  },
  disabled: {
    type: Boolean,
    default: false,
  }

});
</script>