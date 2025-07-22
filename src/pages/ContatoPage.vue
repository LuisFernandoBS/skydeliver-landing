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
            <h2 class="text-xl text-texto text-shadow-texto font-opensans-bold mb-4">Formulário de Contato</h2>
            <form class="flex flex-col space-y-4">
                <label for="nomeEmpresa" class="relative">
                    <input
                    type="text"
                    id="nomeEmpresa"
                    placeholder=""
                    class="peer mt-0.5 w-full py-4 rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                    />
                    <span
                    class="absolute inset-y-0 start-3 -translate-y-5 mt-2 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
                    >
                    Nome da empresa
                    </span>
                </label>
                <label for="cnpj" class="relative">
                    <input
                    type="text"
                    id="cnpj"
                    placeholder=""
                    class="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                    />
                    <span
                    class="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
                    >
                    CNPJ
                    </span>
                </label>
                <label for="EmailCorporativo" class="relative">
                    <input
                    type="email"
                    id="EmailCorporativo"
                    placeholder=""
                    class="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                    />
                    <span
                    class="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
                    >
                    Email
                    </span>
                </label>
                <label for="numEstimadoEntrega" class="relative">
                    <input
                    type="number"
                    id="numEstimadoEntrega"
                    placeholder=""
                    class="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                    />
                    <span
                    class="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5 dark:bg-gray-900 dark:text-white"
                    >
                    Numero estimado de entregas/mês
                    </span>
                </label>
                <label for="mensagem">
                    <span class="text-sm font-medium text-gray-700"> Mensagem </span>
                
                    <textarea
                    id="mensagem"
                    class="mt-0.5 w-full resize-none rounded border-gray-300 shadow-sm sm:text-sm"
                    rows="4"
                    ></textarea>
                </label>
            </form>
        </div>
    </div>
</template>
<script setup>
</script>
<style>
    
</style>