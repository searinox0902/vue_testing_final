<!-- 
    /////////////
        Login
    ////////////
-->




<template>
    <div class="min-h-screen w-fill bg-gray-200 flex items-center justify-center">

        <div class="px-12 py-10 bg-gray-300 rounded-xl space-y-4 hover:border-2 hover:border-blue-400">

            <form class="space-y-4" @submit.prevent="iniciarSesion">
                <div class="mb-6">
                    <h1 class="text-2xl font-bold text-blue-800">Inicio de Sesión</h1>
                </div>
                
                <!-- Name -->
                <div>
                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nombre de
                        usuario</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                            <span class="text-gray-500 sm:text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </span>
                        </div>
                        <input v-model="mail" required type="mail" name="name" id="name" placeholder="Email"
                            class="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <!-- Password -->
                <div>
                    <label  for="name" class="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                    <div class="relative mt-2 rounded-md shadow-sm">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                            <span class="text-gray-500 sm:text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                            </span>
                        </div>
                        <input  v-model="password" required type="password" name="name" id="name"
                            class="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <!-- submit -->
                <div>
                    <input type="submit" class="bg-blue-800 w-full py-1 rounded font-bold text-white mt-2  hover:cursor-pointer"
                        value="Ingresar" >
                </div>
            </form>


            <!-- button -->
            <div class="flex flex-col">
                <router-link to="/register" class="bg-white w-full py-1 rounded font-bold text-blue-800 mt-2 text-center  hover:cursor-pointer"> 
                    Registrate
                </router-link> 

             </div>
        </div>

    </div>
</template>


<script setup lang="ts">
    import userModel from '../../state/users'
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter();
    const mail = ref('');
    const password = ref('');

    const iniciarSesion = () => {
        for (const usuarioModel of userModel){
            if(usuarioModel.mail === mail.value && usuarioModel.password == password.value){
                alert("Inicio de sesión exitoso.");
                router.push({ path: '/shop' });
                return;
            }
           
        }

        alert('Credenciales incorrectas');
        return
    }
</script>


<style scoped></style>
