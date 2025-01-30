<template>
  <div class="">
    <div class="bg-[#595959]">
      <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
          <div v-for="price in priceList" :key="price.time" class="">
            <div class="rounded-2xl overflow-hidden bg-white">
              <div class="relative pb-[70%] block">
                <img src="/images/Picture2.png" alt=""
                  class="absolute top-0 left-0 w-full h-full object-cover object-top" />
              </div>
              <div class="p-6 text-center">
                <h2 class="text-2xl text-customRed uppercase font-bold">{{ price.time }}</h2>
                <h3 class="text-2xl font-bold text-customRed uppercase">{{ price.name }}</h3>
                <ul class="list-disc list-inside mt-5">
                  <li class="text-xl font-bold" v-for="feature in price.features" :key="feature">
                    {{ feature }}
                  </li>
                </ul>
                <p class="text-xl font-bold mt-5">{{ price.price }}</p>
                <p v-if="price.extraFeatures" class="text-xl mt-5 font-bold">
                  {{ price.extraFeatures }}
                </p>
                <!-- Buy Button -->
                <button
                  class="mt-5 bg-customRed text-white py-2 px-5 rounded-lg font-bold uppercase hover:bg-red-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const priceList = [
  {
    time: "Four Week",
    name: "Online Coaching",
    features: ["List of items", "List of items", "List of items", "List of items"],
    price: "£120",
  },
  {
    time: "Twelve Week",
    name: "Unbreakable Online Coaching",
    features: ["List of items", "List of items", "List of items", "List of items"],
    extraFeatures: "15% discount from one month",
    price: "£120",
  },
  {
    time: "Twenty Four Week",
    name: "Invicta Performance Coaching",
    features: ["List of items", "List of items", "List of items", "List of items"],
    price: "£720",
  },
];
</script>

<style scoped></style>
