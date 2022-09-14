<script setup>
import CTA from 'components/CTA.vue';
import { ref, computed } from 'vue';
import { useMouseInElement } from '@vueuse/core';

const target = ref(null);
const previousValue = ref(null);

const {
  elementX, elementY, isOutside, elementHeight, elementWidth,
} = useMouseInElement(target);

const setPreviousValue = (value) => { previousValue.value = value; };
const cardTransform = computed(() => {
  const MAX_ROTATION = 10;

  const rX = (
    MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2);

  const rY = -(
    MAX_ROTATION / 2 - (elementX.value / elementWidth.value) * MAX_ROTATION).toFixed(2);

  if (isOutside.value && !previousValue.value) { return ''; }

  if (isOutside.value && previousValue.value) {
    return previousValue.value;
  }

  const value = `perspective(${elementWidth.value}px) rotateY(${rY}deg) rotateX(${rX}deg)`;

  setPreviousValue(value);

  return value;
});
</script>

<template>
<div class="wrapper column q-pa-md">
  <div class="col flex flex-center">
    <transition
      appear
      enter-active-class="animated zoomIn"
      leave-active-class="animated fadeOut"
    >
      <div
        class="message-container default-box q-pa-xl"
        ref="target"
        :style="{ transform: cardTransform }"
      >
        <h1 class="q-my-none text-center font-playfair">
          {{ $t('home.title') }}
        </h1>

        <h2 class="q-my-none text-center">
          {{ $t('home.subtitle') }}
        </h2>

        <span class="text-center">
          <div class="local-container">
            São Paulo
            <span class="separator" />
            Brasil
          </div>
        </span>

        <CTA class="cta"/>
      </div>
    </transition>
  </div>
</div>
</template>

<style scoped lang="scss">
.message-container {
  margin-top: -6rem;
  transition: 'transform .2s ease-out';
}
.wrapper {
  background: url('/waveheader.svg');
  background-size: 101% auto;
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
