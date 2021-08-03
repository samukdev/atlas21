<template lang="pug">
.wrapper.q-py-xl.ignore-height
  section(class="q-pa-lg" style="max-width: 1000px; margin: 0 auto;")
    div(class="heading text-center q-px-sm" style="margin-bottom: 4rem;")
      h1(class="text-h3 font-playfair q-mt-none q-mb-md text-weight-medium text-black-1")
        | Projetos
      p(class="text-h6 text-black-2 text-weight-regular font-lora")
        | Alguns dos meus projetos de estudo.
      div(class="flex flex-center")
        span(class="separator")
    div(
      v-for="project in projects"
      :key="project.id"
    )
      div.default-box.row.q-mb-lg
        .col-md-5.col-xs-12(
          :style="`background: url('/projects/${ project.image }'); background-size: cover; min-height: 400px;`"
        )
        .col-md.col-xs-12(style="min-height: 350px;")
          div.q-pa-lg.q-mx-lg
            h1.font-playfair.text-h3.text-black-1.q-mb-lg
              | {{ project.title }}
            p.text-black-2.text-h6.text-black-3.text-weight-regular.q-mb-lg
              | {{ project.description }}
            q-btn( rounded color="primary-gradient" style="letter-spacing: 2px; font-size: 0.75rem;" padding="md xl" unelevated label="View Project")
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        id: 1,
        title: 'A simple Weather app',
        description: 'A simples webapp that consumes a API for previewing the weather',
        image: 'weather-app.webp',
      },
    ],
  }),
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
