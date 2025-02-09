<template>
  <div class="mainwrp">
    <div class="deskview" v-if="!mob">
      <no-ssr>
        <full-page ref="fullpage" :options="options" id="fullpage">
          <div class="section home">
            <ViewsJbptHome />
          </div>
          <div class="section aboutus">
            <ViewsJbptAbout />
          </div>
          <div class="section price">
            <ViewsJbptPrice />
          </div>
          <div class="section program">
            <ViewsJbptProgram />
          </div>
          <div class="section contact">
            <ViewsJbptContact />
          </div>
        </full-page>
      </no-ssr>
    </div>
  </div>
</template>

<script setup>
const options = {
  licenseKey: "YOUR_KEY_HEERE",
  navigation: true,
  menu: "#menu",
  anchors: ["home", "aboutus", "price", "program", "contact"],
  sectionsColor: ["#595959", "#780418", "#595959", "#ffffff", "#595959"],
  scrollOverflow: true,
};

const mob = ref(false);

const mobActive = () => {
  if (window.innerWidth > 991) {
    mob.value = false;
  } else {
    mob.value = true;
  }
};
</script>
