

import { type Directive } from 'vue';

export const bgColor: Directive = {

    mounted(el: HTMLElement, bind: any) {
        el.style.backgroundColor = bind.value;
    },
}