<template>
    <BaseLayout>
        <h1>{{ cartoon.name }}</h1>
        <h2>{{ category_name }}</h2>
        <div class=" grid grid-cols-1 sm:grid-cols-2">
            <div>
            <p>{{ cartoon.description }}</p>
            <ul>
                <li><strong>Megjelenés éve:</strong> {{ cartoon.year }}</li>
                <li><strong>Rajzfilm hossza:</strong> {{ cartoon.length }}</li>
                <li><strong>Rendező:</strong> {{ cartoon.director }}</li>
                <li><strong>Zenét szerezte:</strong> {{ cartoon.music }}</li>

            </ul>
        </div>
        <div>
            <img class=" mx-auto block w-[50%]" :src="imageURL" :alt="cartoon.name">
        </div>
        </div>

    </BaseLayout>
</template>

<script>
    import BaseLayout from '@layouts/BaseLayout.vue'
    import {http} from '@utils/http.mjs'

    export default {
        data(){
            return {
                cartoon: {},
                category_name: ""
            }
        },
        components: {
            BaseLayout
        },
        methods: {
            async getCartoon(){
                const response = await http.get(`cartoons/${this.$route.params.id}`)
                this.cartoon = response.data.data
                this.getCategroyName();
            },
            async getCategroyName(){
                const response = await http.get(`cartoons/${this.cartoon.id}`)
                this.category_name = response.data.data.name
            }
        },
        watch: {
            "$route"(){
                this.getCartoon();
            }
        },
        mounted(){
            this.getCartoon();
        },
        computed:{
            imageURL(){
                return `/img/${this.cartoon.image}`;
            }
        }
    }
</script>