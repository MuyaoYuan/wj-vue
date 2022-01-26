<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <!--在 LibraryIndex 组件的方法里，我们需要获取 SideMenu组件的 data，如何实现？
      可以看出， SideMenu 组件在 LibraryIndex 组件中作为一个子组件存在，
      是 LibraryIndex 组件的一部分。在它的标签中，我们用 ref 属性设置了一个引用名。-->
      <!--这样，我们就可以通过 _this.refs.sideMenu 来引用侧面导航栏的实例，并获取它的 data 了。-->
      <!--@indexSelect="listByCategory"，这个东西为 listByCategory() 方法设置了触发事件。
      大家熟悉的事件有点击、鼠标移动之类，都有固定的名称，而这个 indexSelect 是我自定义的，
      为了触发这个事件，在子组件，也即 SideMenu 里有这么个方法：
        handleSelect (key) {
        this.cid = key
        this.$emit('indexSelect')
      }-->
      <SideMenu @indexSelect="listByCategory" ref="sideMenu"></SideMenu>
    </el-aside>
    <el-main>
      <books class="books-area" ref="booksArea"></books>
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from './SideMenu'
import Books from './Books'

export default {
  name: 'AppLibrary',
  components: {Books, SideMenu},
  methods: {
    listByCategory () {
      var _this = this
      var cid = this.$refs.sideMenu.cid
      var url = 'categories/' + cid + '/books'
      this.$axios.get(url).then(resp => {
        if (resp && resp.status === 200) {
          _this.$refs.booksArea.books = resp.data
        }
      })
    }
  }
}
</script>

<style scoped>
  .books-area {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
