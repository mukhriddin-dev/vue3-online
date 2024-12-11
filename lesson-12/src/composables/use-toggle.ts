import { ref } from "vue";
export function useToggle() {

    const isToggle = ref<boolean>(true);

    function toggle() {
        isToggle.value = !isToggle.value;
    }

    return {
        isToggle,
        toggle,
    }

}





