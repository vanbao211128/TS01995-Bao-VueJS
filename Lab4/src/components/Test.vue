<template>
<div :class="{ highlighted: isHighlighted }" :style="{ backgroundColor: bgColor }">
Kết hợp Class và Style Binding
</div>
<button class="btn btn-dark" @click="toggleHighlight">Toggle Highlight</button>
<button class="btn btn-dark" @click="toggleBgColor">Toggle Background Color</button>
</template>
<script setup>
import { ref } from 'vue';
const isHighlighted = ref(false);
const bgColor = ref('lightgray');
const toggleHighlight = () => {
isHighlighted.value = !isHighlighted.value;
}
const toggleBgColor = () => {
bgColor.value = bgColor.value === 'lightgray' ? 'lightpink' : 'lightgray';
}
</script>
<style>.highlighted {font-weight: bold; color: darkorchid;}</style>