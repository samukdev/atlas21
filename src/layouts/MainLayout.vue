<template lang="pug">
q-layout(view="hHr lpR fFf")
  transition(
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  )

  q-drawer(
    v-model="isDrawerOpen"
    class="lt-md"
    side="right"
    behavior="mobile"
    bordered
  )
    .wrapper.column.fit
      q-list(class="q-pa-md col")
        q-item(
          v-close-popup
          clickable
          class="rounded-borders"
          v-for="anchor in anchors"
          :key="anchor.selector"
          :style="{ order: anchor.order }"
          @click="handleScroll(anchor.selector)"
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
import { scroll } from 'quasar';

const { getScrollTarget, setVerticalScrollPosition } = scroll;

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
    handleScroll(el) {
      this.isDrawerOpen = false;
      setTimeout(() => {
        const ele = document.getElementById(el);
        const target = getScrollTarget(ele);
        const offset = ele.offsetTop;
        const duration = 400;
        setVerticalScrollPosition(target, offset, duration);
      }, 350);
    },

    openNewTab(url) {
      window.open(url, '_blank').focus();
    },
  },

};
</script>

<style lang="scss" scoped>
</style>
