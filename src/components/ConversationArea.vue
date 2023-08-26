<!-- ConversationArea.vue -->
<template>
  <div class="scroll">
    <MessageEntry
      v-for="item in conversation"
      :key="item.id"
      :message="item.message"
      :currentUserId="item.from.id"
      :myId="me.id"
      :person="item.from.firstName"
    />
  </div>
</template>

<script>
import MessageEntry from "./MessageEntry.vue";
/* eslint-disable */
export default {
  components: {
    MessageEntry,
  },
  data() {
    return {
      scrollHeight: null,
    };
  },
  computed: {
    conversation() {
      return this.$store.getters.getConversation;
    },
    me() {
      return this.$store.getters.getMe;
    },
  },
  mounted() {
    let container = document.querySelector(".scroll");
    this.scrollHeight = container.scrollHeight;
    container.scrollTop = this.scrollHeight;
  },
  created() {
    this.$root.$on("scrollToBottom", () => {
      let container = document.querySelector(".scroll");
      let scrollHeight = container.scrollHeight+50;
      container.scrollTop = scrollHeight;
    });
  },
};
</script>
