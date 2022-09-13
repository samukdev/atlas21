<!-- eslint-disable max-len -->
<template lang="pug">
section-template(
  :title="$t('projects.sectionTitle')"
  :subtitle="$t('projects.sectionSubtitle')"
)
  div(
    v-for="(project, projectIndex) in orderedProjects"
    :key="project.id"
    style="max-width: 900px;"
    class="q-mx-auto"
  )
    div.default-box.row(
      :class="{ 'q-mb-xl': projectIndex <= (projects.length - 1), 'reverse': (projectIndex + 1) % 2 === 0}"
    )
      .col-sm.col-xs-12
        q-img(:src="`/projects/${ project.bgImage }`" :ratio="1" style="min-height: 100%")
          div(class="abolsute fit bg-transparent q-pa-lg flex flex-center")
            q-img(:src="`/projects/${ project.image }`")
      .col-sm.col-xs-12.flex.flex-center
        div(class="card-content")
          div(class="row")
            div(
              class="text-black-1 text-caption q-pa-none q-mb-sm q-py-xs q-px-md"
              style="border-radius: 100ex; border: 1px solid #303030"
              :class="{ 'q-mr-xs': tagIndex <= project.tags.length - 1}"
              v-for="(tag, tagIndex) in project.tags"
              :key="tag"
            )
              | {{ tag }}
          h1.font-playfair.text-h4.text-weight-medium.text-black-1.q-mt-none.q-mb-lg
            | {{ project.title }}
          p.text-black-2.text-black-4.text-weight-regular.q-mb-lg.description
            | {{ project.description }}
          q-btn(
            rounded
            style="letter-spacing: 2px; font-size: 0.75rem;"
            :style="project.btnStyle"
            class="q-mt-md text-grey-1"
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
        order: 3,
        title: 'A simple Weather app',
        description: 'A simple web app that consumes a API for previewing the weather.',
        image: 'weather-app.png',
        bgImage: 'bg-green.svg',
        btnStyle: 'background: linear-gradient(225deg, #0FCFA1 0%, #65B8E7 100%);',
        link: 'https://github.com/samukdev/weather-app',
        tags: ['Vue'],
      },
      {
        id: 2,
        order: 2,
        title: 'Pokedex',
        description: 'Find and know more details about a pokemon.',
        image: 'pokedex.png',
        bgImage: 'bg-red.svg',
        btnStyle: 'background: linear-gradient(225deg, #FE4545 0%, #D62C92 100%);',
        link: 'https://github.com/samukdev/PokemonList',
        tags: ['Javascript', 'Vue', 'Quasar'],
      },
      {
        id: 3,
        order: 4,
        title: 'Pomodoro Clock',
        description: 'Same time, more efficiency',
        image: 'pomodoro.png',
        bgImage: 'bg-purple.svg',
        btnStyle: 'background: linear-gradient(225deg, #7A5DEF 0%, #6567E7 100%);',
        link: 'https://github.com/samukdev/covid19-report',
        tags: ['Vue'],
      },
      {
        id: 4,
        order: 1,
        title: 'Login Page',
        description: 'A responsive login page made with Vue and Firebase.',
        image: 'nuxt-login.png',
        bgImage: 'bg-blue.svg',
        btnStyle: 'background: linear-gradient(225deg, #65B8E7 0%, #5182FF 86.98%);',
        link: 'https://github.com/samukdev/nuxt-app',
        tags: ['Vue', 'Nuxt', 'Firebase'],
      },
    ],
  }),

  methods: {
    openNewTab(url) {
      window.open(url, '_blank').focus();
    },
  },

  computed: {
    orderedProjects() {
      const projectsCopy = JSON.parse(JSON.stringify(this.projects));
      return projectsCopy.sort((a, b) => a.order - b.order);
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
