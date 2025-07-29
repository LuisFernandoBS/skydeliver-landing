<template>
    <div class="grid grid-cols-3 gap-4 mt-[10vh] px-[20vw]">
        <div class="col-span-3 text-center mb-8 animate-[fadeIn_1s_ease-out_forwards]">
            <h1 class="text-2xl text-texto text-shadow-texto font-opensans-bold mb-4">Contato</h1>
            <p class="text-texto text-shadow-texto mb-6 font-montserrat">Entre em contato conosco para mais informações.</p>
        </div>
        <div class="col-span-1 flex flex-col items-center justify-center animate-[fadeIn_2s_ease-out_forwards]">
            <img src="@/assets/images/telefone.png" alt="telefone" class="w-17 h-17 mb-4">
            <h4 class="text-lg font-bold font-opensans text-texto">Telefone</h4>
            <p class="text-texto text-shadow-texto font-montserrat">+55 11 1234-5678</p>
        </div>
        <div class="col-span-1 flex flex-col items-center justify-center animate-[fadeIn_2s_ease-out_forwards]">
            <img src="@/assets/images/localizacao.png" alt="localização" class="w-17 h-17 mb-4">
            <h4 class="text-lg font-bold font-opensans text-texto">Endereço</h4>
            <p class="text-texto text-shadow-texto font-montserrat">Av. Oceânica, 456 - Barra, Salvador, BA</p>
        </div>
        <div class="col-span-1 flex flex-col items-center justify-center animate-[fadeIn_2s_ease-out_forwards]">
            <img src="@/assets/images/email.png" alt="email" class="w-17 h-17 mb-4">
            <h4 class="text-lg font-bold font-opensans text-texto">Email</h4>
            <p class="text-texto text-shadow-texto font-montserrat">contato@skyline.com</p>
        </div>
        <div class="col-span-3 mt-8 animate-[fadeIn_2s_ease-out_forwards]">
            <div class="flex flex-wrap w-[100%] border border-secundaria rounded-2xl my-0 lg:my-6">
                <div class="w-screen lg:w-[50%]">
                    <img class="object-cover object-center border border-secundaria rounded-2xl h-full" src="@/assets/images/contato.jpg" alt="contato">
                </div>
                <div class="w-screen lg:w-[50%] pr-0">
                    <h2 class="text-xl text-texto text-shadow-texto font-opensans-bold my-6 px-8">Formulário de Contato</h2>
                    <form @submit.prevent="enviarFormulario" class="flex flex-col space-y-4 px-5">
                        <CampoForm id="nomeEmpresa" type="text" label="Nome da empresa" :required="true"/>
                        <CampoForm id="cnpj" type="text" label="CNPJ" :required="true"/>
                        <CampoForm id="emailCorporativo" type="text" label="Email" :required="true"/>
                        <CampoForm id="numEstimadoEntrega" type="number" label="Numero estimado de entregas/mês" />
                        <label for="mensagem" class="relative">
                            <textarea
                            id="mensagem"
                            class="peer mt-0.5 pt-3 px-4 w-full rounded text-texto border-gray-300 bg-fundo shadow-sm sm:text-sm"
                            placeholder=""
                            rows="4"
                            name="Mensagem"
                            minlength="10"
                            maxlength="400"
                            required></textarea>
        
                            <span class="absolute inset-y-0 start-3 -translate-y-4 mt-2 h-fit bg-fundo px-0.5 text-sm font-medium text-texto transition-transform peer-placeholder-shown:-translate-y-0 peer-focus:-translate-y-4"> Mensagem </span>
                        </label>
                        <div class="justify-between flex items-center">
                            <span class="text-texto font-montserrat text-[10px] w-[50%]">Campos com * é obrigatorio o preenchimento.</span>
                            <button
                            type="submit"
                            class="group relative w-[25%] cursor-pointer inline-flex items-center overflow-hidden rounded-sm bg-primaria px-8 py-3 text-texto focus:outline-hidden"
                            >
                                <span class="absolute -end-full transition-all group-hover:end-4">
                                    <svg
                                    class="size-5 shadow-sm rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                    </svg>
                                </span>
    
                                <span class="text-sm font-medium transition-all font-montserrat-bold group-hover:me-4"> Enviar </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import CampoForm from './Contato/CampoForm.vue';

    function enviarFormulario(){
        const campos = document.querySelectorAll('form input, form textarea');
        campos.forEach(campo=>{
            if(campo.value.trim() === ''){
                alert(`O campo ${campo.name} é obrigatório.`);
                campo.focus();
                campo.classList.add('border-red-500');
                return;
            }
            campo.classList.remove('border-red-500');
        })
        
        console.log(campos);
    }
</script>
<style>
    
</style>