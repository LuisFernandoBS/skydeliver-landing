 <template>
    <div>
        <div class="flex flex-col justify-start items-center w-[46vw] h-[50%] mt-50 p-8 pl-18 div-hero-inicio">
            <h1 class="text-4xl lg:text-6xl text-center font-bold text-texto mb-4 font-opensans-bold text-shadow-xs text-shadow-texto">
                Entregas aéreas mais rápidas e inteligentes
            </h1>
            <p class="text-lg md:text-2xl text-texto mb-2 font-montserrat text-shadow-xs text-shadow-texto">Com a <span class="text-acento">Sky</span>Delivery, sua encomenda chega voando até você.</p>
            <p class="text-[14px] text-texto mb-8 px-10 font-montserrat-light">Tecnologia com drones autônomos para entregas mais seguras, ecológicas e rápidas.</p>
            <a
            class="group relative inline-flex items-center overflow-hidden rounded-sm bg-primaria px-8 py-3 text-texto focus:ring-3 focus:outline-hidden"
            href="#"
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

                <span class="text-sm font-medium transition-all font-montserrat-bold group-hover:me-4"> Comece agora </span>
            </a>
        </div>
        <div class="blob relative md:absolute">
            <img src="@/assets/images/cloud-3.png" alt="cloud 3" class="imagem-cloud">
            <img src="@/assets/images/cloud-2.png" alt="cloud 2" class="imagem-cloud">
            <img src="@/assets/images/cloud-1.png" alt="cloud 1" class="imagem-cloud">
            <img src="@/assets/images/cloud-2.png" alt="cloud 2" class="imagem-cloud">
            <img src="@/assets/images/city.jpg" alt="city" class="imagem-blob">
        </div>
        <img src="@/assets/images/drone-blob.png" alt="drone-blob" class="drone-blob relative md:absolute">
    </div>
 </template>
 <script>
 export default {
    
 }
 </script>
 <style scoped>
        .blob {
        width: 46vw;
        height: 45vw;
        background: linear-gradient(135deg, var(--color-primaria),var(--color-destaque));
        border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
        animation: MovendoBlob 8s ease-in-out infinite;
        top: 40px;
        right: 0;
        overflow: hidden;
    }

    .imagem-blob {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(0.5) contrast(1.2);
    }
    
    .imagem-cloud {
        object-fit: contain;
        position: absolute;
        z-index: 2;
        animation: contorcerNuvem 11s ease-in-out infinite;
    }
    
    .imagem-cloud:first-child {
        width: 70%;
        height: 45%;
        top: 15%;
        left: 43%;
        animation-duration: 12s;
    }
    
    .imagem-cloud:nth-child(2) {
        width: 30%;
        height: 20%;
        top: 35%;
        left: 8%;
        filter: brightness(0.8);
        animation-delay: 500ms;
    }

    .imagem-cloud:nth-child(3) {
        width: 40%;
        height: 30%;
        top: 80%;
        left: 28%;
        filter: opacity(0.9) brightness(0.8);
    }

    .imagem-cloud:nth-child(4) {
        width: 25%;
        height: 25%;
        top: 55%;
        left: 55%;
        filter: opacity(0.8) brightness(0.8);
        animation: balancarNuvem 8s ease-in-out infinite;
    }

    .drone-blob {
        object-fit: contain;
        z-index: 3;
        width: 45vw;
        height: 45vw;
        top: -6%;
        right: 0%;
        visibility: hidden;
        animation: entradaDrone 3s ease-in-out 6.1s forwards, balancarDrone 8s ease-in-out 10.1s infinite;
    }

    .titulo-sombra {
        text-shadow: 2px 2px 6px rgb(0 0 0 / 88%);
    }

    .div-hero-inicio{
        animation: fadeInLeftDefault 700ms ease-in forwards;
    }

    @keyframes BrilhandoImagem {
        0% {
            filter: brightness(0.5) contrast(1.2);
        }
        50% {
            filter: brightness(0.7) contrast(1.4);
        }
        100% {
            filter: brightness(0.5) contrast(1.2);
        }
        
    }

    @keyframes MovendoBlob {
        0% {
            border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
        }
        50% {
            border-radius: 60% 40% 30% 70% / 50% 60% 40% 50%;
        }
        100% {
            border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
        }
    }

    @keyframes contorcerNuvem {
        0% {
            transform: scale(1) skew(0deg, 0deg);
            filter: blur(0px);
        }
        25% {
            transform: scale(1.03, 0.97) skew(1deg, -1deg);
            filter: blur(0.5px);
        }
        50% {
            transform: scale(0.98, 1.02) skew(-1deg, 1deg);
            filter: blur(0.3px);
        }
        75% {
            transform: scale(1.02, 1) skew(0.5deg, -0.5deg);
            filter: blur(0.4px);
        }
        100% {
            transform: scale(1) skew(0deg, 0deg);
            filter: blur(0px);
        }
    }

    @keyframes balancarNuvem {
        0% {
            transform: translateX(0) translateY(0);
        }
        25% {
            transform: translateX(-10px) translateY(-5px);
        }
        50% {
            transform: translateX(10px) translateY(5px);
        }
        75% {
            transform: translateX(-5px) translateY(-2.5px);
        }
        100% {
            transform: translateX(0) translateY(0);
        }
    }

    @keyframes balancarDrone {
        0% {
            transform: translateX(-20%) translateY(0);
        }
        25% {
            transform: translateX(-20%) translateY(-7px);
        }
        40% {
            transform: translateX(-20%) translateY(6px);
        }
        75% {
            transform: translateX(-20%) translateY(-4.5px);
        }
        100% {
            transform:translateX(-20%) translateY(0);
        }
    }

    @keyframes entradaDrone {
        0% {
            visibility: visible;
            transform: scale(0) translateX(101%) translateY(80%);
        }
        100% {
            visibility: visible;
            transform: scale(1) translateX(-20%) translateY(0%);
        }
    }
 </style>