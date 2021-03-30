<template>
  <div class="App">
    <header class="App-header">
      Vue App:
     {{ message }}
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue"
    };
  }
};
</script>
