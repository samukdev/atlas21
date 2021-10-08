<template lang="pug">
div(class="bg-primary")
  div(
    v-if="visible"
    style="height: 50px;"
  )
  transition(
    appear
    enter-active-class="animated bounceIn"
    leave-active-class="animated fadeOut"
  )
    q-page-sticky(
      v-if="visible"
      position="bottom-right"
      :offset="[18, 18]"
    )
      q-btn(
        fab
        icon="expand_less"
        color="primary"
        @click="scrollToTop"
      )
</template>

<script>
export default {
  name: 'ScrollTopButton',
  data: () => ({
    visible: false,
  }),

  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    handleScroll() {
      const offset = window.pageYOffset;

      this.visible = offset > 75;
    },
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
