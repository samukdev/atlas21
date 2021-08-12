<template lang="pug">
.wrapper.flex.flex-center.q-px-md(
  style="padding-top: 10%; padding-bottom: 15rem; margin-top: -10%;"
)
  section.default-box.q-pa-xl
    h1(class="font-playfair")
      | {{ $t('contactMe.title') }}
    p
      | {{ $t('contactMe.text') }}
    CTA(class="cta")
  footer(class="full-width text-center text-caption absolute-bottom q-pa-md text-grey-1")
    | Designed and developed by
    strong(class="text-weight-medium")
      | &nbsp Samuel Barbosa
    | .
</template>

<script>
import CTA from 'components/CTA.vue';

export default {
  components: {
    CTA,
  },
  data: () => ({
    heading: 'Obrigado pela visita!',
  }),
};
</script>

<style scoped lang="scss">
// TODO: Utilizar diferentes imagens para diferentes tamanhos de tela.
.wrapper {
  background: url('/wave.svg');
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position-y: 101%;
}

section {
  text-align: center;
}
h1 {
  font-weight: 500;
  font-size: 3rem;
  padding-bottom: 0px;
  line-height: 95%;
  margin: 1.5rem;
  color: $text-black-1;
}

p {
  font-size: 1.25rem;
  line-height: 150%;
  font-weight: 400;
  display: flex;
  align-items: center;
  max-width: 600px;
  color: $text-black-3;
}

.cta {
  margin: 2.5rem auto 0 auto;
}
</style>
