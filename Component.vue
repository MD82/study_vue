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

  const scores = {
    Rock: 0,
    Scissors : 1,
    Paper : -1,
  };

  const computerChoise = (imgCoord) => {
    return Object.entries(rspCoords).find(function (v) {
      return v[1] === imgCoord;
    })[0];
  };

  let interval = null;
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
      changeHand() {
        interval = setInterval(() => {
        this.imgCoord = (this.imgCoord === rspCoords.Rock) ? rspCoords.Scissors :
                        (this.imgCoord === rspCoords.Scissors) ? rspCoords.Paper :
                        (this.imgCoord === rspCoords.Paper) ? rspCoords.Rock : '';
        }, 100);
      },
      onClickButton(choice) {
        clearInterval(interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoise(this.imgCoord)];
        const diff = myScore - cpuScore;
        if(diff === 0) {
          this.result = '비겼습니다';
        } else if([-1, 2].includes(diff)) {
          this.result = '이겼습니다';
          this.score += 1;
        } else {
          this.result = '졌습니다';
          this.score -= 1;
        }
        setTimeout(() => {
          this.changeHand();
        }, 1000);
      },
    },
    created() {
    },
    updated() {
    },
    mounted() {
      this.changeHand();
    },
    beforeDestroy() {
      clearInterval(interval);
    }
  }
</script>

<style scoped>
  #computer {
    width: 171px;
    height: 250px;
  }
</style>