<template lang="pug">
.wrapper.column.q-pa-md
  .col-auto
    the-header

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
import TheHeader from 'components/TheHeader.vue';

export default {
  name: 'sectionHome',
  components: {
    CTA,
    TheHeader,
  },
  data() {
    return {
    };
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
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position-y: -5px;
  background-position-x: 50%;
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
