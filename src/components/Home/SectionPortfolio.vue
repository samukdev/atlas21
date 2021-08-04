<template lang="pug">
section-template(
  title="Projetos"
  subtitle="Alguns dos projetos do meu GitHub."
)
  div(
    v-for="(project, projectIndex) in projects"
    :key="project.id"
    style="max-width: 900px;"
    class="q-mx-auto"
  )
    div.default-box.row(
      :class="{ 'q-mb-xl': projectIndex <= (projects.length - 1), 'reverse': (projectIndex + 1) % 2 === 0}"
    )
      .col-sm.col-xs-12
        q-img(:src="`/projects/${ project.image }`" :ratio="1" style="min-height: 100%")
      .col-sm.col-xs-12.flex.flex-center
        div(class="card-content")
          //- div(class="row")
          //-   div(
          //-     class="text-black-1 text-caption q-pa-none q-mb-lg"
          //-     style="border-radius: 100ex; border: 1px solid #303030"
          //-     class="q-py-xs q-px-md"
          //-     :class="{ 'q-mr-xs': tagIndex <= project.tags.length - 1}"
          //-     v-for="(tag, tagIndex) in project.tags"
          //-     :key="tag"
          //-   )
          //-     | {{ tag }}
          h1.font-playfair.text-h4.text-weight-medium.text-black-1.q-mt-none.q-mb-lg
            | {{ project.title }}
          p.text-black-2.text-black-4.text-weight-regular.q-mb-lg.description
            | {{ project.description }}
          q-btn(
            rounded
            color="primary-gradient"
            style="letter-spacing: 2px; font-size: 0.75rem;"
            class="q-mt-md"
            padding="0.85rem 3rem"
            @click="openNewTab(project.link)"
            unelevated
            label="View Project"
            class="btn-box-shadow"
          )
</template>

<script>
import SectionTemplate from 'components/SectionTemplate.vue';

export default {
  name: 'SectionPortfolio',

  components: {
    SectionTemplate,
  },

  data: () => ({
    projects: [
      {
        id: 1,
        title: 'A simple Weather app',
        description: 'A simple web app that consumes a API for previewing the weather.',
        image: 'weather-app.webp',
        link: 'https://github.com/samukdev/weather-app',
        tags: ['Vue', 'Javascript', 'Bulma'],
      },
      {
        id: 2,
        title: 'Covid19 Report',
        description: 'How is the corona going on your country ? Check it here!',
        image: 'covid19-report.webp',
        link: 'https://github.com/samukdev/covid19-report',
        tags: ['Vue', 'Javascript', 'Bulma'],
      },
      {
        id: 3,
        title: 'Border Radius Preview',
        description: 'Wanna simulate some border-radius easy ? Try this app.',
        image: 'border-radius-previewer.webp',
        link: 'https://github.com/samukdev/borderradius-generator',
        tags: ['Vue', 'Javascript', 'Bulma'],
      },
    ],
  }),

  methods: {
    openNewTab(url) {
      window.open(url, '_blank').focus();
    },
  },
};
</script>

<style scoped lang="scss">
.description {
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.78;
  letter-spacing: .44px;
}
.card-content {
  padding: 4rem;
}

@media (max-width: 1024px) {
  .card-content {
    padding: 3rem 2rem;
  }
}
// TODO: Utilizar diferentes imagens para diferentes tamanhos de tela.
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
