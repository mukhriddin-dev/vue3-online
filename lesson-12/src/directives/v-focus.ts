import { type Directive } from 'vue';

export const focusElement: Directive = {

    mounted(el: HTMLElement, bind: any) {
        el.focus();
    },
}