<template>
  <div class="card p-10 rounded-md shadow-lg font-bold text-3xl text-blue-500">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "CardWidget",
    props: {
      msg: String,
    },
  };
</script>
