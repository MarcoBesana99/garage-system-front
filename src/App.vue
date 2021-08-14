<template>
  <nav>
    <router-link class="mr-3" to="/">Home</router-link>
    <router-link class="mr-3" to="/login">Login</router-link>
    <router-link class="mr-3" to="/register">Register</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
  </nav>
  <router-view/>
</template>
