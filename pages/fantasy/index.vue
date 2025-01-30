<template>
  <div class="">
    <no-ssr>
      <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="section">
          <ViewsFantasyHero />
        </div>
        <div class="section">
          <ViewsFantasyHowItWork />
        </div>
        <div class="section">
          <ViewsFantasyProductOne />
        </div>
        <div class="section">
          <ViewsFantasyProductTwo />
        </div>
        <div class="section">
          <ViewsFantasyCoin />
        </div>
      </full-page>
    </no-ssr>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'fantasy',
});

const options = {
  licenseKey: "YOUR_KEY_HEERE",
  navigation: true,
  menu: "#menu",
  anchors: ["hero", "work", "productOne", "productTwo", "coin"],
  sectionsColor: ["#595959", "#000000", "#000000", "#000000", "#595959"],
  scrollOverflow: true,
};

</script>

<style scoped>
.section {
  padding-top: 70px;
}

.fp-watermark {
  display: none;
}
</style>