<template>
  <div id="app">
    <div class="flex justify-center items-center mt-10">
      <div class="w-[500px] h-[400px!important]">
        <ConversationArea class="border h-full overflow-y-auto" />
        <ComposeSection @submit="sendReply" />
      </div>
    </div>
  </div>
</template>

<script>
import ComposeSection from "./components/ComposeSection.vue";
import ConversationArea from "./components/ConversationArea.vue";
/* eslint-disable */
export default {
  name: "App",
  components: {
    ConversationArea,
    ComposeSection,
  },
  beforeCreate() {
    this.$store.dispatch('fetchConversation');
    this.$store.dispatch('fetchMe');
  },
  methods: {
    sendReply(msgData){
      this.$store.dispatch('sendReply',msgData);
      this.$root.$emit('scrollToBottom')
    }
  }
};
</script>

<style></style>
