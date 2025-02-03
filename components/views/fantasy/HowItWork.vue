<template>
  <div class="bg-black pb-20">
    <div class="container relative z-10">
      <h2 class="text-white text-4xl font-bold py-12 mt">
        How it works
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(card, index) in cardData" :key="card.title" class="bg-black p-6 hcard min-h-[300px] rounded-[16px]">
          <h2 class="text-5xl text-customRed text-center font-black">
            {{ index + 1 }}
          </h2>
          <h3 class="text-2xl font-bold mt-7">{{ card.title }}</h3>
          <!-- Apply the CSS class to handle line breaks -->
          <p class="text-xl font-medium mt-4 description">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cardData = [
  {
    title: 'A Complete Workout Programme?',
    description: '3 workouts per week with easy-to-follow, self-led guides and plenty of scalable exercise options for the gym or at home. \n \n Every programme is a self-contained adventure designed to help you smash a goal: staying consistent in workouts, doing a pull-up, running a 5k, and more. \n \n Adventuring ain’t easy ⚔️'
  },
  {
    title: 'With a Classic Fantasy Story',
    description: 'Where you take on the role of the hero, and your effort shapes the story. \n \n Each session is part of a larger fantasy narrative, complete with thematic movements.  \n \n With built-in progress tracking for reps and time as gold and experience points, your actions determine the outcome of your story.'
  },
  {
    title: 'Ending Epic Boss Battles',
    description: 'Each Fantasy & Fitness adventure ends with an epic boss battle determined by your progress—the ultimate test of all your hard work and dedication. \n \n Every boss has its own lore and gives you the chance to replay for tougher challenges or tackle it with a party. \n \n A living legend 🏅',
  },
  {
    title: 'Either Solo or with a Guild of Adventurers',
    description: 'Fitness is better with friends. \n \n Don’t have workout buddies? Join the Guild! Connect with like-minded adventurers on the Fantasy & Fitness Discord server. \n \n Ask for advice, share tips and tricks, dive into role-play, explore nutritional guidance, and access exclusive member-only offers and challenges. \n \n It’s dangerous to go alone🛡️'
  },
];
</script>

<style scoped>
.hcard {
  background: linear-gradient(to bottom, #fff9c4, #fff59d);
}

.description {
  white-space: pre-line; /* This ensures that newlines (\n) are respected and rendered as line breaks */
}
</style>
