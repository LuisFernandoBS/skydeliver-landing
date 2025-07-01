<template>
  <div class="min-h-screen min-w-screen flex flex-col bg-fundo dark:bg-fundo-dark">

    <header class="grid grid-cols-1 md:grid-cols-10 shadow-md">
        <div class="col-span-1 col-start-1 md:col-span-6 md:col-start-3">
            <nav class="grid grid-cols-1 md:grid-cols-6 items-center gap-4 py-7">
                <div class="col-span-1 col-start-1">
                    <h1 class="text-xl font-montserrat-bold text-primaria dark:text-primaria-dark">SkyDeliver</h1>
                </div>
                <div class="col-span-1 col-start-1 md:col-start-4 text-center">
                    <a class="cursor-pointer text-xl font-montserrat text-primaria dark:text-primaria-dark hover:font-montserrat-bold">Início</a>
                </div>
                <div class="col-span-1 text-center">
                    <a class="cursor-pointer text-xl font-montserrat text-primaria dark:text-primaria-dark hover:font-montserrat-bold">Planos e Preços</a>
                </div>
                <div class="col-span-1 text-center">
                    <a class="cursor-pointer text-xl font-montserrat text-primaria dark:text-primaria-dark hover:font-montserrat-bold">Contato</a>
                </div>
            </nav>
        </div>
    </header>

    <main class="flex-1 px-6 py-10 bg-transparent dark:bg-transparent">
      <router-view />
    </main>

    <footer class="bg-white text-center text-sm text-gray-500 py-4 border-t">
      &copy; {{ new Date().getFullYear() }} SkyDeliver. Todos os direitos reservados.
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
</style>
