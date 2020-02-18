new Vue({
  el: '#app',
  data: {
    firstCount: 1,
    secondCount: 1
  },
  computed: {
    descComputed() {
      console.log("descComputed");
      return this.firstCount > 3 ? 'firstCount > 3' : 'firstCount < 3';
    },
    showAllCount() {
      console.log("showAllCount");
      return `firstCount is ${this.firstCount} | secondCount is ${this.secondCount}`;
      // return this.firstCount > 3 ? 'firstCount > 3' : 'firstCount < 3';
    }
  },
  watch: {
    firstCount(newFirstCount, oldFirstCount) {
      console.log("watch firstCount => ", newFirstCount, oldFirstCount);
    },
    secondCount(newSecondCount, oldSecondCount) {
      console.log("watch secondCount => ", newSecondCount, oldSecondCount);
    }
  },
  methods: {
    increase() {
      console.log("increase");
      this.firstCount++;
    },
    decrease() {
      console.log("decrease");
      this.firstCount--;
    },
    descMethod() {
      console.log("descMethod");
      return this.firstCount > 3 ? 'firstCount > 3' : 'firstCount < 3';
    },
    increaseSecond() {
      console.log("increaseSecond");
      this.secondCount++;
    }
  }
});
