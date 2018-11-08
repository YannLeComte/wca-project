<template>
    <div class="container">
        <h1>Your final score is:</h1>
        <p class="score">{{Math.round(percentage)}} %</p>
        <v-btn block class="primary" @click="restartQuiz">Restart</v-btn>
    </div>
</template>
<script>
    /* The components shows the results of the quiz with a percentage */
    export default {
        name: 'results',
        props: ['userAnswers'],
        data() {
            return {
                percentage: 0
            }
        },
        created() {
            /* Calculate the score with the list of answers (booleans)*/
            let numberOfCorrectAnswers = 0;
            for (let item of this.userAnswers) {
                if (item === true) {
                    numberOfCorrectAnswers++;
                }
            }
            this.percentage = (numberOfCorrectAnswers / this.userAnswers.length) * 100;
        },
        methods: {
            restartQuiz: function () {
                this.$emit('quiz-restart');
            }
        }
    }
</script>

<style scoped>
    .score {
        font-size: 50px;
        text-align: center;
        padding: 20px;
        margin-bottom: 30px;
    }
</style>
