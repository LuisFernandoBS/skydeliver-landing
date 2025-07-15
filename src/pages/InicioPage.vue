<template>
    <section class="h-screen flex">
        <Hero />
    </section>
    <section id="sessaoComoFunciona" class="flex md:h-screen" v-scroll-anim="{ onEnter: carregaAtivarAnimacao }">
        <SessaoComoFunciona ref="refSessao"/>
    </section>
</template>

<script setup>
    import { ref, nextTick } from 'vue';
    import Hero from './Inicio/Hero.vue';
    import SessaoComoFunciona from './Inicio/SessaoComoFunciona.vue';
    import scrollAnim from '@/directives/v-scroll-anim.js';

    const refSessao = ref();

    function carregaAtivarAnimacao() {
        nextTick(() => {
            refSessao.value?.ativarAnimacao();
        })
    }
</script>

<script>
    export default {
        directives: {
            scrollAnim
        }
    }
</script>

<style scoped>

    @media (max-width: 768px) {
        section {
            padding-left: 5vh;
            padding-right: 5vh;
        }
    }

</style>