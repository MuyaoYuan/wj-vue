<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="font-weight: bold;font-size: 20px">最近更新</span>
      <!--<el-button style="float: right; padding: 3px 0" type="text">修改</el-button>-->
    </div>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="1/25/22" placement="top">
          <el-card>
            <h4>核心功能的前端实现</h4>
            <p>yuanmuyao 1/25/22, 5:23 AM</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="1/23/22" placement="top">
          <el-card>
            <h4>图书管理页面demo实现</h4>
            <p>yuanmuyao 1/23/22, 4:10 AM</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="12/27/21" placement="top">
          <el-card>
            <h4>导航栏的实现</h4>
            <p> yuanmuyao 12/27/21, 11:48 PM</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="12/27/21" placement="top">
          <el-card>
            <h4>引入Vuex与前端登录拦截器</h4>
            <p>yuanmuyao 12/27/21, 11:33 PM</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="12/26/21" placement="top">
          <el-card>
            <h4>使用Element辅助前端开发</h4>
            <p>yuanmuyao 12/26/21, 6:06 AM</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'UpdateCard'
}
</script>

<style scoped>
  .box-card {
    margin-top: 5px;
    width: 988px;
    height: 1050px;
    text-align: left;
  }
</style>
