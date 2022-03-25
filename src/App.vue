<template>
  <div class="container mx-auto">
    <biker-book></biker-book>
  </div>
</template>

<script>
  //import HelloWorld from "./components/HelloWorld.vue";
  // import Tabs from "./components/Tabs.vue";
  import BikerBook from "./components/BikerBook.vue";
  //import GpxParse from "./components/GpxParse.vue";

  export default {
    name: "App",
    components: {
      //  Tabs,
      BikerBook,
      //GpxParse,
    },
  };
</script>

<style>
  #app {
    margin-top: 60px;
  }
</style>
