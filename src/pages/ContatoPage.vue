<template>
    <div class="grid grid-cols-3 gap-4 mt-[8vh] px-[20vw]">
        <div class="col-span-3 text-center mb-8">
            <h1 class="text-2xl text-texto text-shadow-texto font-opensans-bold mb-4">Contato</h1>
            <p class="text-texto text-shadow-texto mb-6 font-montserrat">Entre em contato conosco para mais informações.</p>
        </div>
        <div class="col-span-1 flex flex-col items-center justify-center">
            <img src="@/assets/images/telefone.png" alt="telefone" class="w-17 h-17 mb-4">
            <h4 class="text-lg font-bold font-opensans text-texto">Telefone</h4>
            <p class="text-texto text-shadow-texto font-montserrat">+55 11 1234-5678</p>
        </div>
        <div class="col-span-1 flex flex-col items-center justify-center">
            <img src="@/assets/images/localizacao.png" alt="localização" class="w-17 h-17 mb-4">
            <h4 class="text-lg font-bold font-opensans text-texto">Endereço</h4>
            <p class="text-texto text-shadow-texto font-montserrat">Av. Oceânica, 456 - Barra, Salvador, BA</p>
        </div>
        <div class="col-span-1 flex flex-col items-center justify-center">
            <img src="@/assets/images/email.png" alt="email" class="w-17 h-17 mb-4">
            <h4 class="text-lg font-bold font-opensans text-texto">Email</h4>
            <p class="text-texto text-shadow-texto font-montserrat">contato@skyline.com</p>
        </div>
        <div class="col-span-3 mt-8">
            <div class="flex flex-wrap w-[80vw] xl:w-[85vw] 2xl:w-[80vw]">
                <div class="w-screen lg:w-1/2 pr-0 py-0 lg:pr-10 lg:py-6">
                    <img class="w-[95%] h-[95%] mx-[2.5%] object-contain object-center" src="@/assets/images/contato.jpg" alt="contato">
                </div>
                <div class="w-screen lg:w-1/2 pr-0 py-0 lg:pr-10 lg:py-6">
                    <h2 class="text-xl text-texto text-shadow-texto font-opensans-bold mb-4">Formulário de Contato</h2>
                    <form @submit.prevent="enviarFormulario" class="flex flex-col space-y-4">
                        <CampoForm id="nomeEmpresa" type="text" label="Nome da empresa" />
                        <CampoForm id="cnpj" type="text" label="CNPJ" />
                        <CampoForm id="emailCorporativo" type="text" label="Email" />
                        <CampoForm id="numEstimadoEntrega" type="number" label="Numero estimado de entregas/mês" />
                        <label for="mensagem" class="relative">
                            <textarea
                            id="mensagem"
                            class="peer mt-0.5 w-full rounded text-texto border-gray-300 bg-fundo shadow-sm sm:text-sm"
                            rows="4"
                            ></textarea>
        
                            <span class="absolute inset-y-0 start-3 -translate-y-[-3px] h-[80%] bg-fundo px-0.5 text-sm font-medium text-texto transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3"> Mensagem </span>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import CampoForm from './Contato/CampoForm.vue';

    function enviarFormulario(){
        const campos = document.querySelectorAll('input, textarea');
        console.log(campos);
    }
</script>
<style>
    
</style>