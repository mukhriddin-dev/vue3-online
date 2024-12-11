import { type Directive } from 'vue';

export const hideElement: Directive = {

    mounted(el: HTMLElement, bind: any) {
        el.style.display = 'none';
    },
}