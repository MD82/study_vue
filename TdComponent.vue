<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
export default {
  props: {
    cellData: String,
    rowIndex: Number,
    cellIndex: Number,
  },
  methods: {
    onClickTd() {
      console.log(this.$root.$data);
      console.log(this.$parent.$data);
      this.$root.$data.true = this.$root.$data.true === 'O' ? 'X' : 'O';
    }
  }
};
</script>

<style scoped>

</style>