<template>
  <table class=" mx-auto w-[60%]">
    <thead class=" bg-green-800 text-white">
      <tr >
        <th class="p-2">Rendező</th>
        <th class="p-2">Cím</th>
        <th class="p-2">Év</th>
        <th class="p-2">Információ</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="cartoon in cartoons" :key="cartoon.id" class=" border-y-2 border-green-800">
        <td class="p-2">{{ cartoon.director }}</td>
        <td class="p-2 text-green-800 font-bold">{{ cartoon.name }}</td>
        <td class="p-2 text-center">{{ cartoon.year }}</td>
        <td class="p-2"><RouterLink class=" bg-yellow-100 border-2 rounded-md p-1 text-green-800 border-green-800 w-full block text-center font-bold" :to="{name: 'single-cartoon', params:{id: cartoon.id}}">Részletek</RouterLink></td>
      </tr>
    </tbody>
  </table>
</template>
 
<script>
export default {
    props: {
        cartoons: Array
    }
}
</script>