<template lang="pug">
section-template(
  title="Projetos"
  subtitle="Alguns dos projetos do meu GitHub."
)
  div(
    v-for="(project, projectIndex) in projects"
    :key="project.id"
    style="max-width: 1000px;"
    class="q-mx-auto"
  )
    div.default-box.row(
      :class="{ 'q-mb-xl': projectIndex <= (projects.length - 1), 'reverse': (projectIndex + 1) % 2 === 0}"
    )
      .col-sm.col-xs-12
        q-img(:src="`/projects/${ project.image }`" :ratio="1" style="min-height: 100%")
      .col-sm.col-xs-12.flex.flex-center(style="min-height: 350px;")
        div.q-mx-lg(style="padding: 4rem;")
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
          h1.font-playfair.text-h3.text-black-1.q-mt-none.q-mb-lg
            | {{ project.title }}
          p.text-black-2.text-h6.text-black-3.text-weight-regular.q-mb-lg
            | {{ project.description }}
          q-btn(
            rounded
            color="primary-gradient"
            style="letter-spacing: 2px; font-size: 0.75rem;"
            padding="1rem 3rem"
            @click="openNewTab(socialLink.link)"
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
        description: 'A simple web app that consumes a API for previewing the weather',
        image: 'weather-app.webp',
        tags: ['Vue', 'Javascript', 'Bulma'],
      },
      {
        id: 2,
        title: 'Covid19 Report',
        description: 'How is the corona going on your country ? Check it here!',
        image: 'covid19-report.webp',
        tags: ['Vue', 'Javascript', 'Bulma'],
      },
      {
        id: 3,
        title: 'Border Radius Preview',
        description: 'Wanna simulate some border-radius easy ? Try this app.',
        image: 'border-radius-previewer.webp',
        tags: ['Vue', 'Javascript', 'Bulma'],
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
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
