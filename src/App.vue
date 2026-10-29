<script setup></script>

<template>
  <v-app>
    <v-navigation-drawer location="left">
      <template #prepend></template>
      <v-list>
        <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="Profile"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" title="Settings"></v-list-item>
      </v-list>
      <template #append></template>
    </v-navigation-drawer>
    <v-navigation-drawer location="right">
      <template #prepend></template>
      <template #append></template>
    </v-navigation-drawer>
    <router-view></router-view>
  </v-app>
</template>

<style scoped></style>
