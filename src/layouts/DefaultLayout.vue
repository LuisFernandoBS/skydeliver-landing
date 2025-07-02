<template>
  <div class="min-h-screen flex flex-col bg-fundo">

    <header class="grid grid-cols-1 md:grid-cols-10 w-full fixed z-10">
        <div class="div-drone-menu fixed md:left-5 2xl:left-40"><img src="../assets/images/drone-menu.png" alt="drone menu" class="w-16 h-16 md:w-22 md:h-22 drone-menu"/></div>
        <div class="div-nav col-span-1 col-start-1 md:col-span-8 2xl:col-span-6 md:col-start-2 2xl:col-start-3">
            <nav class="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6 items-center md:gap-2 2xl:gap-4 py-7">
                <div class="col-span-1 col-start-1 anim-col delay-1">
                    <h1 class="text-2xl font-montserrat-bold text-primaria">SkyDelivery</h1>
                </div>
                <div class="col-span-1 col-start-1 anim-col md:col-start-2 2xl:col-start-4 text-center delay-2">
                    <a class="cursor-pointer md:text-md xl:text-xl font-montserrat text-texto hover:font-montserrat-bold underline-offset-8" :class="{'underline':menuAtivo === 'inicio'}" @click="selecionarMenu('inicio')">Início</a>
                </div>
                <div class="col-span-1 text-center anim-col delay-3">
                    <a class="cursor-pointer md:text-md xl:text-xl font-montserrat text-texto hover:font-montserrat-bold underline-offset-8" :class="{'underline':menuAtivo === 'planos'}" @click="selecionarMenu('planos')">Planos e Preços</a>
                </div>
                <div class="col-span-1 text-center anim-col delay-4">
                    <a class="cursor-pointer md:text-md xl:text-xl font-montserrat text-texto hover:font-montserrat-bold underline-offset-8" :class="{'underline':menuAtivo === 'contato'}" @click="selecionarMenu('contato')">Contato</a>
                </div>
            </nav>
        </div>
    </header>

    <main class="flex-1 bg-transparent">
      <router-view />
    </main>

    <footer class="bg-white text-center text-sm text-gray-500 py-4 border-t">
      &copy; {{ new Date().getFullYear() }} SkyDeliver. Todos os direitos reservados.
    </footer>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const menuAtivo = ref('inicio');

  function selecionarMenu(menuEscolhido) {
    menuAtivo.value = menuEscolhido;
  }

</script>

<style scoped>
  .anim-col {
    opacity: 0;
    visibility: hidden;
    animation: fadeInLeft 1.8s ease-out forwards;
  }

  .drone-menu {
    rotate: 15deg;
    animation: animacaoInclinacaoEntrada 3s ease forwards, animacaoInclinacaoSaida 500ms ease 3s forwards;
  }

  .div-drone-menu {
    animation: bounceInLeft 3s ease forwards, fadeOutRight 4s ease 3s forwards;
  }

  
  .delay-1 { animation-delay: 3.4s; }
  .delay-2 { animation-delay: 4s; }
  .delay-3 { animation-delay: 4.3s; }
  .delay-4 { animation-delay: 4.5s; }
  
  @media (max-width: 1260px) {
    .delay-1 { animation-delay: 3.3s; }
    .delay-2 { animation-delay: 3.8s; }
    .delay-3 { animation-delay: 4.2s; }
    .delay-4 { animation-delay: 4.5s; }
  }

  @media (min-width: 1261px) and (max-width: 1450px) {
    .delay-1 { animation-delay: 3.3s; }
    .delay-2 { animation-delay: 3.8s; }
    .delay-3 { animation-delay: 4.2s; }
    .delay-4 { animation-delay: 4.8s; }
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }
  }

  @keyframes bounceInLeft {
    0% {
      opacity: 0;
      transform: translateX(-1000px);
    }
    60% {
      opacity: 1;
      transform: translateX(30px);
    }
    80% { transform: translateX(-20px); }
    100% { transform: translateX(0); }
  }

  @keyframes fadeOutLeft {
    0% {
      opacity: 0;
      transform: translateX(-1000px);
    }
    60% {
      opacity: 1;
      transform: translateX(30px);
    }
    100% { transform: translateX(0); }
  }

  @keyframes fadeOutRight {
    0% {
      opacity: 1;
      transform: translateX(0) translateY(0);
    }
    95% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(100vw) translateY(0);
      visibility: hidden;
    }
  }

  @keyframes animacaoInclinacaoSaida {
    0% {
      rotate: 0deg;
    }
    100% {
      rotate: 15deg;
    }
  }

  @keyframes animacaoInclinacaoEntrada {
    0% {
      rotate: 15deg;
    }
    60% {
      rotate: -5deg;
    }
    80% { rotate: 5deg; }
    100% {
      rotate: 0deg;
    }
  }

</style>
