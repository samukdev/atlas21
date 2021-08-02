<template lang="pug">
.wrapper.q-py-xl.ignore-height
  section(class="q-pa-xl" style="max-width: 1000px; margin: 0 auto;")
    div(class="heading text-center" style="margin-bottom: 4rem;")
      h1(class="text-h3 font-playfair q-mt-none q-mb-md text-weight-medium text-black-1")
        | Projetos
      p(class="text-h6 text-black-2 text-weight-regular font-lora")
        | Alguns dos meus projetos de estudo.
      div(class="flex flex-center")
        span(class="separator")
    div
      div.default-box.row.reverse
        .col
          div.q-pa-lg.q-mx-lg
            h1.font-playfair.text-h3.text-black-1.q-mb-lg
              | A Simple Weather App.
            p.text-black-2.text-h6.text-black-3.text-weight-regular.q-mb-lg
              | A simple web app made to sonume a weather API.
            q-btn( rounded color="primary-gradient" style="letter-spacing: 2px; font-size: 0.75rem;" padding="md xl" unelevated label="View Project")
        .col(style="background: url('https://github.com/samukdev.png'); background-size: cover; min-height: 400px;")
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
.separator {
  font-size: 14px;
  color: #a8a8b3;
  margin: 0px 0;
  display: flex;
  align-items: center;
  width: 50px;
  margin-top: .25rem;

  &::before {
    content: '';
    flex: 1;
    height: 2px;
    background: $primary-gradient;
  }

  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: $primary-gradient;
  }
}
</style>
