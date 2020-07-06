<template>
  <div class="login">
    <div class="form">
      <van-form @submit="onSubmit">
        <van-field v-model="ruleForm.username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="ruleForm.password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
        <div class="submitBtn"><van-button round block type="info" native-type="submit">提交</van-button></div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { Form, Field, Button } from 'vant';
import { mapMutations } from 'vuex';
export default {
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },

  data() {
    return {
      ruleForm: {
        username: 'admin',
        password: '123456'
      }
    };
  },
  methods: {
    ...mapMutations(['setuser']),
    onSubmit(values) {
      console.log(values);
      this.setuser(this.ruleForm);
      this.$router.push('/');
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login-top-bg.png), url(../assets/img/login-bottom-bg.png);
  background-repeat: no-repeat, no-repeat;
  background-position: center top, center bottom;
  background-size: 100% auto, 100% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 15px #ccc;
    border-radius: 10px;
    padding: 10px;
    .van-cell{
      line-height: 35px;
    }
    .submitBtn{
      margin-top: 10px;
    }
  }
}
</style>
