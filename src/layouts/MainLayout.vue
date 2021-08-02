<template lang="pug">
q-layout(view="hHr lpR fFf")
  transition(
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  )
    q-header(class="bg-transparent text-black q-pa-md" v-if="false")
      q-toolbar(class="q-px-md gt-xs")
        q-toolbar-title
          q-avatar

        div(class="row items-center")
          q-list(class="row items-center")
            q-item(
              clickable
              class="rounded-borders"
              class="flex flex-center"
              v-for="socialLink in socialLinks"
              :key="socialLink.label"
              :style="{ order: socialLink.order }"
            )
              q-icon(size="1.5rem" @click="openNewTab(socialLink.link)" :name="socialLink.icon")
          span(class="vertical-separator")
          q-list(class="row")
            q-item(
              clickable
              class="rounded-borders"
              v-for="anchor in anchors"
              :key="anchor.selector"
              :style="{ order: anchor.order }"
            )
              q-item-section
                | {{ anchor.label }}

      q-btn(
        dense
        flat
        round
        icon="menu"
        class="lt-sm"
        @click="right = !right"
      )

  q-drawer(
    v-model="isDrawerOpen"
    class="lt-sm"
    side="right"
    behavior="mobile"
    bordered
  )
    .wrapper.column.fit
      q-list(class="q-pa-md col")
        q-item(
          clickable
          class="rounded-borders"
          v-for="anchor in anchors"
          :key="anchor.selector"
          :style="{ order: anchor.order }"
        )
          q-item-section
            | {{ anchor.label }}

      q-list(class="row justify-end q-pa-md col-auto")
        q-item(
          clickable
          class="rounded-borders"
          class="flex flex-center"
          v-for="socialLink in socialLinks"
          :key="socialLink.label"
          :style="{ order: socialLink.order }"
        )
          q-icon(size="1.5rem" @click="openNewTab(socialLink.link)" :name="socialLink.icon")

  q-page-container()
    router-view
</template>

<script>
export default {
  computed: {
    isDrawerOpen: {
      get() {
        return this.$store.getters['app/getDrawerState'];
      },
      set() {
        this.$store.commit('app/toggleDrawer');
      },
    },
    anchors: {
      get() {
        return this.$store.getters['app/getAnchors'];
      },
    },
    socialLinks: {
      get() {
        return this.$store.getters['app/getSocialLinks'];
      },
    },
  },
  data() {
    return {
    };
  },
  methods: {
    openNewTab(url) {
      window.open(url, '_blank').focus();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
