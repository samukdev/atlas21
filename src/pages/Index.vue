<template lang="pug">
q-page(class="wrapper")
  section-home
  section-skills
  section-portfolio
  section-contato
</template>

<script>
import { defineComponent } from 'vue';
import {
  SectionHome, SectionPortfolio, SectionContato, SectionSkills,
} from 'components/Home';

export default defineComponent({
  name: 'PageIndex',
  components: {
    SectionHome,
    SectionPortfolio,
    SectionContato,
    SectionSkills,
  },
});
</script>

<style scoped lang="scss">
.wrapper:first-child,
.wrapper:last-child {
  min-height: inherit;
}
</style>
