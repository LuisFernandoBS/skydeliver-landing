<template>
    <div>
        <label :for="id" class="relative">
            <input
            :type="type"
            :id="id"
            placeholder=""
            class="peer mt-0.5 w-full rounded py-4 text-texto border-gray-300 bg-fundo shadow-sm sm:text-sm dark:border-gray-600"
            />
            <span
            class="absolute inset-y-0 start-3 -translate-y-2 bg-fundo px-0.5 text-sm font-medium text-texto transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
            >
            {{ label }}
            </span>
        </label>
    </div>
</template>
<script>
export default {
     props: {
        type: String,
        id: String,
        label: String,
    }
}
</script>
<style>
    
</style>