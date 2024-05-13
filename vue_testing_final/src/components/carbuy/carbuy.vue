

<template>
    <div class="py-16 flex flex-col justify-center items-center gap-10">
        
        <div class="flex w-full justify-between w-full max-w-screen-md ">
            <div class="flex gap-4 items-center justify-center">
                <router-link to="/shop" class="text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                </router-link> 
                <h1 class="text-2xl font-bold text-blue-800 text-center">
                    Delicias del MAR S.A.S (carrito)
                </h1>
            </div>
           
        </div>
    
        <div class="flex flex-col md:flex-row  flex-wrap w-full max-w-screen-md rounded-lg p-6 bg-gray-300">

            <div class="w-full md:w-1/3 p-2" v-for="item in carBuyModel" :key="item.name">
                <div class="w-full bg-white flex flex-col gap-4 p-6 rounded-lg justify-center items-center h-full">
                    <figure class="w-full max-w-32">
                        <img :src="item.img" :alt="item.name">
                    </figure>
                    <h2 class="uppercase font-bold text-lg text-center text-blue-800">{{item.name}}</h2>
                    <p class="text-gray-700 flex-grow">
                        {{item.desc}}
                    </p>
                    <p class="text-lg font-bold text-green-600">
                        {{ item.price }}
                    </p>
                    <button class="bg-blue-800 w-full py-1 rounded font-bold text-white hover:cursor-pointer">
                        Comprar
                    </button>
                </div>
            </div>
        
            
        </div>
    </div>
</template>


<script setup lang="ts">
    import carBuyModel  from "./../../components/state/carbuy";

</script>