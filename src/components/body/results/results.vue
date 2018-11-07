<template>
    <div>
        <p>{{percentage}} %</p>
        <button v-on:click="restartQuizz">Restart</button>
    </div>
</template>
<script>
    export default {
        name: 'results',
        props: ['userAnswers'],
        data() {
            return {
                percentage: 0
            }
        },
        created() {
            let numberOfCorrectAnswers = 0;
            for (let item of this.userAnswers) {
                if (item === true) {
                    numberOfCorrectAnswers++;
                }
            }
            this.percentage = (numberOfCorrectAnswers / this.userAnswers.length) * 100;
        },
        methods: {
            restartQuizz: function () {
                this.$emit('quizz-restart');
            }
        }
    }
</script>

<style scoped>
</style>
