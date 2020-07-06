<template>
  <div class="home">
    <p>{{ count | toFixed3}}</p>
    <ul>
      <li v-for="item in arr">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { isNull, tonum } from '@utils/utils';

// import { ref, reactive,onMounted } from '@vue/composition-api';

import {getList,login} from '@api/home';
export default {
  setup() {
    const count = ref(0); //count初始值为0，会相应变化
    count.value = 3.8888889; //设置count值为10，使用.value形式

    const arr = reactive([
      {
        name: 'aaa'
      },
      {
        name: 'bbb'
      }
    ]);

    onMounted(()=>{
      let data={
        "enterId":"81132",
      }
      getList(data).then(res => {
        console.log(res);
      })

      let datas = new FormData();
      datas.append('personName', 'test');
      datas.append('passWord', '123456');

      // let datas={
      //   "personName":"test",
      //   "passWord":"123456",
      // }
      login(datas).then(res => {
        console.log(res);
      })
    })

    return {
      count, //必须将count return 回去
      arr
    };
  }
};
</script>
<style lang="scss">

</style>
