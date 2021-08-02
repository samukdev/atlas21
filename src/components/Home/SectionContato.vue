<template lang="pug">
.wrapper.flex.flex-center
  section.default-box.q-pa-xl
    h1(class="font-playfair")
      | Obrigado pela visita!
    p(v-html="paragraph")
    CTA(class="cta")
</template>

<script>
import CTA from 'components/CTA.vue';

export default {
  components: {
    CTA,
  },
  data: () => ({
    heading: 'Obrigado pela visita!',
    paragraph: 'Espero que tenha gostado de passar por aqui! Sinta-se a vontade para entrar em contato quando quiser.<br>Até mais!',
  }),
};
</script>

<style scoped lang="scss">
.wrapper {
  background: url('/wave.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 100%;
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
