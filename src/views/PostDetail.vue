<script setup lang="ts">
import { ref } from 'vue'

const postData = ref({
  id: 1,
  postTitle: 'Title',
  postContents: '내용',
  postWriter: {
    id: 1,
    userName: 'cl0ud_',
    userImg: '/src/assets/img/2023071701753_0.jpg'
  },
  postDate: '2023년 08월 01일',
  comments: [
    {
      id: 1,
      userInfo: {
        userName: 'cl0ud_',
        userImg: '/src/assets/img/2023071701753_0.jpg'
      },
      contents: '잘 읽었습니다~',
      date: '2023년 08월 01일'
    },
    {
      id: 2,
      userInfo: {
        userName: 'common',
        userImg: '/src/assets/img/2023071701753_0.jpg'
      },
      contents: '감사합니다',
      date: '2023년 08월 01일'
    }
  ]
})
</script>

<template>
  <div class="main-container">
    <div class="post-wrapper">
      <div class="post-header">
        <div class="post-title">{{ postData.postTitle }}</div>
        <div class="post-info">
          <div class="post-writer">{{ postData.postWriter.userName }}</div>
          <div class="separator">·</div>
          <div class="post-date">{{ postData.postDate }}</div>
        </div>
        <div class="post-option">
          <div class="post-amend"></div>
          <div class="post-delete"></div>
        </div>
      </div>
      <div class="post-contents">
        {{ postData.postContents }}
      </div>
      <div class="post-writer-profile">
        <div class="profile-img">
          <img :src="postData.postWriter.userImg" alt="" />
        </div>
        <div class="post-writer-info">
          <div class="post-writer-name">{{ postData.postWriter.userName }}</div>
          <div class="post-writer-description"></div>
        </div>
      </div>
      <div class="contour" />

      <div class="post-comments-container">
        <div class="post-comments-count">
          {{ postData.comments.length }}개의 댓글
        </div>
        <div class="post-comments-write">
          <textarea placeholder="댓글을 작성하세요" />
          <div class="btn-wrapper">
            <button class="btn-submit">댓글 작성</button>
          </div>
        </div>
        <div class="post-comments" v-for="item in postData.comments">
          <div class="comments-top">
            <div class="comments-left">
              <div class="profile-img">
                <img :src="item.userInfo.userImg" alt="" />
              </div>
              <div class="comments-user-info">
                <div class="comments-username">
                  {{ item.userInfo.userName }}
                </div>
                <div class="comments-time">{{ item.date }}</div>
              </div>
            </div>
            <div class="comments-right">
              <div class="comments-option">
                <div class="comments-amend">수정</div>
                <div class="comments-delete">삭제</div>
              </div>
            </div>
          </div>
          <div class="comments-bottom">
            <div class="comments-contents">{{ item.contents }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/View/PostDetail.scss';
</style>
