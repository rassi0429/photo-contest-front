<template lang="pug">
div
  v-row 
    v-col(cols=4 v-for="(item,index) in tweetData" :key="index")
      TweetCard(:t="item")
</template>

<script>
import TweetCard from '~/components/tweetCard.vue';
export default {
    name: "IndexPage",
    components: { TweetCard },
    data() {
      return {
        tweetData : [],
        lastUpdate: ""
      }
    },
    methods: {
      async getTweetData() {
        const data = await fetch("https://photo-contest-api.kokoa.dev")
        this.tweetData = await data.json()
      }
    },
    created() {
      this.getTweetData()
    }
}
</script>
