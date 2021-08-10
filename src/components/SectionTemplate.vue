<template lang="pug">
.wrapper
  section(class="q-pa-lg container" )
    div(
      class="heading text-center q-px-sm"
    )
      h1(
        v-if="title"
        class="text-h3 font-playfair q-mt-none q-mb-md text-weight-medium text-black-1")
        | {{ title }}
      p(
        v-if="subtitle"
        class="text-h6 text-black-2 text-weight-regular font-lora"
      )
        | {{ subtitle }}
      div(class="flex flex-center")
        span(class="separator")
    div
      slot
</template>

<script>
export default {
  name: 'SectionTemplate',

  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  margin-bottom: 10rem;
}
.heading {
  margin-bottom: 4rem;
}

.separator {
  font-size: 14px;
  color: #a8a8b3;
  margin: 0px 0;
  display: flex;
  align-items: center;
  width: 50px;
  margin-top: .25rem;

  &::before {
    content: '';
    flex: 1;
    height: 2px;
    background: $primary-gradient;
  }

  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: $primary-gradient;
  }
}
</style>
