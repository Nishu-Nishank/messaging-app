import Vue from "vue";
import Vuex from "vuex";
import { currentUser, conversation } from "../constant/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    conversation: [],
    me: {},
  },
  mutations: {
    setConversation(state, conversation) {
      state.conversation = conversation;
    },
    setMe(state, me) {
      state.me = me;
    },
    addMessage(state, message) {
      state.conversation.push(message);
    },
  },
  getters: {
    getConversation(state) {
      return state.conversation;
    },
    getMe(state) {
      return state.me;
    },
  },
  actions: {
    fetchConversation({ commit }) {
      commit("setConversation", JSON.parse(conversation));
    },
    fetchMe({ commit }) {
      commit("setMe", JSON.parse(currentUser));
    },
    sendReply({ commit, state }, messageContent) {
      const randomId = Math.floor(Math.random() * 1000000);
      const currentDate = new Date().toISOString();
      const message = {
        id: randomId,
        message: messageContent,
        date: currentDate,
        from: state.me,
      };
      const failed = Math.random() < 0.1; 
      if (failed) {
        //commit("removeMessage", message);
      } else {
        setTimeout(() => {
          commit("addMessage", message);
        }, 500);
      }
    },
  },
});
