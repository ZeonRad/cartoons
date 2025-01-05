<template>
  <BaseLayout>
    <h1 class="text-3xl my-10 dark:text-white text-center">Animációs Rajzfilmek</h1>
    <BaseTable :cartoons="cartoons" />
  </BaseLayout>
</template>

<script>
import BaseLayout from '@layouts/BaseLayout.vue'
import BaseTable from '@components/BaseTable.vue'
import {http} from "@utils/http.mjs"
export default {
  components: {
    BaseLayout,
    BaseTable
  },
data(){
  return {
    cartoons: []
  }
},
mounted(){
    this.getCartoons();
  },
methods: {
    async getCartoons(){
      const response = await http.get('/cartoons');
      this.cartoons = response.data.data;
    }
  },
}
</script>
