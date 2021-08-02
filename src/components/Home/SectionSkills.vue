<template lang="pug">
.wrapper.q-pb-xl.ignore-height
  section(class="container q-pa-xl")
    div(class="heading text-center" style="margin-bottom: 4rem;")
      h1(class="text-h3 font-playfair q-mt-none q-mb-md text-weight-medium text-black-1")
        | Skills
      p(class="text-h6 text-black-2 text-weight-regular font-lora")
        | Um pouco sobre minhas habilidades e conhecimentos.
      div(class="flex flex-center")
        span(class="separator")
    div(class="row  q-col-gutter-xl")
      div.col-md.col-xs-12
        div.default-box.q-pa-xl.fit
          h6(
            class="text-black-2 font-lora q-mt-none q-mb-xl"
          )
            | Formação
          q-list(class="row q-col-gutter-xs")
            q-item(
              v-for="certification in certifications"
              :key="certification.id"
              class=`col-auto q-mr-sm q-mb-sm q-pa-md rounded-borders bg-grey-2 flex flex-center
              text-black-2`
              class="column full-width"
            )
              q-item-section(class="text-bold text-black-1 font-lora")
                | {{ certification.name }}
              q-item-section(class="text-black-2 text-caption")
                | {{ `${certification.institute} ( ${certification.start} - ${certification.end || 'Atualmente'})` }}

      div.col-md.col-xs-12
        div.default-box.q-pa-xl.fit
          h6(
            class="text-black-2 font-lora q-mt-none q-mb-xl"
          )
            | Linguagens e tecnologias
          q-list(class="row q-col-gutter-xs")
            q-item(
              v-for="(skill, index) in skills"
              :key="skill.id"
              class=`col-auto q-mr-sm q-mb-sm q-pa-md rounded-borders bg-grey-2 flex flex-center
              text-black-2`
              :style="{ order: skill.order }"
            )
              q-item-section
               | {{ skill.name }}
</template>

<script>
export default {
  data: () => ({
    skills: [
      {
        name: 'HTML',
        id: '1',
        order: 1,
      },
      {
        name: 'CSS',
        id: '2',
        order: 1,
      },
      {
        name: 'Javascript',
        id: '3',
        order: 1,
      },
      {
        name: 'Vue JS',
        id: '4',
        order: 1,
      },
      {
        name: 'Quasar Framework',
        id: '5',
        order: 1,
      },
      {
        name: 'Git',
        id: '1',
        order: 1,
      },
      {
        name: 'Typescript',
        id: '1',
        order: 1,
      },
      {
        name: 'SCSS / SASS',
        id: '1',
        order: 1,
      },
      {
        name: 'Bootstrap',
        id: '1',
        order: 1,
      },
      {
        name: 'Figma',
        id: '1',
        order: 1,
      },
      {
        name: 'React',
        id: '1',
        order: 1,
      },
      {
        name: 'Node JS',
        id: '1',
        order: 1,
      },
      {
        name: 'SQL',
        id: '1',
        order: 1,
      },
    ],
    certifications: [
      {
        id: 1,
        name: 'Análise e Desenvolvimento de Sistemas',
        institute: 'Universidade Cruzeiro do Sul',
        start: '2020',
        end: false,
      },
      {
        id: 1,
        name: 'Técnica em Informática',
        institute: 'ETEC - Centro Paula Souza',
        start: '2017',
        end: '2018',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
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
