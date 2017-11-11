<template>
  <div class="Progress_right">
      <b-table striped :items="information" :fields="fields">
    </b-table>
  </div>
</template>

<script>
  import _ from "lodash";
  export default {
    data() {
      return {
        fields: ['name', 'type', 'isActive', 'product'],
        fields: [{
            key: 'name',
            sortable: true
          },
          {
            key: 'type',
            sortable: false
          },
          {
            key: 'isActive',
            sortable: true,
          },
          {
            key: 'product',
            sortable: true,
          }
        ],
        information: []
      };
    },
    created() {
      this.$bus.$on('overview_tab_message', this.onReceive);
    },
    methods: {
      onReceive(content) {
        // this.information.push(_.merge(content))
        // //_.map(_.toPairs(content), d => _.fromPairs([d]));
        this.information = content
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
