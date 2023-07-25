<script setup lang="ts">
import Home from '../views/HomeView.vue'
</script>

<template>
  <div class="main-container">
    <div class="top-container">
      <router-link :to="Home">
        <svg
          width="32"
          height="29"
          viewBox="0 0 32 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 10.1667L16 1L31 10.1667"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.6666 16V26.6667C27.6666 27.219 27.219 27.6667 26.6666 27.6667H5.33331C4.78103 27.6667 4.33331 27.219 4.33331 26.6667V16"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
      <router-link :to="Home">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2441 1.20085H4.31102C2.48239 1.20085 1 2.68325 1 4.51187V27.689C1 29.5177 2.48239 31 4.31102 31H27.4882C29.3168 31 30.7992 29.5177 30.7992 27.689V17.756"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.7608 15.2727L25.0049 2.02861C26.3763 0.657131 28.6 0.657131 29.9714 2.02861C31.3429 3.40008 31.3429 5.62366 29.9714 6.99514L16.7274 20.2392L9.27756 22.7225L11.7608 15.2727Z"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
      <router-link :to="Home">
        <svg
          width="32"
          height="36"
          viewBox="0 0 32 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 16C20.1421 16 23.5 12.6421 23.5 8.5C23.5 4.35786 20.1421 1 16 1C11.8579 1 8.5 4.35786 8.5 8.5C8.5 12.6421 11.8579 16 16 16Z"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 34.75V27.25C1 25.1789 2.67893 23.5 4.75 23.5H27.25C29.3211 23.5 31 25.1789 31 27.25V34.75"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
    <div class="bot-container">
      <router-link :to="Home">
        <svg
          width="32"
          height="38"
          viewBox="0 0 32 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5674 33.2922C20.0826 35.5193 18.2268 36.6328 15.9997 36.6328C13.7727 36.6328 11.9168 35.5193 10.4321 33.2922M27.3232 29.9517H4.67622C2.6459 29.9517 0.999999 28.3058 0.999999 26.2754C0.999999 25.6091 1.18108 24.9554 1.52389 24.384C3.70979 20.7409 4.86446 16.5721 4.86446 12.3235V9.9082C4.86446 4.98833 8.8528 0.999992 13.7727 0.999992H18.2268C23.1466 0.999992 27.135 4.98833 27.135 9.9082V12.3235C27.135 16.5721 28.2897 20.7409 30.4756 24.384C31.5201 26.125 30.9556 28.3832 29.2146 29.4278C28.6433 29.7706 27.9895 29.9517 27.3232 29.9517Z"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
      <router-link :to="Home">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.125 31H4.75C3.75544 31 2.80161 30.6049 2.09835 29.9016C1.39509 29.1984 1 28.2446 1 27.25V4.75C1 3.75544 1.39509 2.80161 2.09835 2.09835C2.80161 1.39509 3.75544 1 4.75 1H14.125M12.25 16L19.75 8.5M12.25 16L19.75 23.5M12.25 16H31"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  padding: 4rem 0 2.5rem;
  width: 4rem;
  height: 100vh;
  line-height: 50px;
  font-weight: 500;
  background-color: #e7e7e7;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
}
.top-container,
.bot-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin: 0.5rem auto;
  }
}
</style>
