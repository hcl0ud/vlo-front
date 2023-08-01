<script setup lang="ts"></script>

<template>
  <div class="main-container">
    <div class="title">Login</div>
    <div class="input-box">
      <input type="text" required />
      <label>ID</label>
      <span />
    </div>
    <div class="input-box">
      <input type="text" required />
      <label>PW</label>
      <span />
    </div>
    <a class="register">register</a>
    <div class="submit">
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
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/_constants.scss';
.main-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 2rem;

  .title {
    font-size: 3rem;
  }

  .input-box {
    position: relative;
    box-sizing: border-box;
  }
  input {
    font-size: 16px;
    color: #222222;
    width: 15rem;
    height: 3rem;
    border: none;
    border-bottom: solid #aaaaaa 1px;
    position: relative;
    background: none;
    z-index: 5;
    &::placeholder {
      color: #aaaaaa;
    }
    &:focus {
      outline: none;
    }
  }
  input:focus ~ label,
  input:valid ~ label {
    font-size: 16px;
    bottom: 40px;
    color: #666;
    font-weight: bold;
  }

  input:focus ~ span,
  input:valid ~ span {
    width: 100%;
  }
  span {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #666;
    width: 0;
    height: 2px;
    border-radius: 2px;
    transition: 0.5s;
  }
  label {
    position: absolute;
    color: #aaa;
    left: 10px;
    font-size: 20px;
    bottom: 8px;
    transition: all 0.2s;
  }

  .register {
    font-size: 20px;
    cursor: pointer;
    &:hover {
      opacity: 30%;
    }
    &:active {
      opacity: 100%;
    }
  }
  .submit {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: $d1;
    width: 3.5rem;
    height: 3.5rem;
    cursor: pointer;
    &:hover {
      background-color: $d2;
    }
    &:active {
      background-color: $d3;
    }
  }
}
</style>
