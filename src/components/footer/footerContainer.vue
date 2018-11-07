<template>
    <div class="footer-container">
        <v-footer class="pa-3">
            <v-spacer></v-spacer>
            <div>&copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </div>
</template>
<script>
    export default {
        name: 'footerContainer',
    }
</script>

<style scoped>
    .footer-container {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
</style>
