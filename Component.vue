<template>
  <div>
    <div id="computer" :style="computedStyleObject"></div>
    <div>
      <button @click="onClickButton('Rock')">바위</button>
      <button @click="onClickButton('Scissors')">가위</button>
      <button @click="onClickButton('Paper')">보</button>
    </div>
    <div>{{result}}</div>
    <div>현재 {{score}}점</div>
  </div>
</template>

<script>
  const rspCoords = {
    Rock : '-25px',
    Scissors : '195px',
    Paper : '-218px'
  };

  export default {
    data() {
      return {
        imgCoord: rspCoords.Rock,
        result: '',
        score: 0,
      };
    },
    computed: {
      computedStyleObject() {
        return {
          background: `url(https://media.istockphoto.com/vectors/rock-paper-scissors-hands-vector-id1271192332?k=20&m=1271192332&s=612x612&w=0&h=ghJkl5p3npCojTaXmaV6S9STlsLAwfVe4Xd_lv8Gp6U=) ${this.imgCoord} -110px`,
        }
      }
    },
    methods: {
      onClickButton(choice) {

      },
    },
  }
</script>

<style scoped>
  #computer {
    width: 171px;
    height: 250px;
  }
</style>