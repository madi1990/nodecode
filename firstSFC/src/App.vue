<script>
export default {
  data() {
    return {
      message: 'This is madi'
    };
  },
  methods: {
    receiveEmit(fruit) {
      alert(`You clicked on ${fruit}`);
    }
  }
};
</script>

<template>
  <h1>{{ message }}</h1>
  <food-item fruit-name="Orange" fruit-desc="1" @itemClicked="receiveEmit"/>
  <food-item fruit-name="Pizza" fruit-desc="2" @itemClicked="receiveEmit"/>
  <food-item fruit-name="Rice" fruit-desc="3" @itemClicked="receiveEmit"/>
</template>

<style></style>
