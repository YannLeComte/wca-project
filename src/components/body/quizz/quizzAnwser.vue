<template>
    <div class="quiz-answer">
        <p v-if="isAnswerCorrect">You're right!</p>
        <p v-if="!isAnswerCorrect">You're wrong! it was '{{correctAnswer}}'</p>
    </div>
</template>

<script>
    export default {
        name: 'quizzAnswer',
        props: [
            'isAnswerCorrect',
            'correctAnswer'
        ]
    }
</script>

<style scoped>
</style>
