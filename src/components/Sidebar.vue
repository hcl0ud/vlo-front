<script setup lang="ts">
import { ref, watch } from 'vue'
import router from '@/router'
import AlramModal from '@/components/AlramBox.vue'

const showAlram = ref(false)
watch(
  () => router.currentRoute.value.fullPath,
  () => {
    showAlram.value = false
  }
)
</script>

<template>
  <div class="main-container">
    <div class="top-container">
      <router-link class="clickEventGrey action" to="/">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8.33333L13 1L25 8.33333"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.3333 13V21.5333C22.3333 21.9752 21.9752 22.3333 21.5333 22.3333H4.46666C4.02483 22.3333 3.66666 21.9752 3.66666 21.5333V13"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
      <router-link class="clickEventGrey action" to="/write">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1538 1.15398H3.53845C2.1365 1.15398 1 2.29048 1 3.69243V21.4616C1 22.8636 2.1365 24 3.53845 24H21.3076C22.7096 24 23.846 22.8636 23.846 21.4616V13.8462"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.24997 11.9424L19.4038 1.7886C20.4552 0.737134 22.16 0.737134 23.2114 1.7886C24.2629 2.84006 24.2629 4.54481 23.2114 5.59627L13.0576 15.7501L7.34613 17.6539L9.24997 11.9424Z"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
      <router-link class="clickEventGrey action" to="/mypage">
        <svg
          width="26"
          height="29"
          viewBox="0 0 26 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 13C16.3137 13 19 10.3137 19 7C19 3.68629 16.3137 1 13 1C9.68629 1 7 3.68629 7 7C7 10.3137 9.68629 13 13 13Z"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 28V22C1 20.3431 2.34314 19 4 19H22C23.6569 19 25 20.3431 25 22V28"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
    <div class="bot-container">
      <p
        :class="showAlram ? `clickEventGrey` : `clickEventGrey action`"
        @click="showAlram = !showAlram"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7683 25.7574C15.63 27.4648 14.2072 28.3185 12.4998 28.3185C10.7924 28.3185 9.36954 27.4648 8.23127 25.7574M21.1811 23.1963H3.81844C2.26186 23.1963 0.999999 21.9345 0.999999 20.3779C0.999999 19.8671 1.13883 19.3658 1.40165 18.9278C3.0775 16.1347 3.96276 12.9387 3.96276 9.68139V7.82967C3.96276 4.05777 7.02048 1.00005 10.7924 1.00005H14.2072C17.9791 1.00005 21.0368 4.05777 21.0368 7.82967V9.68139C21.0368 12.9387 21.9221 16.1347 23.5979 18.9278C24.3988 20.2626 23.966 21.9938 22.6312 22.7947C22.1932 23.0575 21.692 23.1963 21.1811 23.1963Z"
            stroke="#777777"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <alram-modal class="alram-container" v-if="showAlram" key="1" />
      </p>
      <router-link class="clickEventGrey action" to="/login">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 25H4C3.20435 25 2.44129 24.6839 1.87868 24.1213C1.31607 23.5587 1 22.7956 1 22V4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H11.5M10 13L16 7M10 13L16 19M10 13H25"
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
@import '@/assets/Components/Sidebar.scss';
</style>
