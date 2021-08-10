<template lang="pug">
div
  q-item(class="q-pr-md q-py-none" clickable)
    q-item-section
      q-img(
        :ratio="1"
        style="width: 2rem;"
        :src="`/flags/${selectedLanguage.iconImage}.png`"
      )
    q-menu
      q-list
        q-item(
          v-close-popup
          clickable
          v-for="(lang, index) in langOptions"
          :key="index"
          @click="selectedLanguage = lang"
        )
          q-item-section(side)
            q-img(
              :ratio="1"
              style="width: 2rem;"
              :src="`/flags/${lang.iconImage}.png`"
            )
          q-item-section
            | {{ lang.label }}
</template>

<script>
export default {
  name: 'LangSwitch',
  data: () => ({
    selectedLanguage: {
      label: 'Português',
      value: 'pt-br',
      iconImage: 'br',
    },
    lang: 'pt-br',
    langOptions: [
      {
        label: 'Português',
        value: 'pt-br',
        iconImage: 'br',
      },
      {
        label: 'English',
        value: 'en-us',
        iconImage: 'us',
      },
    ],
  }),
};
</script>

<style>

</style>
