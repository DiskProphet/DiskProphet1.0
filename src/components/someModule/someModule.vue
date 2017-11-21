<template>
  <div class="module">
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col cols="4" class="padding">
          <my-envioroment></my-envioroment>
        </b-col>
        <b-col cols="8" class="padding">
          <my-process></my-process>
        </b-col>
      </b-row>
      <b-row class="text-center">
        <b-col cols="4">
          <b-row class="text-center">
            <b-col cols="12" class="padding">
              <my-chart></my-chart>
            </b-col>
            <b-col cols="12" class="padding">
              <my-totalvolume></my-totalvolume>
            </b-col>
            <b-col cols="12" class="padding">
              <b-row class="text-center">
                <b-col cols="6" class="padding">
                  <my-ssd></my-ssd>
                </b-col>
                <b-col cols="6" class="padding">
                  <my-hdd></my-hdd>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="4" class="padding">
          <my-dependenttab></my-dependenttab>
        </b-col>
        <b-col cols="4">
          <b-row class="text-center">
            <b-col cols="12" class="padding">
              <my-highrisk></my-highrisk>
            </b-col>
            <b-col cols="12" class="padding">
              <my-mediumrisk></my-mediumrisk>
            </b-col>
            <b-col cols="12" class="padding">
              <my-lowrisk></my-lowrisk>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <my-overlay></my-overlay>
    {{DiskProphetOverviewTable}} ======================== {{HostSummaryUptimeWeek}} ============================ {{SystemCpu}}===================={{SystemMemoryUsage}}
  </div>
</template>

<script>
  import moduleProgress from "../progress/progress";
  import chart from "../chart/chart";
  import $ from "jquery";
  import Packery from "packery";
  import overlay from "../overLay/overlay.vue"
  import dependenttab from "../dependenttab/dependenttab.vue";
  import envioroment from "../envioroment/envioroment.vue";
  import havecheck from "../havecheck/havecheck.vue";
  import totalvolume from "../totalvolume/totalvolume.vue";
  import SSD from "../SSD/SSD.vue";
  import HDD from "../HDD/HDD.vue";
  import HighRisk from "../HighRisk/HighRisk.vue";
  import MediumRisk from "../MediumRisk/MediumRisk.vue"
  import LowRisk from "../LowRisk/LowRisk.vue"
  export default {
    data() {
      return {};
    },
    components: {
      "my-process": moduleProgress,
      "my-chart": chart,
      "my-overlay": overlay,
      "my-dependenttab": dependenttab,
      "my-envioroment": envioroment,
      "my-havecheck": havecheck,
      "my-totalvolume": totalvolume,
      "my-ssd": SSD,
      "my-hdd": HDD,
      "my-highrisk": HighRisk,
      "my-mediumrisk": MediumRisk,
      "my-lowrisk": LowRisk
    },
    mounted() {
      // var elem = document.querySelector(".grid");
      // var pckry = new Packery(elem, {
      //   // options
      //   itemSelector: ".grid-item",
      //   gutter: 10
      // });
      // var itemElems = pckry.getItemElements();
      // for (var i = 0, len = itemElems.length; i < len; i++) {
      //   var elem = itemElems[i];
      //   var draggie = new Draggabilly(elem);
      //   pckry.bindDraggabillyEvents(draggie);
      // }
      // setTimeout(function() {
      //   pckry.layout();
      // }, 100);
    },
    props: {
      DiskProphetOverviewTable: {
        type: Object
      },
      HostSummaryUptimeWeek: {
        type: Object
      },
      SystemCpu: {
        type: Object
      },
      SystemMemoryUsage: {
        type: Object
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .module {
    padding-top: 20px;
  }
  @media (min-width: 1200px) {
    .module .container {
      max-width: 1300px !important;
    }
  }
  .padding {
    padding: 10px;
  }
  .padding .card-body {
    height: 155px !important;
  }
</style>
