<template>
  <div class="Progress">
    <b-card-group deck>
      <b-card header="磁盘状况" header-tag="header" title="" class="mouseChange" no-body>
        <b-card-body v-b-modal.modallg variant="primary">
          <b-progress class="mt-1" :max="max" show-value>
            <b-progress-bar :value="counter*(6/10)" variant="success"></b-progress-bar>
            <b-progress-bar :value="counter*(2.5/10)" variant="warning"></b-progress-bar>
            <b-progress-bar :value="counter*(1.5/10)" variant="danger"></b-progress-bar>
          </b-progress>
        </b-card-body>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 100,
        max: 100,
        curIndex: 0
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .mouseChange header {
    cursor: move;
  }
  .mouseChange .card-body {
    cursor: pointer;
  }
  .xlg .modal-dialog {
    width: 80% !important;
    max-width: 80% !important;
  }
</style>
