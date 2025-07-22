<template>
    <div class="flex flex-wrap 2xl:px-20 py-24 lg:py-0 2xl:py-24 2xl:mx-28">
        <div class="flex flex-wrap w-[80vw] xl:w-[85vw] 2xl:w-[80vw]">
            <div class="w-screen lg:w-1/2 xl:w-2/5 pr-0 py-0 lg:pr-10 lg:py-6 animate-[entradaEsquerda_1.5s_ease-out_forwards]">
                <h2 class="text-4xl text-center font-opensans-bold text-texto mb-12">Como funciona a entrega pela SkyDelivery?</h2>
                <div class="flex relative pb-24 etapa-entrega" :class="{'etapa-ativa': ativaAnimacaoEtapa === 1}">
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
                <div class="flex relative pb-24 etapa-entrega" :class="{'etapa-ativa': ativaAnimacaoEtapa === 2}">
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
                <div class="flex relative pb-24 etapa-entrega" :class="{'etapa-ativa': ativaAnimacaoEtapa === 3}">
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
                <div class="flex relative etapa-entrega" :class="{'etapa-ativa': ativaAnimacaoEtapa === 4}">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primaria inline-flex items-center justify-center relative z-10">
                        🏠
                    </div>
                    <div class="flex-grow pl-4 descricao-etapa">
                        <h2 class="font-medium title-font text-sm font-montserrat-bold text-acento mb-1 tracking-wider">Chegou até você</h2>
                        <p class="leading-relaxed text-texto font-opensans">Você recebe sua encomenda na porta de casa.</p>
                    </div>
                </div>
            </div>
            <div class="w-screen lg:w-1/2 xl:w-3/5  mt-0 md:mt-0 relative">
                <!-- Etapa 1 -->
                <img id="notificacaoPercurso" 
                class="w-[20px] h-[20px] md:w-[32px] md:h-[32px] object-cover object-center absolute z-3 left-[12.5%] top-[32.5%] md:top-[18.5%] md:left-[14.5%] lg:top-[28.5%] lg:left-[14%] 2xl:top-[28.5%] 2xl:left-[10.2%]"
                :class="{'etapa-ativa': ativaAnimacaoEtapa === 1, 'fade-out': ativaAnimacaoEtapa - 1 === 1}" 
                src="@/assets/images/push-notification.png" alt="push notification">
                <img id="smartphonePercurso" class="w-[35px] h-[35px] md:w-[64px] md:h-[64px] object-cover object-center absolute z-2 top-[36%] md:top-[19%] lg:top-[29%] left-[6.5%] md:left-[9%] lg:left-[8.5%] 2xl:left-[6.3%]"
                :class="{'etapa-ativa': ativaAnimacaoEtapa === 1, 'fade-out': ativaAnimacaoEtapa - 1 === 1}"
                src="@/assets/images/smartphone.png" alt="smartphone">
                <!-- Etapa 2 -->
                <div id="backgroundEtapa2" class="rounded-full w-[60px] h-[60px] left-[3.5%] top-[29%] md:w-[92px] md:h-[95px] md:top-[15%] md:left-[7.5%] lg:top-[27%] lg:left-[7.1%] 2xl:top-[26%] 2xl:left-[5.5%] absolute bg-gray-500 flex justify-center items-center" :class="{'etapa-ativa': ativaAnimacaoEtapa === 2, 'fade-out': ativaAnimacaoEtapa - 1 === 2}">
                    <img id="preparoDrone" class="w-[45px] h-[45px] object-cover object-center z-2"
                    :class="{'etapa-ativa': ativaAnimacaoEtapa === 2, 'fade-out': ativaAnimacaoEtapa - 1 === 2}"
                    src="@/assets/images/drone-preparo.png" alt="preparo drone">
                </div>
                <img id="zoomSmartphonePercurso" class="w-[105px] h-[105px] md:w-[165px] md:h-[165px] object-contain object-center absolute z-4 top-[29%] left-[-3.5%] md:top-[15%] md:left-[1.5%] lg:top-[27%] 2xl:top-[26%]" 
                :class="{'etapa-ativa': ativaAnimacaoEtapa === 1 || ativaAnimacaoEtapa === 2,'fade-out': ativaAnimacaoEtapa - 1 === 2}"
                src="@/assets/images/zoom.png" alt="smartphone zoom">
                <!-- Etapa 3 -->
                <img ref="droneEntrega" id="droneEntrega" class="w-[45px] h-[45px] md:w-[64px] md:h-[64px] object-cover object-center absolute z-2 top-[45%] md:top-[30%] left-[9%] lg:top-[35%]"
                :class="{'etapa-ativa': ativaAnimacaoEtapa === 3}"
                :style="{ animation: ativaAnimacaoEtapa === 3 ? animacaoDrone: 'none' }"
                src="@/assets/images/drone-etapa-2.png" alt="drone entrega">
                <!-- Etapa 4 -->
                <img id="fogos" class="w-[50px] h-[50px] md:w-[64px] md:h-[64px] object-cover object-center absolute z-2 top-[38%] right-[14%] md:top-[26%] md:right-[18%] lg:right-[17%] lg:top-[33%] 2xl:top-[29.4%] 2xl:right-[19.3%]"
                :class="{'etapa-ativa': ativaAnimacaoEtapa === 4 ,'fade-out': ativaAnimacaoEtapa - 1 === 4}"
                src="@/assets/images/fogos.png" alt="fogos">
                <!-- Cidade -->
                <img ref="cidadePercurso" id="cidadePercurso" class="w-[95%] h-[95%] mx-[2.5%] object-contain object-center rounded-lg md:mt-0 mt-12" 
                src="@/assets/images/cidade-percurso.png" alt="cidade percurso">
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref, onBeforeUnmount } from 'vue';

    const ativaAnimacaoEtapa = ref(0);

    const cidadePercurso = ref(null)
    const droneEntrega = ref(null)
    const animacaoDrone = ref('')

    let observerResizeImgCidade = null;

    function setaTrajetoDroneEntrega() {
        const larguraImagem = cidadePercurso.value?.offsetWidth ?? 0;
        const larguraDrone = droneEntrega.value?.offsetWidth ?? 0;

        const deslocamento = larguraImagem - larguraDrone - (larguraImagem * 0.20);

        droneEntrega.value?.style.setProperty('--distanciaX', `${deslocamento}px`);

        animacaoDrone.value = 'saidaDrone 3s ease-in forwards, trajetoriaDrone 5s linear 3.1s forwards';
    }

    onBeforeUnmount(() => {
        if (observerResizeImgCidade && cidadePercurso.value) {
            observerResizeImgCidade.unobserve(cidadePercurso.value);
            observerResizeImgCidade.disconnect();
        }
    })    

    function ativarAnimacao() {
        setaTrajetoDroneEntrega();
        observerResizeImgCidade = new ResizeObserver(() => {
            setaTrajetoDroneEntrega();
        })
        observerResizeImgCidade.observe(cidadePercurso.value);

        setInterval(() => {
            ativaAnimacaoEtapa.value++;
            if (ativaAnimacaoEtapa.value > 4) {
                ativaAnimacaoEtapa.value = 1;
            }
        }, 8000);
    }

    defineExpose({ ativarAnimacao });
</script>

<style lang="scss" scope>

    .etapa-entrega .pointer-events-none{
        opacity: 0;
    }

    .etapa-entrega>.flex-shrink-0{
        opacity: 0;
    }
    
    .descricao-etapa, #cidadePercurso, #smartphonePercurso, #notificacaoPercurso,
    #zoomSmartphonePercurso, #backgroundEtapa2, #preparoDrone, #droneEntrega, #fogos{
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
        
        #cidadePercurso{
            animation: scaleIn 1.4s ease-out forwards;
        }
    }

    #zoomSmartphonePercurso.etapa-ativa{
        animation: expandindoParaCima 0.5s ease-out forwards;
    }

    #smartphonePercurso.etapa-ativa{
        animation: fadeInScale 1.4s ease-out 0.5s forwards;
    }

    #notificacaoPercurso.etapa-ativa{
        animation: expandindoParaCima 0.5s ease-out 1.9s forwards, shakeLeft 4s ease 2.4s infinite;
    }

    #fogos.etapa-ativa{
        animation: expandindoParaCima 0.5s ease-out 0.5s forwards;
    }

    #backgroundEtapa2.etapa-ativa{
        animation: fadeIn 0.5s ease-in-out forwards;
    }

    #backgroundEtapa2.etapa-ativa,#preparoDrone.etapa-ativa{
        animation: fadeIn 0.5s ease-in-out forwards;
    }
    
    .etapa-entrega.etapa-ativa .rounded-full::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: var(--color-primaria);
        animation: box 1.5s ease-in-out infinite;
        z-index: -1;
    }

    #smartphonePercurso.fade-out,#notificacaoPercurso.fade-out,#backgroundEtapa2.fade-out,#preparoDrone.fade-out,
    #zoomSmartphonePercurso.fade-out,#fogos.fade-out{
        animation: fadeOut 0.5s ease-in-out forwards;
    }
    
    #backgroundEtapa2.etapa-ativa,#preparoDrone.etapa-ativa{
        animation-delay: 0.5s;
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

    @keyframes fadeInScale {
        0% {
            opacity: 0;
            transform: scale(0.6);
        }

        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes expandindoParaCima {
        0% {
            opacity: 1;
            transform: scale(0);
            transform-origin: 50% 100%;
        }

        100% {
            opacity: 1;
            transform: scale(1);
            transform-origin: 50% 100%;
        }
    }

    @keyframes shakeLeft {
        0%,
        100% {
            transform: rotate(0deg);
            transform-origin: 0 50%;
        }

        10% {
            transform: rotate(2deg);
        }

        20%,
        40%,
        60% {
            transform: rotate(-4deg);
        }

        30%,
        50%,
        70% {
            transform: rotate(4deg);
        }

        80% {
            transform: rotate(-2deg);
        }

        90% {
            transform: rotate(2deg);
        }
    }

    @keyframes pulse {
        0% {
            background: var(--color-primaria);
            border: 0px solid var(--color-primaria);
            opacity: 0;
        }
        50% {
            background: var(--color-primaria);
            border: 30px solid var(--color-primaria);
            opacity: 0.8;
        }
        100% {
            background: var(--color-primaria);
            border: 0px solid var(--color-primaria);
            opacity: 0;
        }
    }

    @keyframes box {
        0% {
            box-shadow: 0 0 0 0 var(--color-primaria);
        }
        50% {
            box-shadow: 0 0 5px 10px var(--color-primaria-light);
        }
        100% {
            box-shadow: 0 0 0 0 var(--color-primaria);
        }
    }

    @keyframes saidaDrone {
        0% {
            opacity: 1;
            transform: scale(0);
            transform-origin: 50% 200%;
        }

        100% {
            opacity: 1;
            transform: scale(1);
            transform-origin: 50% 100%;
        }
    }

    @keyframes trajetoriaDrone {
        0% {
            rotate: 0deg;
            transform: translateX(0);
        }
        50% {
            rotate: -10deg;
        }
        60% {
            rotate: -9deg;
        }
        95% {
            opacity: 1;
            scale:1;
        }
        99% {
            scale:0;
        }
        100% {
            opacity: 0;
            rotate: 0deg;
            transform: translateX(var(--distanciaX));
        }
    }

</style>