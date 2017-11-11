<template>
  <div>
    <div class="Progress_left item" style="text-align: left;" @mousemove="mouseMoveHandle" @mousedown="mousedownHandle" @mouseup="mouseupHandle">
      <span 
      v-for="(item, index) in small_col" 
      v-bind:key="item.name" 
      class="small_item" 
      :index="index" 
      v-bind:class="[map[item.type],
      curHoverClass.indexOf(map[item.type]) > 0  ? 'active': '',
      item.isSelected === 'selected' ? 'select' : '']" 
      v-bind:title="content">&nbsp; 
      </span>
    </div>
  </div>
</template>

<script>
  import _ from "lodash";
  export default {
    data() {
      return {
        map: {
          'error': 'small_error',
          'success': 'small_success',
          'warn': 'small_warn',
          'OK': 'OK'
        },
        itemSelectType: 0, // 0代表什么都不做， 1 代表开始选中， 2 代表开始取消
        small_col: [],
        selectedSmallCol: [],
        content: '',
        curHoverClass: '',
        move: false
      };
    },
    created() {
      let data = _.groupBy([{
          name: 'success18',
          type: 'success',
          isActive: true,
          product: '三星',
        },
        {
          name: 'success19',
          type: 'success',
          isActive: true,
          product: '三星',
        },
        {
          name: 'success20',
          type: 'success',
          isActive: true,
          product: '东芝',
        },
        {
          name: 'error1',
          type: 'error',
          isActive: true,
          product: '三星',
        },
        {
          name: 'success1',
          type: 'success',
          isActive: true,
          product: '迈拓',
        },
        {
          name: 'warn1',
          type: 'warn',
          isActive: true,
          product: '东芝',
        },
        {
          name: 'error2',
          type: 'error',
          isActive: true,
          product: '三星',
        },
        {
          name: 'error3',
          type: 'error',
          isActive: true,
          product: '富士通',
        },
        {
          name: 'success2',
          type: 'success',
          isActive: true,
          product: '东芝',
        },
        {
          name: 'warn2',
          type: 'warn',
          isActive: true,
          product: '东芝',
        },
        {
          name: 'error5',
          type: 'error',
          isActive: true,
          product: '富士通',
        },
        {
          name: 'error6',
          type: 'error',
          isActive: true,
          product: '东芝',
        },
        {
          name: 'success3',
          type: 'success',
          isActive: true,
          product: '东芝',
        },
        {
          name: 'warn3',
          type: 'warn',
          isActive: true,
          product: '富士通',
        },
        {
          name: 'error7',
          type: 'error',
          isActive: false,
          product: '富士通',
        },
        {
          name: 'error8',
          type: 'error',
          isActive: false,
          product: '希捷',
        },
        {
          name: 'success4',
          type: 'success',
          isActive: false,
          product: '西部数据',
        },
        {
          name: 'error9',
          type: 'error',
          isActive: false,
          product: '西部数据',
        },
        {
          name: 'error10',
          type: 'error',
          isActive: false,
          product: '希捷',
        },
        {
          name: 'success5',
          type: 'success',
          isActive: false,
          product: '西部数据',
        },
        {
          name: 'warn4',
          type: 'warn',
          isActive: false,
          product: '西部数据',
        },
        {
          name: 'success9',
          type: 'success',
          isActive: false,
          product: '西部数据',
        },
        {
          name: 'success10',
          type: 'success',
          isActive: false,
          product: '希捷',
        },
        {
          name: 'error4',
          type: 'error',
          isActive: false,
          product: '西部数据',
        },
        {
          name: 'success11',
          type: 'success',
          isActive: false,
          product: '西部数据',
        },
        {
          name: 'error11',
          type: 'error',
          isActive: false,
          product: '日立',
        },
        {
          name: 'success16',
          type: 'success',
          isActive: false,
          product: '希捷',
        },
        {
          name: 'success17',
          type: 'success',
          isActive: false,
          product: '希捷',
        },
        {
          name: 'error12',
          type: 'error',
          isActive: false,
          product: '西部数据',
        },
        {
          name: 'success6',
          type: 'success',
          isActive: false,
          product: '日立',
        },
        {
          name: 'warn5',
          type: 'warn',
          isActive: false,
          product: '西部数据',
        },
        {
          name: 'error13',
          type: 'error',
          isActive: false,
          product: '日立',
        },
        {
          name: 'success7',
          type: 'success',
          isActive: false,
          product: '西部数据',
        },
        {
          name: 'success8',
          type: 'success',
          isActive: false,
          product: '日立',
        },
        {
          name: 'success12',
          type: 'success',
          isActive: false,
          product: '迈拓',
        },
        {
          name: 'success13',
          type: 'success',
          isActive: false,
          product: '迈拓',
        },
        {
          name: 'success14',
          type: 'success',
          isActive: false,
          product: '日立',
        },
        {
          name: 'success15',
          type: 'success',
          isActive: false,
          product: '日立',
        },
        {
          name: 'OK1',
          type: 'OK',
          isActive: false,
          product: '日立',
        }
      ], item => item.type)
      var arr = []
      for (let key in data) {
        arr = arr.concat(data[key])
      }
      this.small_col = arr;
    },
    methods: {
      getItem(dom) {
        const index = dom.getAttribute('index')
        return this.small_col[index]
      },
      mouseMoveHandle(e) {
        const item = this.getItem(e.target)
        if (item) {
          const itemSelectType = this.itemSelectType
          if (itemSelectType !== 0) {
            this.curHoverClass = e.target.className
            this.content = item && item.name
            const small_col = this.small_col
            item.isSelected = itemSelectType === 1 ? "selected" : undefined
            this.sender(small_col.length > 0 ? small_col.filter(item => item.isSelected === 'selected') : [])
          }
        }
      },
      mousedownHandle(e) {
        const item = this.getItem(e.target)
        if (item) {
          if (item.isSelected === "selected") {
            this.itemSelectType = 2
          } else {
            this.itemSelectType = 1
          }
        }
      },
      mouseupHandle(e) {
        const item = this.getItem(e.target)
        if (item) {
          const itemSelectType = this.itemSelectType
          if (itemSelectType !== 0) {
            this.curHoverClass = e.target.className
            this.content = item && item.name
            const small_col = this.small_col
            item.isSelected = itemSelectType === 1 ? "selected" : undefined
            this.sender(small_col.length > 0 ? small_col.filter(item => item.isSelected === 'selected') : [])
          }
        }
        this.itemSelectType = 0
      },
      sender(item) {
        this.$bus.$emit('overview_tab_message', item);
      },
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Progress_left {
    height: 100%;
    width: 100%;
    border-left: 1px solid #000;
    margin-left: -1px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .small_error {
    background: #ed1941;
  }
  .small_warn {
    background: #ffd400;
  }
  .small_success {
    background: #bed742;
  }
  .OK {
    background: lightgreen;
  }
  .small_item {
    width: 25px;
    height: 25px;
    display: inline-block;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
  }
  .small_item:first-child {
    border-left: 0px solid #000;
    border-bottom: 0px solid #000;
  }
  .small_item:hover {
    opacity: 0.3;
  }
  /* .active {
    opacity: 0.9;
  } */
  .small_item.select::after {
    top: -20px;
    right: -2px;
    position: relative;
    content: '';
    display:block;
    width: 20px;
    height: 10px;
    border: 3px solid #1b315e;
    border-top: none;
    border-right: none;
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    border-radius: 28%;
  }
</style>
