<template>
  <div class="">
    <div class="bg-[#595959] py-[10%] sm:py-[5%] min-h-[70vh]">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
          <div class="">
            <h2 class="text-2xl font-black uppercase">Want freebies?</h2>
            <p class="text-lg mt-5">Nutrition advice, running guides and off the shelve programs?</p>
            <button class="text-lg mt-5">Click Here</button>
            <div class="mt-5 space-y-10">
              <p class="text-xl uppercase" v-for="n in 3" :key="n">Urls</p>
            </div>

          </div>
          <div class="">
            <h2 class="text-2xl font-black uppercase">Contact Box</h2>
            <div class="space-y-5 mt-5">
              <p class="text-xl font-black">Name</p>
              <p class="text-xl font-black">Email</p>
            </div>
            <div class="mt-10">
              <h2 class="text-xl font-black uppercase">Social Media</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <NuxtLink to="/" class="text-xl flex items-center gap-2">
                  <IconsInstagram class="w-6 h-6" />
                  Instagram
                </NuxtLink>
                <NuxtLink to="/" class="text-xl flex items-center gap-2">
                  <IconsFb class="w-6 h-6" />
                  Facebook
                </NuxtLink>
                <NuxtLink to="/" class="text-xl flex items-center gap-2">
                  <IconsTiktok class="w-6 h-6" />
                  Tiktok
                </NuxtLink>
                <NuxtLink to="/" class="text-xl flex items-center gap-2">
                  <IconsDiscord class="w-6 h-6" />
                  Discord
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>