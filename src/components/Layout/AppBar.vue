<script setup lang="ts"></script>

<template>
  <v-app-bar flat>
    <v-container class="d-flex align-center mx-auto justify-center">
      <v-avatar
        class="me-4"
        color="grey-darken-1"
        size="32"
      />

      <!-- <v-btn
        v-for="link in links"
        :key="link"
        :text="link"
        variant="text"
      /> -->

      <v-spacer />

      <v-responsive max-width="160">
        <v-text-field
          density="compact"
          label="Search"
          rounded="lg"
          variant="solo-filled"
          flat
          hide-details
          single-line
        />
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>
