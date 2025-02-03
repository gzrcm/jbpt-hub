<template>
  <div class="bg-[#595959] h-screen flex justify-center items-center">
    <div class="container w-full">
      <div class="grid grid-cols-1 gap-3 justify-items-center">
        <div class="w-full max-w-[500px]">
          <div class="rounded-2xl overflow-hidden bg-white max-h-[800px] flex flex-col">
            <!-- Image Container -->
            <div class="relative pb-[50%] shrink-0">
              <img src="/images/Picture2.png" alt=""
                class="absolute top-[-50px] left-0 w-full h-full object-cover object-[center_-100px]" />
            </div>
            <!-- Content -->
            <div class="p-4 text-center overflow-auto">
              <h1 class="text-2xl text-customRed uppercase font-bold leading-tight">Four Week Online Coaching</h1>
              <ul class="list-none text-left mt-3 space-y-2">
                <li class="text-lg font-bold">✅ Personalized exercise programming</li>
                <li class="text-lg font-bold">✅ Nutritional review & meal plan</li>
                <li class="text-lg font-bold">✅ Accountability tracking</li>
                <li class="text-lg font-bold">✅ Weekly check-ins</li>
                <li class="text-lg font-bold">✅ 1 hour of virtual sessions/video support</li>
                <li class="text-lg font-bold">✅ Unlimited access to me</li>
              </ul>
              <p class="text-5xl font-bold mt-3">£150</p>
              <p class="text-lg mt-2 font-bold">No contract</p>
              <!-- Buy Button -->
              <a href="https://monzo.com/pay/r/jbpt_DVIRhUu1v6jKd6" target="_blank" rel="noopener noreferrer">
                <button class="mt-4 bg-customRed text-white py-2 px-4 rounded-lg font-bold uppercase hover:bg-red-700 transition">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
