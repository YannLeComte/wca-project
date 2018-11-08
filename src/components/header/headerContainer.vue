<template>
    <div class="header-container">
        <v-toolbar class="primary" :fixed="true">
            <v-toolbar-title class="title">Super quiz</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
    </div>
</template>
<script>
    export default {
        name: 'headerContainer',
    }
</script>

<style scoped>
    .header-container .title {
        color: #fff;
    }
</style>
