<script>
export default {
  data() {
    return {
      message: 'This is madi'
    };
  }
};
</script>

<template>
  <h1>{{ message }}</h1>
  <food-item fruit-name="Orange" fruit-desc="1"/>
  <food-item fruit-name="Pizza" fruit-desc="2"/>
  <food-item fruit-name="Rice" fruit-desc="3"/>
</template>

<style></style>
