

<template>
    <div class="py-16 flex flex-col justify-center items-center gap-10">
        
        <div class="flex w-full justify-between w-full max-w-screen-md ">
            <div class="flex gap-4">
                <router-link to="/" class="text-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>
                </router-link>
                <h1 class="text-2xl font-bold text-blue-800 text-center">
                    Delicias del MAR S.A.S
                </h1>
            </div>
           

            <router-link to="/buyCar">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </router-link>
        </div>
    
        <div class="flex flex-col md:flex-row  flex-wrap w-full max-w-screen-md rounded-lg p-6 bg-gray-300">

            <div class="w-full md:w-1/3 p-2" v-for="item in ItemsModel" :key="item.name">
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
                    <button @click="viewBuyCar(item)" class="bg-blue-800 w-full py-1 rounded font-bold text-white hover:cursor-pointer">
                        Comprar
                    </button>
                </div>
            </div>
        
            
        </div>
    </div>
</template>


<script setup lang="ts">

   
    import ItemsModel  from "./../../components/state/items";
    import ItemsCarBuyModel  from "./../../components/state/carbuy";


    console.log(ItemsModel)

    //functions

    const viewBuyCar = (itemBuy : any) => {

        const newItemCarBuy = {
            id : itemBuy.id,
            name : itemBuy.name,
            price : itemBuy.price,
            desc : itemBuy.desc,
            img : itemBuy.img
        }
        ItemsCarBuyModel.push(newItemCarBuy);    

        ItemsCarBuyModel
        alert('se ha agregado el elemento al carrito.')
    } 

</script>

