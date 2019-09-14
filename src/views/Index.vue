<template>
  <div>
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item
        v-for="(item, index) in items"
        :key="index"
        @click.native="clickHandler(item, index)"
      >
        <a :href="item.url">
          <img class="banner-img" :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    changePage(current) {
      console.log("当前轮播图序号为:" + current);
    },
    clickHandler(item, index) {
      console.log(item, index);
    }
  },
  async created() {
    try {
      const result = await this.$http.get("/api/banner");
      console.log(result)
      if(result.code == 0) {
          this.items = result.items
      } else {
          console.log('请求失败')
      }
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style lang="stylus" scoped>
    .banner-img
        width 100%
        height 175px
</style>
