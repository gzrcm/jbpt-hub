<template>
  <div class="">
    <div class="bg-[#595959] py-[10%] sm:py-[5%] min-h-[70vh]">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
          <div class="">
            <h2 class="text-2xl font-black uppercase">Want freebies?</h2>
            <p class="text-lg mt-5">Nutrition advice, running guides and off the shelve programs?</p>
            <div class="mt-5 space-y-10">
              <a href="https://manage.kmail-lists.com/subscriptions/subscribe?a=VNdp7P&g=YmfA92" target="_blank" rel="noopener noreferrer">
  <p class="text-xl uppercase" v-for="n in 1" :key="n">Running Guide</p>
</a>
<br>
<a href="https://manage.kmail-lists.com/subscriptions/subscribe?a=VNdp7P&g=TSMfnU" target="_blank" rel="noopener noreferrer">
  <p class="text-xl uppercase" v-for="n in 1" :key="n">Hybrid Guide</p>
</a>
<br>
<a href="https://manage.kmail-lists.com/subscriptions/subscribe?a=VNdp7P&g=UQs5nz" target="_blank" rel="noopener noreferrer">
  <p class="text-xl uppercase" v-for="n in 1" :key="n">Nutrition Guide</p>
</a>
            </div>

          </div>
          <div class="">
            <h2 class="text-2xl font-black uppercase">Contact Box</h2>
            <div class="space-y-5 mt-5">
              <p class="text-xl font-black">Jacob Baisley</p>
              <p class="text-xl font-black"><a href="mailto:jb@jb-pt.co.uk">jb@jb-pt.co.uk</a></p>
            </div>
            <div class="mt-10">
              <h2 class="text-xl font-black uppercase">Social Media</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <NuxtLink to="https://www.instagram.com/j_baisley_" class="text-xl flex items-center gap-2">
                  <IconsInstagram class="w-6 h-6" />
                  Instagram
                </NuxtLink>
                <NuxtLink to="https://www.facebook.com/JSilvermane/" class="text-xl flex items-center gap-2">
                  <IconsFb class="w-6 h-6" />
                  Facebook
                </NuxtLink>
                <NuxtLink to="https://www.tiktok.com/discover/fantasyfitness" class="text-xl flex items-center gap-2">
                  <IconsTiktok class="w-6 h-6" />
                  Tiktok
                </NuxtLink>
                <NuxtLink to="https://discord.gg/GnRHe7Fy" class="text-xl flex items-center gap-2">
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