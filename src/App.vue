<template>
  <div>
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>  
  import ProductListOne from './components/ProductListOne'
  import ProductListTwo from './components/ProductListTwo'

  export default {
    name: 'app',
    components: {
      ProductListOne,
      ProductListTwo
    }
  }
</script>

<style>
  body {
    font-family: Ubuntu;
    color: #555;
  }
</style>
