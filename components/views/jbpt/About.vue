<template>
  <div class="">
    <div class="bg-customRed py-[10%]">
      <div class="container ">
        <p class="text-white text-3xl font-black uppercase ">What my clients say</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 text-white ">
          <div class="flex gap-3 text-center flex-col" v-for="(review, n) in reviews" :key="n">
            <p class="text-lg">
              {{ review.review }}
            </p>
            <p class=" font-black text-xl italic">
              -{{ review.name }}
            </p>
            <div class="flex gap-2 justify-center">
              <IconsStart v-for="n in 5" :key="n" class="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const reviews = [
  {
    name: "Lauren, Assistant Head Teacher",
    review: "Jake is amazing! From the first time I spoke with him I could tell his individualised, empathetic and positive approach would work wonders. He is amazing at providing bespoke advice and never makes me feel as if I’m taking up too much of his time. He is friendly, supportive and has honestly turned around my mindset. I was feeling low, sluggish and unhappy with my body and fitness but no more. I’ve seen fantastic results (weight loss, increased energy levels, boosted confidence) so I could not be happier. Thank you Jake 😊."
  },
  {
    name: "Greg, Facilities Manger",
    review: "Well what can I say but Wow!!! First time I have ever had a PT ask me about my lifestyle, work schedule and family schedule. My workouts and coaching is all about being a hybrid athlete and how best to fit my fitness plan around my busy life / work schedule. Jacob is awesome in supporting me to obtain my best as he has been there and not just talking the talk. I would highly recommend Jacob as he is not just looking at a program but helping improve the person overall."
  },
  {
    name: "Ellie, Health Care Specialist",
    review: "Jacob is an amazing trainer. He makes me feel very comfortable in our sessions and really pushes me to work to the best of my ability! He puts so much effort into the workouts and nutrition and is always there for any questions I have! I’ve been with him for an about a month and have lost body fat and gotten stronger which is exactly what I wanted! He really cares and wants his clients to achieve their goals. Would highly recommend him :)"
  },
];


</script>