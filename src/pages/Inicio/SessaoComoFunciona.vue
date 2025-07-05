<template>
    <div class="px-20 py-24 mx-28 flex flex-wrap">
        <div class="flex flex-wrap w-full">
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 animate-[entradaEsquerda_1.5s_ease-out_forwards]">
                <h2 class="text-4xl text-center font-opensans-bold text-texto mb-12">Como funciona a entrega pela SkyDelivery?</h2>
                <div class="flex relative pb-24 etapa-entrega">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-texto pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primaria inline-flex items-center justify-center relative z-10">
                        📱
                    </div>
                    <div class="flex-grow pl-4 descricao-etapa">
                        <h2 class="font-medium text-sm font-montserrat-bold text-acento mb-1 tracking-wider">Pedido realizado</h2>
                        <p class="leading-relaxed text-texto font-opensans">Você faz seu pedido online através da nossa plataforma.</p>
                    </div>
                </div>
                <div class="flex relative pb-24 etapa-entrega">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-texto pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primaria inline-flex items-center justify-center relative z-10">
                        🚁
                    </div>
                    <div class="flex-grow pl-4 descricao-etapa">
                        <h2 class="font-medium title-font text-sm font-montserrat-bold text-acento mb-1 tracking-wider">Drone preparado</h2>
                        <p class="leading-relaxed text-texto font-opensans">O drone é automaticamente carregado com sua encomenda.</p>
                    </div>
                </div>
                <div class="flex relative pb-24 etapa-entrega">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-texto pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primaria inline-flex items-center justify-center relative z-10">
                        📍
                    </div>
                    <div class="flex-grow pl-4 descricao-etapa">
                        <h2 class="font-medium title-font text-sm font-montserrat-bold text-acento mb-1 tracking-wider">Entrega aérea</h2>
                        <p class="leading-relaxed text-texto font-opensans">O drone navega até o seu endereço de forma segura e rápida.</p>
                    </div>
                </div>
                <div class="flex relative etapa-entrega">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primaria inline-flex items-center justify-center relative z-10">
                        🏠
                    </div>
                    <div class="flex-grow pl-4 descricao-etapa">
                        <h2 class="font-medium title-font text-sm font-montserrat-bold text-acento mb-1 tracking-wider">Chegou até você</h2>
                        <p class="leading-relaxed text-texto font-opensans">Você recebe sua encomenda na porta de casa.</p>
                    </div>
                </div>
            </div>
            <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="@/assets/images/cidade-percurso.png" alt="step">
        </div>
    </div>
</template>
<script setup>

</script>

<style lang="scss" scope>


    .etapa-entrega .pointer-events-none{
        opacity: 0;
    }

    .etapa-entrega>.flex-shrink-0{
        opacity: 0;
    }
    
    .descricao-etapa{
        opacity: 0;
    }
    
    img.object-cover{
        opacity: 0;
    }

    .sessao-ativa{
        .etapa-entrega .pointer-events-none{
            animation: expandindoParaBaixo 0.6s ease-out forwards;
        }

        .etapa-entrega>.flex-shrink-0{
            animation: scaleIn 0.6s ease-out forwards;
        }
        
        .descricao-etapa{
            animation: fadeIn 0.6s ease-out forwards;
        }
        
        img.object-cover{
            animation: scaleIn 1.4s ease-out forwards;
        }
    }

    .etapa-entrega:nth-child(2) .pointer-events-none, .etapa-entrega:nth-child(2) .descricao-etapa{
        animation-delay: 1.6s;
    }

    .etapa-entrega:nth-child(3) .pointer-events-none, .etapa-entrega:nth-child(3) .descricao-etapa{
        animation-delay: 2.1s;
    }

    .etapa-entrega:nth-child(4) .pointer-events-none, .etapa-entrega:nth-child(4) .descricao-etapa{
        animation-delay: 2.7s;
    }

    .etapa-entrega:nth-child(5) .pointer-events-none, .etapa-entrega:nth-child(5) .descricao-etapa{
        animation-delay: 3.4s;
    }

    .etapa-entrega:nth-child(2) .flex-shrink-0{
        animation-delay: 1.3s;
        animation-duration: 420ms;
    }

    .etapa-entrega:nth-child(3) .flex-shrink-0{
        animation-delay: 1.9s;
    }

    .etapa-entrega:nth-child(4) .flex-shrink-0{
        animation-delay: 2.5s;
    }

    .etapa-entrega:nth-child(5) .flex-shrink-0{
        animation-delay: 3.1s;
    }




    @keyframes entradaEsquerda {
        0% {
            opacity: 0;
            transform: translateX(-250px);
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }    
    }

    @keyframes expandindoParaBaixo {
        0% {
            opacity: 0;
            transform: rotateX(-100deg);
            transform-origin: top;
        }

        100% {
            opacity: 1;
            transform: rotateX(0deg);
            transform-origin: top;
        }
    }    


</style>