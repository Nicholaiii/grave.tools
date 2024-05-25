<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'grave.tools',
  meta: [
    {
      name: 'description',
      content: 'Frostgrave wizard and warband builder, create your team interactively.',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon-dark.svg',
    },
  ],
})

const errorStore = useErrorStore()
</script>

<template>
  <v-app>
    <AppSnackBar
      :text="errorStore.snackBar" @clear="errorStore.clearSnackbar"
    />
    <RouterView />
  </v-app>
</template>
