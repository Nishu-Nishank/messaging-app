<template>
    <div class="flex items-end p-3"  :class="{'flex-row-reverse':currentUserId===myId}">
      <div
        class="w-12 h-12 rounded-full flex items-center justify-center border relative"
        @mouseover="showTooltip = true" @mouseleave="showTooltip = false"
      >
      <span class="tooltip" v-if="showTooltip">{{ person }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </div>
      <div class="ml-3 max-w-[60%] rounded-lg p-2 bg-[#edf2f7]" :class="{'mr-3 bg-[#90cdf4!important]':currentUserId === myId}">
        <p v-html="message"></p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    message: String,
    currentUserId: Number,
    myId:Number,
    person:String,
  },
  data(){
    return{
      showTooltip: false,
    }
  },
};
</script>
<style scoped>
.tooltip {
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 100px;
  z-index: 1000;
}
</style>
