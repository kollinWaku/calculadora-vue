<template>
<div id="app">
  <h1> Calculadora </h1>
  <Calculadora/>
</div>

</template>

<script>
import Calculadora from "./main/Calculadora"
  export default {
    components: { Calculadora }

  }
</script>

<style>
body {
  margin:0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #fff;
  background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73))
}
</style>