<template>
  <div class="module">
    <b-container class="bv-example-row">
      <b-row class="grid">
        <b-col lg="4" md="6" sm="12" class="grid-item">
          <my-process></my-process>
        </b-col>
        <b-col lg="4" md="6" sm="12" class="grid-item">
          <my-chart></my-chart>
        </b-col>
      </b-row>
    </b-container>
    <my-overlay></my-overlay>
  </div>
</template>

<script>
  import moduleProgress from "../progress/progress";
  import chart from "../chart/chart";
  import $ from "jquery";
  import Packery from "packery";
  import Draggabilly from "draggabilly";
  import overlay from "../overLay/overlay.vue"
  export default {
    data() {
      return {};
    },
    components: {
      "my-process": moduleProgress,
      "my-chart": chart,
      "my-overlay": overlay
    },
    mounted() {
      var elem = document.querySelector(".grid");
      var pckry = new Packery(elem, {
        // options
        itemSelector: ".grid-item",
        gutter: 10
      });
      var itemElems = pckry.getItemElements();
      for (var i = 0, len = itemElems.length; i < len; i++) {
        var elem = itemElems[i];
        var draggie = new Draggabilly(elem);
        pckry.bindDraggabillyEvents(draggie);
      }
      setTimeout(function() {
        pckry.layout();
      }, 100);
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .module {
    padding-top: 20px;
  }
</style>
