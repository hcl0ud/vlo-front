<script setup lang="ts"></script>

<template>
  <div class="main-container">
    <div class="profile-container">
      <div class="profile-img">
        <img src="@/assets/img/2023071701753_0.jpg" alt="profileImg" />
      </div>
      <div class="profile-box">
        <div class="nickname">cl0ud_</div>
        <div class="intro">
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
        </div>
      </div>
    </div>
    <div class="post-container">
      <div class="post-box" v-for="i in 5">
        <div class="post-preview-img">
          <img
            src="@/assets/img/E64AD629-05F6-4E88-8A2C-5A37046CD571_1_105_c.jpeg"
            alt=""
          />
        </div>
        <div class="post-title">글 제목</div>
        <div class="post-contents">
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </div>
        <div class="post-info">
          <div class="post-time">2023.08.15</div>
          <div class="post-comments">댓글 5개</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/View/Mypage.scss';
</style>
