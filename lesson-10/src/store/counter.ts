import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore('counter', () => {

    const count = ref<number>(0)
    const name = ref<string>('Eduardo')

    const doubleCount = computed(() => count.value * 2)

    function increment() {
        console.log("first")
        count.value++
    }

    return { count , name , doubleCount, increment }
})