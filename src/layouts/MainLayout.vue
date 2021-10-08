<template lang="pug">
q-layout(view="hHr lpR fFf")
  transition(
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  )
    div(reveal :reveal-offset="100" class="q-px-sm q-py-md bg-primary-light")
      TheHeader

  q-drawer(
    v-model="isDrawerOpen"
    class="lt-md"
    side="right"
    behavior="mobile"
    bordered
  )
    .wrapper.column.fit
      q-list(class="flex column q-pa-md col")
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
            | {{ $t(anchor.labelKey) }}

      q-list(class="row q-pa-md col-auto")
        q-item(
          clickable
          class="rounded-borders text-black-2"
          class="flex flex-centers"
          v-for="socialLink in socialLinks"
          :key="socialLink.label"
          :style="{ order: socialLink.order }"
        )
          q-item-section(side)
            q-icon(size="1.5rem" @click="openNewTab(socialLink.link)" :name="socialLink.icon")
          q-item-section
            | {{ socialLink.label }}
  q-page-container()
    router-view
    ScrollTopButton
</template>

<script>
import { scroll } from 'quasar';
import TheHeader from 'components/TheHeader.vue';
import ScrollTopButton from 'components/ScrollTopButton.vue';

const { getScrollTarget, setVerticalScrollPosition } = scroll;

export default {
  components: {
    TheHeader,
    ScrollTopButton,
  },
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
