<template>
  <div class="div-toggle">
    <input type="checkbox" id="toggle" v-model="isDark" />
    <label for="toggle" class="icon"></label>
  </div>
</template>

<script setup>
    import { ref, watch } from 'vue'

    const isDark = ref(false)

    watch(isDark, (val) => {
        document.documentElement.classList.toggle('dark', val);
        localStorage.setItem('darkMode', val);
    })

    if (localStorage.getItem('darkMode') === 'true') {
        isDark.value = true
    } else {
        isDark.value = false
    }

</script>

<style>
    .div-toggle {
        --size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.5s ease-in-out 5.5s forwards;
        opacity: 0;
        visibility: hidden;
    }

    input[type='checkbox'] {
        display: none;
    }

    .icon {
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        background: hsl(240, 100%, 95%);
        box-shadow: inset calc(var(--size) * 0.3) calc(var(--size) * -0.25) 0;
        transition: all 0.4s ease;
        cursor: pointer;
        position: relative;
    }

    input[type='checkbox']:checked + .icon {
        background: var(--color-texto);
        box-shadow: inset 0 0 0 0px, 
        0 -15px 0 -7px var(--color-texto), 
        0 15px 0 -7px var(--color-texto), 
        -15px 0 0 -7px var(--color-texto), 
        15px 0px 0 -7px var(--color-texto), 
        -10px -11px 0 -7px var(--color-texto), 
        10px 11px 0 -7px var(--color-texto), 
        -10px 11px 0 -7px var(--color-texto), 
        10px -11px 0 -7px var(--color-texto);
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            visibility: visible;
            opacity: 1;
        }
    }
</style>
