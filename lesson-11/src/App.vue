<template>
  <n-config-provider :theme-overrides="themeOverrides">

    <n-space>
      <n-button type="primary" circle>click 1</n-button>

      <n-button type="error" size="tiny">

        <template #icon>
          <CursorClick20Regular />
        </template>

        <span>
          click
        </span>
      </n-button>

      <h1>{{ str }}</h1>

      <n-input v-model:value="str" placeholder="enter your name" />

      <!-- <input type="text" placeholder="enter your namer" v-model="str"> -->


      <n-button type=" error">click</n-button>
      <n-button type="success">click</n-button>
      <n-button type="warning">click</n-button>
      <n-button type="info">click</n-button>
      <n-button type="default" :bordered="true">click</n-button>
      <n-button type="text">click</n-button>
    </n-space>

  </n-config-provider>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CursorClick20Regular } from '@vicons/fluent';
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'


const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#FFFFFF',
    secondaryColor: '#000000',
    tertiaryColor: '#FF0000',
    successColor: '#00FF00',
    warningColor: '#FFFF00',
    dangerColor: '#FF0000',
  },
  Button: {
    textColor: '#000000',
    backgroundColor: '#FF0000',
    borderColor: '#FF0000',
    hoverBackgroundColor: '#FF0000',
    hoverBorderColor: '#FF0000'
  },
  Input: {
    textColor: '#FF0000'
  },
  Card: {
    textColor: '#FF0000'
  }

}






const str = ref<string>("Hello");

const handleChange = (s: string) => {
  str.value = s
};

</script>

<style scoped></style>