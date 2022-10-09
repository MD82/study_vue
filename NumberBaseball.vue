<template>
  <div>
    <h1>{{result}}</h1>
    <input ref="answer" minlength="4" maxlength="4" v-model="value" :disabled="answerVis"/>
    <button v-on:click="onSubmitForm" :disabled="answerVis">입력</button>
    <div>[총 {{total}}의 기회 중 {{tries.length}}회 도전 중]</div>
    <ul>
      <li v-for="t in tries">
        <div>{{t.try}}</div>
        <div>{{t.result}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  const getNumbers = () => {
    const candidates = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i=0;i<4;i+=1) {
      const chosen = candidates.splice(Math.floor(Math.random() * (9-i)), 1)[0];
      array.push(chosen);
    }
    return array;
  };

  export default {
    data() {
      return {
        answer: getNumbers(),
        total: 10,
        tries: [],
        value: '',
        result: '',
        answerVis: false,
      }
    },
    methods: {
      onSubmitForm() {
        if (this.value.length !== 4) {
          this.result = '4자리숫자로 입력바랍니다.';
        } else if(this.value === this.answer.join('')) {
          this.tries.push({
            try: this.value,
            result: '홈런',
          });
          this.result = '홈런';
          if(confirm('성공하셨습니다. \n 게임을 다시 실행합니까?')) {
            this.answer = getNumbers();
            this.tries = [];
            this.$refs.answer.focus();
            this.value = '';
          }
        } else {
          if(this.tries.length >= this.total-1) {
            this.result = this.total + `번 이상 도전해서 실패입니다. 답은 ${this.answer.join('')}였습니다.`;
            if(confirm(this.result + '\n게임을 다시 실행합니까?')) {
              this.answer = getNumbers();
              this.tries = [];
              this.$refs.answer.focus();
            } else {
              this.answerVis = true;
            }
          } else {
            this.result = '';
          }
          let strike = 0;
          let ball = 0;
          const answerArray = this.value.split('').map(v => parseInt(v));
          for(let i = 0 ; i < 4 ; i += 1) {
            if(answerArray[i] === this.answer[i]) { // 숫자 자릿수 모두 정답
              strike++;
            } else if (this.answer.includes(answerArray[i])){
              ball++;
            }
          }

          this.tries.push({
            try: this.value,
            result: `${strike} 스트라이크, ${ball}  볼입니다.`,
          });
          this.value = '';
          this.$refs.answer.focus();
        }
      }
    }
  }
</script>

<style>

</style>