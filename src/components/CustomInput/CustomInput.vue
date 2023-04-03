<template>
  <div class="input__container">
    <p class="input__header">Текст перед полем ввода</p>
    <label
      :class="[
        'input__label',
        { input__label_focused: inputFocus || inputValue.length > 0 },
      ]"
      >Название поля</label
    >
    <img
      v-if="isLoading"
      class="input__loading"
      src="../../assets/loading.svg"
      alt="loading"
    />
    <textarea
      class="input__text"
      v-model="inputValue"
      @focus="inputFocus = true"
      @blur="inputFocus = false"
      :class="{ input__text_error: error }"
    ></textarea>
    <p v-if="error" class="input__error">Ошибка</p>
    <p class="input__counter">{{ inputValue.length }}/1000</p>
    <button class="input__button_type_clear" @click="clearInput">
      Очистить
    </button>
  </div>
</template>

<script src="./CustomInput.js"></script>
<style src="./CustomInput.css" scoped></style>
