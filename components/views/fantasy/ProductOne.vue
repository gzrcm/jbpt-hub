<template>
  <div class="relative bg-pr h-[calc(100vh-70px)] w-full overflow-hidden">
    <div class="grid grid-cols-1 sm:grid-cols-2 absolute top-0 left-0 w-full h-full">
      <div class="">
        &nbsp;
      </div>
      <div class="">
        <img src="/images/monster.png" alt="" class="w-full h-full object-cover" />
      </div>
    </div>
    <img src="/images/bg1.png" alt="" class="w-full h-full object-[55%] object-cover absolute top-0 left-0 " />
    <!-- <img src="/images/monster.png" alt="" class=""> -->
    <div class="relative h-full container max-w-[1440px] flex items-center">
      <div class="max-w-[400px] w-full text-white inline-flex flex-col gap-6">
        <h2 class="text-3xl font-black">Product One</h2>
        <p class="text-2xl font-light">Product Description</p>
        <div>
          <button class="btn">Buy on Pateron</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* .bg-pr {
    
    background-image: url('/images/bg1.png');
    transform: rotate(90deg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  } */
</style>