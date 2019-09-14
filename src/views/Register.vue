<template>
  <div>
    <cube-form
      :model="model"
      :schema="schema"
      @submit="submitHandler"
    ></cube-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
          username: '',
          password: '',
      },
      schema: {
        groups: [
          {
            legend: "基础",
            fields: [
              {
                type: 'input',
                modelKey: 'username',
                label: '用户名',
                props: {
                  placeholder: '请输入用户名'
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'input',
                modelKey: 'password',
                label: '密码',
                props: {
                  placeholder: '请输入密码',
                  type: 'password',
                  eye: {
                      open: false
                  }
                },
                rules: {
                  required: true,
                  min: 3,
                  max: 5,
                },
                messages: {
                    min: '太短了'
                },
                // validating when blur
                trigger: 'blur'
              },
            ]
          },
          {
            fields: [
              {
                type: "submit",
                label: "Submit"
              },
              {
                type: "reset",
                label: "Reset"
              }
            ]
          }
        ]
      },
      options: {
        scrollToInvalidField: true,
        layout: "standard" // classic fresh
      }
    };
  },
  methods: {
      submitHandler(e) {
          e.preventDefault(e);
          this.$http.get('/api/register', {params: this.model})
            .then(res => {
                console.log(res);
            })
      }
  }
};
</script>

<style>
</style>
