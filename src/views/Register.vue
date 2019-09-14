<template>
  <div>
    <img
      class="header-img"
      src="https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/video/1901/webpack/webpack.png"
      alt
    >
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              required: true
            },
            // validating when blur
            trigger: "blur"
          },
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
              type: "password",
              eye: {
                open: false
              }
            },
            rules: {
              required: true,
              min: 3,
              max: 15
            },
            messages: {
              min: "太短了"
            },
            // validating when blur
            trigger: "blur"
          },
          {
            type: "submit",
            label: "注册"
          },
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
      this.$http.get("/api/register", { params: this.model }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.header-img {
  height: 175 px;
  width: 100%;
}
</style>
