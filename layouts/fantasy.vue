<script setup>
useSeoMeta({
  title: 'Fantasy',
  ogTitle: 'Fantasy',
  description: 'Fantasy',
  ogDescription: 'Fantasy',
})

const open = ref(false)

const handleOpen = () => {
  console.log('open');
  open.value = !open.value
}

</script>

<template>
  <div class="">
    <LayoutsFantasySidebar :open="open" @handleOpen="handleOpen" />
    <LayoutsFantasyHeader @handleOpen="handleOpen" />
    <slot />
  </div>
</template>