<template lang="pug">
q-toolbar(class="q-px-md gt-xs text-grey-1")
  q-toolbar-title()
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
        class="rounded-borders text-uppercase"
        v-for="anchor in anchors"
        :key="anchor.selector"
        :style="{ order: anchor.order }"
      )
        q-item-section(
          style="letter-spacing: 2px; font-size: 0.7rem;"
        )
          | {{ anchor.label }}
</template>

<script>
export default {
  name: 'TheHeader',

  computed: {
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
};
</script>
