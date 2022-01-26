<template>
  <div style="margin-top: 40px">
    <side-menu id="side-menu"></side-menu>
    <div class="home">
      <div id="header-div">
        <div style="height: 150px"></div>
        <carousel></carousel>
        <quick-nav style="float: right;margin-top: -450px;margin-right: 480px"></quick-nav>
      </div>
      <update-card id="update-card"></update-card>
      <slogan id="slogan"></slogan>
      <about id="about"></about>
    </div>
  </div>
</template>

<script>
import Slogan from './Slogan'
import Carousel from './Carousel'
import UpdateCard from './UpdateCard'
import QuickNav from './QuickNav'
import SideMenu from './SideMenu'
import About from '../common/About'
export default {
  name: 'AppIndex',
  components: {QuickNav, UpdateCard, Carousel, Slogan, SideMenu, About}
}
</script>

<style scoped>
  .home {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -20px;
  }

  #header-div {
    padding-bottom: 20px;
    padding-left: 5px;
    background-color: white;
  }

  #side-menu {
    position: fixed;
    margin-left: 50%;
    left: -680px;
    top: 100px;
  }
</style>
