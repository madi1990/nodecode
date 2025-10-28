<template>
  <div>
    <h2>{{ fruitName }}</h2>
    <p>{{ fruitDesc }}</p>
  </div>
</template>

<script>
export default {
  props: ['fruitName', 'fruitDesc'],
  data() {
    return {
      name: 'Apples',
      message: 'I like apples'
    }
  }
};
</script>

<style>
  #app > div {
    border: dashed black 1px;
    display: inline-block;
    width: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
  #app > div:hover {
    cursor: pointer;
  }
</style>