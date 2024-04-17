const FlashWord = {
    // options
    data() {
        return {
            wordA: "hola",
            wordB: "hello",
            answer: "",
            showFeedback: false,
            correct: null,
        };
    },
    methods: {
        checkAnswer() {
            this.showFeedback = true;
            if (this.wordB == this.answer) {
                this.correct = true;
            } else {
                this.correct = false;
            }
        },
    },
};

const app = Vue.createApp(FlashWord).mount("#app");
