<script setup>
</script>

<template>
  <v-app>
    <v-app-bar >
      <v-app-bar-title>My Blog</v-app-bar-title>
      <template v-slot:append>
        <v-btn to="/">Home</v-btn>
        <v-btn to="/blog">Blog</v-btn>
        <v-btn to="/about">About</v-btn>
        <v-btn icon="fa-solid fa-magnifying-glass"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<style></style>