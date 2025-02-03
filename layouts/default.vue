<template>
  <div>
    <LayoutsJbptSideBar :open="open" @handleOpen="handleOpen" />
    <LayoutsJbptHeader @handleOpen="handleOpen" />
    <slot />
    <div class="fixed bottom-[5%]  left-1/2 -translate-x-1/2" v-if="isShowBookButton">
      <SharedButton type="secondary" to="https://api.whatsapp.com/send/?phone=%2B447422516848&text&type=phone_number&app_absent=0&wame_ctl=1">Book Your Free chat now</SharedButton>
    </div>
    <!-- Chat Button -->
    <ul id="#menu" v-if="!isShowChatButton">
      <li data-menuanchor="contact">
        <a href="#contact"
          class="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          aria-label="Chat with us">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-message-square">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </a>
      </li>
    </ul>

  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Jbpt',
  ogTitle: 'Jbpt',
  description: 'Jbpt',
  ogDescription: 'Jbpt'
})

const open = ref(false)
const route = useRoute();

const handleOpen = () => {
  console.log('open');
  open.value = !open.value
}

const isShowChatButton = ref(false)
const isShowBookButton = ref(true)
watch(() => route.hash, () => {
  if (route.hash === '#contact') {
    isShowChatButton.value = true
  } else {
    isShowChatButton.value = false
  }
  if (route.hash === '#price') {
    isShowBookButton.value = false
  } else {
    isShowBookButton.value = true
  }
}, {
  deep: true
});

onMounted(() => {
  if (route.hash === '#contact') {
    isShowChatButton.value = true
  }
  if (route.hash === '#price') {
    isShowBookButton.value = false
  }
})
</script>
