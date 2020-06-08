const timeout = 400;
new Vue({
  el: '#app',
  data: {
    list: [],
    lastTime: undefined,
    startTime: undefined,
    timeDelta: undefined,
    updateCount: 0,
    totalTime: 0,
    modes:['random', 'default(index)', 'id'],
    pause: false,
    modeIndex: 0,
  },
  mounted() {
    console.log('mounted')
    setTimeout(this.updateList, timeout)
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
        return originArray.map((item, index) => (Math.random() < 0.1 ? makeItem(Math.random()) : makeItem(item.id)))
      }
    },
    next() {
      setTimeout(this.updateList, timeout)
    },
    log() {
      setTimeout(this.updateList, timeout)
    },
    toggle() {
      this.pause = !this.pause;
      setTimeout(this.updateList, timeout)
    },
    toggleKeyMode() {
      this.modeIndex = (this.modeIndex + 1) % 3;
    },
    updateList() {
      let now = Date.now()
      this.lastTime = now;
      this.list = this.getRandomList(this.list);
      Vue.nextTick(() => {
        let now = Date.now()
        if (!this.pause) {
          setTimeout(this.updateList, timeout)
        }
        this.timeDelta = now - this.lastTime;
        this.totalTime = this.totalTime + this.timeDelta;
        this.updateCount++;
      })
    }
  }
})

Vue.component('Child', {
  props: [
    'content'
  ],
  data() {
    return {
      count: 0,
    }
  },
  template: `
    <div class="child">
      <div class="content">
        {{content}}
      </div>
      <div class="update-count">
        {{count}}
      </div>
    </div>`,
  beforeUpdate() {
    this.count++;
  },
  mounted() {
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
