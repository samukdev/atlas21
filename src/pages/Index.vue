<template lang="pug">
q-page(class="wrapper")
  section-home(id="#home")
  section-about-me(id="#aboutme")
  section-skills(id="#skills")
  section-portfolio(id="#projetos")
  section-contato(id="#contato")
</template>

<script>
import { defineComponent } from 'vue';
import {
  SectionHome, SectionPortfolio, SectionContato, SectionSkills, SectionAboutMe,
} from 'components/Home';

export default defineComponent({
  name: 'PageIndex',
  components: {
    SectionHome,
    SectionPortfolio,
    SectionContato,
    SectionSkills,
    SectionAboutMe,
  },
});
</script>

<style scoped lang="scss">
.wrapper:first-child {
  min-height: inherit;
}
</style>
