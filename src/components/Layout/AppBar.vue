<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon />
    <v-avatar
      class="ms-2"
      variant="flat"
      image="favicon.svg"
    />
    <v-app-bar-title>Grave Tools</v-app-bar-title>
    <v-container class="d-flex align-center justify-left">
      <v-spacer />

      <v-responsive max-width="160">
        <v-btn prepend-icon="mdi-cog">
          {{ t('button.settings') }}
        </v-btn>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>
