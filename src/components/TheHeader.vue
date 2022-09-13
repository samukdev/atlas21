<template lang="pug">
q-toolbar(class="full-width flex justify-end lt-md")
  q-btn(
    dense
    flat
    round
    icon="menu"
    class="text-grey-1"
    @click="toggleDrawer"
  )
q-toolbar(class="q-px-md gt-sm text-grey-1 row items-center")
  q-list(class="row items-center")
    q-item
      q-avatar
        q-img(src="https://github.com/samukdev.png")
    q-item(
      clickable
      class="rounded-borders flex flex-center"
      :style="{ order: socialLink.order }"
      v-for="socialLink in socialLinks"
      :key="socialLink.label"
      @click="openNewTab(socialLink.link)"
    )
      q-item-section(class="q-pr-md text-grey-1" side)
        q-icon(
          size="1.5rem"
          :name="socialLink.icon"
        )
      q-item-section(
        style="letter-spacing: 1px; font-size: 0.7rem;"
      )
        | {{ socialLink.label }}
  q-space
  div(class="flex items-center")
    q-list(class="row")
      q-item(
        clickable
        @click="handleScroll(anchor.selector)"
        class="rounded-borders text-uppercase"
        v-for="anchor in anchors"
        :key="anchor.selector"
        :style="{ order: anchor.order }"
      )
        q-item-section(
          style="letter-spacing: 2px; font-size: 0.7rem;"
        )
          | {{ $t(anchor.labelKey) }}
    lang-switch
</template>

<script>
import { scroll } from 'quasar';
import LangSwitch from 'components/LangSwitch.vue';
import { anchors, socialLinks } from 'src/utils';

const { getScrollTarget, setVerticalScrollPosition } = scroll;

export default {
  name: 'TheHeader',

  emits: ['toggleDrawer'],

  components: {
    LangSwitch,
  },

  data: () => ({
    anchors,
    socialLinks,
  }),

  methods: {
    toggleDrawer() {
      this.$emit('toggleDrawer');
    },
    handleScroll(el) {
      const ele = document.getElementById(el);
      const target = getScrollTarget(ele);
      const offset = ele.offsetTop;
      const duration = 400;
      setVerticalScrollPosition(target, offset, duration);
    },

    openNewTab(url) {
      window.open(url, '_blank').focus();
    },
  },
};
</script>
