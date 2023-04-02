<template>
  <div class="input__container">
    <p class="input__header">Текст перед полем ввода</p>

    <label
      :class="[
        'input__label',
        { 'input__label--focused': inputFocus || inputValue.length > 0 },
      ]"
      >Название поля</label
    >
    <textarea
      class="input__text"
      v-model="inputValue"
      @focus="inputFocus = true"
      @blur="inputFocus = false"
      :class="{ 'input__text--error': error }"
    ></textarea>
    <p v-if="error" class="input__error">Ошибка</p>
    <p class="input__counter">{{ inputValue.length }}/1000</p>
    <button class="input__button_type_clear" @click="clearInput">
      Очистить
    </button>
  </div>
</template>

<style scoped>
.input__container {
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;
  margin: auto;
  width: 326px;
}

.input__label {
  position: absolute;
  top: 34px;
  left: 12px;
  color: #303030;
  color: #878f97;
  font-size: 14px;
  transition: top 0.5s, font-size 0.5s;
}

.input__label--focused {
  font-size: 11px;
  line-height: 12px;
}

.input__header {
  color: #303030;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
}

.input__text {
  box-sizing: border-box;
  padding: 20px 4px 4px 12px;
  width: 100%;
  height: 146px;
  outline: none;
  border: none;
  border-radius: 8px;
  background: #f0f0f0;
  color: #4f4f4f;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  font-family: "Roboto";
  line-height: 22px;
}

.input__text--error {
  border: 1px solid #d6675c;
}
.input__error {
  color: #d6675c;
}
.input__counter {
  color: #878f97;
  font-size: 14px;
  line-height: 20px;
}

.input__button_type_clear {
  padding: 0;
  border: 0;
  background: none;
  color: #00b6d0;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
}

</style>

<script>
export default {
  name: 'CustomInput',
  data() {
    return {
      inputValue: '',
      inputFocus: false,
    };
  },
  computed: {
    error() {
      return this.inputValue.length >= 1000;
    },
  },
  methods: {
    clearInput() {
      this.inputValue = '';
    },
  },
};
</script>
