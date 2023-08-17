<script setup lang="ts"></script>

<template>
  <div class="main-container">
    <div class="title">Login</div>
    <div class="input-box">
      <input type="text" required />
      <label>Email</label>
      <span />
    </div>
    <div class="input-box">
      <input type="password" required />
      <label>Password</label>
      <span />
    </div>
    <router-link class="register" to="/Register">register</router-link>
    <router-link class="clickEventGrey submit" to="/">
      <svg
        width="17"
        height="32"
        viewBox="0 0 17 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L16 16L1 31"
          stroke="#777777"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/View/Login.scss';
</style>
