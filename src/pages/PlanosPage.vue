<template>
    <div class="grid grid-cols-3 gap-4 mt-0 md:mt-[10vh] px-[5vw] md:px-[10vw] xl:px-[20vw]">
        <div class="col-span-3 text-center mb-3 sm:mb-8 animate-[fadeIn_1s_ease-out_forwards]">
            <h1 class="text-2xl text-texto text-shadow-texto font-opensans-bold mb-4">Planos e Preços</h1>
            <p class="text-texto text-shadow-texto mb-2 sm:mb-6 font-montserrat">
                Escolha o plano ideal para o seu negócio e comece a transformar suas entregas hoje mesmo.
            </p>
        </div>
        <div class="col-span-3">
            <div class="mx-auto max-w-[950px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">

                    <div class="rounded-2xl border justify-center border-indigo-600 p-6 shadow-xs ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12 hover:shadow-2xl hover:shadow-indigo-600 card-plano">
                        <div class="text-center">
                            <h2 class="text-lg font-medium text-texto">
                                Plano PRO – SkyPro
                                <span class="sr-only">Plan</span>
                            </h2>
                    
                            <p class="mt-2 sm:mt-4">
                                <strong class="text-3xl font-bold text-texto sm:text-4xl"> R$ 300 </strong>
                    
                                <span class="text-sm font-medium text-gray-500">/mês</span>
                            </p>
                        </div>
                
                        <ul class="mt-6 space-y-2 text-sm">
                            <li class="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 text-indigo-700 shadow-sm"
                                >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                    
                                <span class="text-gray-500 ml-2"> Entregas ilimitadas </span>
                                <img src="@/assets/images/planos/drone-icon.png" alt="drone plano pro" class="ml-2 size-5">
                            </li>
                    
                            <li class="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 text-indigo-700 shadow-sm"
                                >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                    
                                <span class="text-gray-500 ml-2"> Atendimento 24/7 com gestor dedicado </span>
                                <img src="@/assets/images/planos/call-center.png" alt="atendimento" class="ml-2 size-5 object-contain">

                            </li>
                    
                            <li class="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 text-indigo-700 shadow-sm"
                                >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                    
                                <span class="text-gray-500 ml-2"> API para integração com seu sistema/logística </span>
                                <img src="@/assets/images/planos/api.png" alt="api" class="ml-2 size-5 object-contain">
                            </li>
                    
                            <li class="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 text-indigo-700 shadow-sm"
                                >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                    
                                <span class="text-gray-500 ml-2"> Seguro incluído para itens até R$ 2.000 </span>
                                <img src="@/assets/images/planos/secury.png" alt="seguro" class="ml-2 size-5 object-contain">
                            </li>
                    
                            <li class="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 text-indigo-700 shadow-sm"
                                >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                    
                                <span class="text-gray-500 ml-2"> Entregas fora do horário comercial e finais de semana </span>
                                <img src="@/assets/images/planos/calendar-date.png" alt="drone plano pro" class="ml-2 size-5 object-contain">
                            </li>
                    
                            <li class="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 text-indigo-700 shadow-sm"
                                >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                    
                                <span class="text-gray-500 ml-2"> Rastreamento em tempo real com histórico </span>
                                <img src="@/assets/images/planos/gps.png" alt="rastreio" class="ml-2 size-5 object-contain">
                            </li>
                        </ul>
                
                        <a
                        href="#"
                        @click="selecionarMenu('contato')"
                        class="mt-8 mx-auto block w-2/3 rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-hidden"
                        >
                        Solicitar proposta
                        </a>
                    </div>
                
                    <div class="rounded-2xl border border-texto p-6 shadow-xs sm:px-8 lg:p-12 hover:shadow-2xl hover:shadow-texto card-plano">
                        <div class="text-center">
                            <h2 class="text-lg font-medium text-texto">
                                Plano Base – SkySmart
                                <span class="sr-only">Plan</span>
                            </h2>
                    
                            <p class="mt-2 sm:mt-4">
                                <strong class="text-3xl font-bold text-texto sm:text-4xl"> R$ 200 </strong>
                    
                                <span class="text-sm font-medium text-gray-500">/mês</span>
                            </p>
                        </div>
                
                        <ul class="mt-6 space-y-2 text-sm">
                            <li class="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 text-indigo-700 shadow-sm"
                                >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                    
                                <span class="text-gray-500 ml-2"> Até 30 entregas por mês </span>
                                <img src="@/assets/images/planos/drone-icon.png" alt="drone plano pro" class="ml-2 size-5 object-contain">
                            </li>
                    
                            <li class="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 text-indigo-700 shadow-sm"
                                >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                    
                                <span class="text-gray-500 ml-2"> Rastreamento avançado (mapa + tempo estimado) </span>
                                <img src="@/assets/images/planos/gps.png" alt="drone plano pro" class="ml-2 size-5 object-contain">
                            </li>
                    
                            <li class="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 text-indigo-700 shadow-sm"
                                >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                    
                                <span class="text-gray-500 ml-2"> Suporte via chat e e-mail </span>
                                <img src="@/assets/images/planos/call-center.png" alt="drone plano pro" class="ml-2 size-5 object-contain">
                            </li>
                    
                            <li class="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 text-indigo-700 shadow-sm"
                                >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                    
                                <span class="text-gray-500 ml-2"> Reentrega gratuita em caso de falha </span>
                                <img src="@/assets/images/planos/falha.png" alt="drone plano pro" class="ml-2 size-5 object-contain">

                            </li>

                            <li class="flex items-center gap-1">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 text-indigo-700 shadow-sm"
                                >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                    
                                <span class="text-gray-500 ml-2"> Agendamento de entregas </span>
                                <img src="@/assets/images/planos/calendar-date.png" alt="drone plano pro" class="ml-2 size-5 object-contain">

                            </li>
                        </ul>
                
                        <a
                        href="#"
                        class="mt-8 mx-auto w-2/3 block rounded-full border border-indigo-600 dark:border-texto bg-fundo px-12 py-3 text-center text-sm font-medium text-indigo-600 dark:text-texto hover:ring-1 hover:ring-texto focus:outline-hidden"
                        @click="selecionarMenu('contato')"
                        >
                        Solicitar proposta
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { inject } from 'vue';

export default {
    setup() {
        const selecionarMenu = inject('selecionarMenu');
        return { selecionarMenu }
    }
}
</script>
<style scoped>
    ul > li > img {
        visibility: hidden;
    }

    ul > li:hover > img {
        animation: fadeIn 0.3s ease-out forwards;
    }

    .card-plano{
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card-plano:last-child{
        animation: fadeInLeftDefault 1s ease-out forwards;
    }

    .card-plano:first-child{
        animation: fadeInRightDefault 1s ease-out forwards;
    }


</style>