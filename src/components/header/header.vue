<template>
  <div class="header">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand href="#">先智数据</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item href="#">File</b-nav-item>
          <b-nav-item href="#">Edit</b-nav-item>
          <b-nav-item href="#">View</b-nav-item>
          <b-nav-item href="#">Help</b-nav-item>
        </b-nav>
        <!-- Right aligned nav items -->
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>Admin</em>
            </template>
            <b-dropdown-item href="#">注销</b-dropdown-item>
            <b-dropdown-item href="#">退出</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
