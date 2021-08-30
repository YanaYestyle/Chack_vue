<template>
  <div class="app">
    <h1 style="text-align: center">In case there's nothing to do at all... Absolutely nothing... Chuck will help...<br> I hope...</h1>
      <div v-if="!isJokesLoading">
        <div class="jokes" :key="joke.id" v-for="joke in jokes">
          <div>{{joke.value}}</div>
        </div>
      </div>
      <div v-else class="loader"></div>
    <!--<div ref="observer"></div>    one more way--> 
    <div v-intersection="fetchJokeMore"></div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      jokes: [],
      isJokesLoading: false,
    }
  },
  methods: {
    async fetchJoke() {
      try {
        this.isJokesLoading = true;
        const responce = await axios.get('https://api.chucknorris.io/jokes/random');
        this.jokes = [responce.data];
      } catch (e) {
        console.log('It was mistake');
      } finally {
        this.isJokesLoading = false;
      }
    },
    async fetchJokeMore() {
      try {
        const responce = await axios.get('https://api.chucknorris.io/jokes/random');
        this.jokes = [...this.jokes, ...[responce.data]];
      } catch (e) {
        console.log('It was mistake');
      }
    }
  },
  
  mounted() {
    this.fetchJoke();
    for(let i =0; i < 5; i++ ) {
      this.fetchJokeMore();
    };
    
    /*let options = {
    rootMargin: '5px',
    threshold: 0.5
    };

    let callback = (entries, observer) => {
      if(entries[0].isIntersecting) {
        this.fetchJokeMore();
      }
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)  - for observer */ 
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.jokes {
  padding: 15px;
  border: 3px solid chocolate;
  margin-top: 15px;
}

.loader {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px dashed salmon;
  animation: rotate 1s infinite linear;
  margin: auto auto;
}

@keyframes rotate {
  from {
    transform: rotate(0deg) scale(1);
  }
  to {
    transform: rotate(360deg) scale(1.4);
  }
}
</style>