<template>
  <div id="app"><router-view /></div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    // autoLogin() {
    //   console.log(this.user);
    //   if (this.user == null) {
    //     this.$router.push('/Login');
    //   }
    // }
  },
  mounted() {
    // this.autoLogin();
  }
};
</script>
<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
