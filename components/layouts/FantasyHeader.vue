<template>
  <div class="bg-customBlue py-2 px-[5%] flex justify-between gap-6 items-center fixed top-0 z-10 w-full">
    <div class="max-w-[100px] w-full">
      <NuxtLink to="/" class="absolute top-0 z-10">
        <img src="/images/icon2.png" alt="" class="max-w-[100px] w-full object-contain h-full" />
      </NuxtLink>
    </div>
    <ul id="#menu" class="lg:flex hidden justify-between h-full gap-6">
      <li v-for="menu in menus" :key="menu.name" :class="[
        'transition px-5 py-3 duration-500 ease-in-out text-white hover:bg-white hover:text-black rounded h-full',
        `#${$route.hash.slice(1)}` == menu.link ? 'bg-white !text-black' : ''
      ]" :data-menuanchor="menu.link">
        <a :href="menu.link" class="text-lg font-black">{{ menu.name }}</a>
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
  emit('handleOpen'); // This triggers the parent to toggle the state
};

const menus = jbptFantasyMenus;

// Function to check if a route is active
const isActive = (path) => {
  console.log(route.path, path);
  return route.path === path; // Compare the current route path with the menu link
};
</script>
