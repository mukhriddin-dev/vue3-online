import { type Directive } from 'vue';

export const toggleElement: Directive = {

    mounted(el: HTMLElement, bind: any) {
        if (bind.value) {
            el.style.display = 'block';
        }
    },

    updated(el: HTMLElement, bind: any) {
        if (bind.value) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }
}