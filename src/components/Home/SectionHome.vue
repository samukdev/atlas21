<template lang="pug">
.wrapper.column
  .col-auto.flex.justify-end.q-py-md
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

    q-btn(
      dense
      flat
      round
      icon="menu"
      class="lt-sm text-grey-1"
      @click="toggleDrawer"
    )
  .col.flex.flex-center
    transition(
      appear
      enter-active-class="animated zoomIn"
      leave-active-class="animated fadeOut"
    )
      div(class="message-container default-box q-pa-xl")
        h1(class="q-my-none text-center font-playfair") Oi, eu sou o Samuel
        h2(class="q-my-none text-center") Desenvolvedor Frontend
        p(class="text-center")
          .local-container
            | São Paulo
            span(class="separator")
            | Brasil
        CTA(class="cta")
</template>

<script>
import CTA from 'components/CTA.vue';

export default {
  name: 'sectionHome',
  components: {
    CTA,
  },
  data() {
    return {
    };
  },

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

  methods: {
    openNewTab(url) {
      window.open(url, '_blank').focus();
    },
    toggleDrawer() {
      this.$store.commit('app/toggleDrawer');
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  background: url('/waveheader.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: -1%;
}

.cta {
  margin: 2.5rem auto 0 auto;
}

h1 {
  font-weight: 500;
  font-size: 4rem;
  padding-bottom: 0px;
  line-height: 95%;
  color: $text-black-1
}

h2 {
  font-size: 1.5rem;
  color: $text-black-2
}

p > .local-container {
  font-size: 1rem;
  font-weight: 300;
  color: $text-black-3;
  display: inline flex;
  align-items: center;
}

.separator {
  font-size: 14px;
  margin: 0 1rem;
  display: inline-flex;
  align-items: center;

  &::before {
    content: '';
    width: 1.25rem;
    margin-bottom: -0.2rem;
    height: 1px;
    background: #a8a8b3;
  }

  &::after {
    content: '';
    width: 1.25rem;
    margin-bottom: -0.2rem;
    height: 1px;
    background: #a8a8b3;
  }
}

.vertical-separator {
  border-left: 1px solid rgba(255, 255, 255, 0.25);
  margin: 0 1rem;
  height: 1.25rem;
}
</style>
