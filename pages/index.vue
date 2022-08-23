<template lang="pug">
div
  p 合計 {{tweetData.length}} 件
  v-btn(@click="reverseData()") 最新を一番{{reverse? "上":"下"}}
  v-row
    v-col(cols=12 sm=6 md=4 v-for="(item,index) in tweetData" :key="index")
      TweetCard(:t="item")
  div.text-center
    v-dialog(v-model="isOpen" max-width="800" persistent @click:outside="closeModal()")
      v-card(max-height="800")
        v-card-title プレビュー
        v-card-text
          v-img(:src="url")
        v-card-actions
          v-spacer
          v-btn(@click="closeModal()") 閉じる
</template>

<script>
import {mapMutations, mapState} from "vuex";
import TweetCard from '~/components/tweetCard.vue';

export default {
    name: "IndexPage",
    components: { TweetCard },
    data() {
      return {
        tweetData : [],
        lastUpdate: "",
        reverse: false,
        openmodal: true
      }
    },
    methods: {
      ...mapMutations(["closeModal","openModal"]),
      async getTweetData() {
        const data = await fetch("https://photo-contest-api.kokoa.dev")
        this.tweetData = await data.json()
      },
      reverseData() {
        this.tweetData = this.tweetData.reverse()
        this.reverse = !this.reverse
      }
    },
    created() {
      this.getTweetData()
    },
    computed: {
      ...mapState(["isOpen","url"])
    }
}
</script>
