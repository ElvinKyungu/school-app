<template lang="">
    <router-link to="" v-for="category in categorys" class="box">
        <img src="{{category.image}}" alt="">
        <h3>{{category.name}}</h3>
    </router-link>
</template>
<script>

export default({
  
    data () {
        return {
            categorys: [
                {
                    name:"HTML5/CSS3",
                    image:"images/category-1.png",
                },
                {
                    name:"PHP",
                    image:"images/category-1.png",
                },
                {
                    name:"PHP",
                    image:"images/category-1.png",
                },
                {
                    name:"HTML5/CSS3",
                    image:"images/category-1.png",
                },
                {
                    name:"PHP",
                    image:"images/category-1.png",
                },
                {
                    name:"PHP",
                    image:"images/category-1.png",
                },
                {
                    name:"HTML5/CSS3",
                    image:"images/category-1.png",
                },
                {
                    name:"PHP",
                    image:"images/category-1.png",
                },
                {
                    name:"PHP",
                    image:"images/category-1.png",
                },
                {
                    name:"HTML5/CSS3",
                    image:"images/category-1.png",
                },
                {
                    name:"PHP",
                    image:"images/category-1.png",
                },
                {
                    name:"PHP",
                    image:"images/category-1.png",
                }
            ],
        }
    },
    methods: {
        
        
    },
        setup() {
            
        },
    })
</script>
