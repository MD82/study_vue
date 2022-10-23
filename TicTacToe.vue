<template>
  <div>
    <div>{{turn}} 님의 턴입니다.</div>
    <table-component :table-data="tableData"/>
    <div v-if="winner">{{winner}}</div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import TableComponent from './TableComponent'
  export default {
    components: {
      TableComponent,
    },
    computed: {
      ...mapState(['winner','turn']),
      // winner() {
      //   return this.$store.state.winner;
      // },
      // turn() {
      //   return this.$store.state.turn;
      // }
    },
    methods: {

    },
    created() {
    },
    updated() {
    },
    mounted() {

    },
    beforeDestroy() {
    },
  }
</script>

<style>
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
  }
</style>