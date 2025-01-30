<template>
  <div class="bg-customRed py-2 px-[5%] flex justify-between gap-6 items-center fixed top-0 z-10 w-full">
    <NuxtLink to="/">
      <img src="/images/icon1.jpg" alt="" class="max-w-[50px] w-full object-contain h-full" />
    </NuxtLink>
    <ul id="#menu" class="lg:flex hidden justify-between h-full gap-6">
      <li v-for="menu in menus" :key="menu.name" :class="[
        'transition p-5 duration-500 ease-in-out text-white hover:bg-white hover:text-black rounded h-full',
        `#${$route.hash.slice(1)}` == menu.link ? 'bg-white !text-black' : ''
      ]" :data-menuanchor="menu.link">
        <a :href="`${menu.link}`" class="text-lg font-black">
          {{ menu.name }}
        </a>
      </li>
    </ul>
    <div class="lg:hidden block">
      <button @click="closePanel" class="text-white">
        <IconsMenu class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>

const route = useRoute();
const emit = defineEmits(['handleOpen']);

const closePanel = () => {
  emit('handleOpen');
};

const menus = jbptMenus;




</script>