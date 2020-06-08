
new Vue({
  el: '#app',
  data: {
    list: [],
    lastTime: undefined,
    startTime: undefined,
    timeDelta: undefined,
    updateCount: 0,
    totalTime: 0,
    modes:['random', 'default', 'id'],
    pause: false,
    modeIndex: 0,
  },
  mounted() {
    console.log('mounted')
    setTimeout(this.updateList, 100)
    this.lastTime = Date.now();
    this.startTime = Date.now();
  },
  methods: {
    getRandomArray() {
      return new Array(10).fill(1).map((item, index) => Math.random())
    },
    getRandomList(originArray) {
      if (!originArray.length) {
        return new Array(10).fill(1).map((item, index) => makeItem(index))
      } else {
        return originArray.map((item, index) => (Math.random() < 0.5 ? makeItem(Math.random()) : makeItem(item.id)))
      }
    },
    next() {
      setTimeout(this.updateList, 100)
    },
    log() {
      setTimeout(this.updateList, 100)
    },
    toggle() {
      this.pause = !this.pause;
      setTimeout(this.updateList, 100)
    },
    toggleKeyMode() {
      this.modeIndex = (this.modeIndex + 1) % 3;
    },
    updateList() {
      let now = Date.now()
      this.lastTime = now;
      this.list = this.getRandomList(this.list).sort(item => Math.random() - 0.5);
      setTimeout(() => {
        let now = Date.now()
        if (!this.pause) {
          setTimeout(this.updateList, 100)
        }
        this.timeDelta = now - this.lastTime;
        this.totalTime = this.totalTime + this.timeDelta;
        this.updateCount++;
      })
    }
  }
})

Vue.component('child', {
  props: [
    'content'
  ],
  data: {},

  template: `<p>
    {{content}}
</p>`,
  mounted() {
    console.log('mounted' + this.key)
    sleep(10)
  }
})

function makeItem(id) {
  return {
    id,
    content: `${id}`
  }
}

function sleep(time) {
  let start = Date.now();
  while (Date.now() - start < time) {

  }
}
