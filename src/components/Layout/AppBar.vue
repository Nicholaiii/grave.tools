<script setup lang="ts">
const { t } = useI18n()

const build = import.meta.env.VITE_BUILD_VERSION
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
    <v-container class="d-flex align  -center justify-left">
      <v-responsive v-if="build" class="text-disabled">
        <v-btn prepend-icon="mdi-git" href="https://github.com/Nicholaiii/grave.tools" target="_blank">
          {{ build }}
        </v-btn>
      </v-responsive>
      <v-spacer />

      <v-responsive max-width="160">
        <v-btn prepend-icon="mdi-cog">
          {{ t('button.settings') }}
        </v-btn>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>
