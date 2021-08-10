<template lang="pug">
section-template(
  title="Sobre mim"
)
  p(class="text text-lora text-h6 text-weight-regular q-px-md text-black-2 text-center" style="max-width: 800px; margin: 0 auto;")
    | Eu sou desenvolvedor. Minha maior paixão é o desenvolvimento de interfaces, mas não me limito apenas a isso. Sou um entusiasta quando o assunto é UX.
    | Você pode conferir um pouco mais sobre meus projetos, habidalides e formação nas seções abaixo :)
</template>

<script>
import SectionTemplate from 'components/SectionTemplate';

export default {
  name: 'SectionAboutMe',
  components: {
    SectionTemplate,
  },
};
</script>

<style>

</style>
