<template lang="pug">
section-template(
  :title="$t('aboutMe.sectionTitle')"
)
  p(
    class="text text-lora text-h6 text-weight-regular q-px-md text-black-2 text-center"
    style="max-width: 800px; margin: 0 auto;"
  )
    | {{ $t('aboutMe.text') }}
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
