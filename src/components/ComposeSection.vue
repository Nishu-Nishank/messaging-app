<template>
    <div class="flex space-x-3 pt-1 h-auto">
      <textarea
        v-model="message"
        @input="updateTextarea"
        @keydown.enter.prevent="sendMessage"
        ref="textarea"
        class="border rounded w-full px-2 py-1"
        placeholder="Type your message here..."
        :rows="textareaRows"
        :style="textareaStyle"
      ></textarea>
      <button  @click="sendMessage" class="flex items-center">
        <img src="../assets/paper-plane.png" class="w-[60px] h-[40px]" />
      </button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      textareaRows: 1,
      rows: 1,
    };
  },
  computed: {
    textareaStyle() {
      if (this.textareaRows > 3) {
        return { overflowY: "scroll" };
      }
      return {};
    },
  },
  methods: {
    updateTextarea() {
      const row = this.message.split("\r\n").length;
      this.textareaRows = Math.min(row + 1, 4);
    },
    sendMessage() {
      if (this.message.trim() !== '') {
        this.$emit('submit', this.message);
        this.message = '';
      }
    },
  },
};
</script>
