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
          @click="changeLang(lang)"
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
      value: 'pt-BR',
      iconImage: 'br',
    },
    lang: 'pt-br',
    langOptions: [
      {
        label: 'Português',
        value: 'pt-BR',
        iconImage: 'br',
      },
      {
        label: 'English',
        value: 'en',
        iconImage: 'us',
      },
    ],
  }),

  methods: {
    changeLang(lang) {
      this.selectedLanguage = lang;
      this.$i18n.locale = lang.value;
    },
  },

  created() {
    const locale = this.$q.lang.getLocale();
    this.$i18n.locale = locale;
    this.selectedLanguage = this.langOptions.find((lang) => lang.value === locale);
  },
};
</script>

<style>

</style>
