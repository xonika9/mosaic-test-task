export default {
  name: 'CustomInput',
  data() {
    return {
      inputValue: '',
      inputFocus: false,
      isLoading: false,
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
  watch: {
    inputValue(newValue) {
      this.isLoading = newValue.length > 0;
    },
  },
};
