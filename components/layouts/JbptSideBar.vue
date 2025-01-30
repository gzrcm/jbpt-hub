<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10 " @close="closePanel">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full" enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
              leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-customRed py-6 shadow-xl">
                  <div class="px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-base font-semibold text-white">
                        <NuxtLink to="/jbpt">
                          <img src="/images/icon1.jpg" alt="" class="max-w-[50px] w-full object-contain h-full" />
                        </NuxtLink>
                      </DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button"
                          class="relative rounded-md bg-customRed text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          @click="closePanel">
                          <span class="absolute -inset-2.5" />
                          <span class="sr-only">Close panel</span>
                          <IconsClose class="size-6 text-white" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                    <nav class="flex flex-col">
                      <NuxtLink v-for="menu in menus" :key="menu.name" :to="menu.link"
                        class="transition p-5 duration-500 ease-in-out text-white hover:bg-customRed hover:text-black rounded h-full">
                        <p class="text-lg font-white">{{ menu.name }}</p>
                      </NuxtLink>
                    </nav>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

defineProps({
  open: Boolean
})

const emit = defineEmits(['handleOpen']);

const closePanel = () => {
  emit('handleOpen'); // This triggers the parent to toggle the state
};


const menus = jbptMenus;
</script>