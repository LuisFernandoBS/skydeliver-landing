<template>
  <div role="alert" class="rounded-md border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800 p-4 shadow-sm">
    <div class="flex items-start gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 text-green-600"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
  
      <div class="flex-1">
        <strong class="font-medium text-texto font-montserrat-bold"> {{ msg }} </strong>

      </div>
  
      <button
        class="-m-3 cursor-pointer rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-500 hover:text-gray-700"
        type="button"
        aria-label="Dismiss alert"
        @click="fechar"
      >
        <span class="sr-only">Dismiss popup</span>
  
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        msg: {
            type: String,
            default: ''
        },
        fechar:{
            type: Function,
            default: () => {}
        }
    }
}
</script>
<style>
    
</style>