<template>
    <div id="app">
        <header-container></header-container>
        <body-container></body-container>
        <footerContainer></footerContainer>
    </div>
</template>

<script>
    import BodyContainer from './components/body/bodyContainer'
    import FooterContainer from "./components/footer/footerContainer";
    import HeaderContainer from "./components/header/headerContainer";
    export default {
        name: 'app',
        components: {
            HeaderContainer, FooterContainer, BodyContainer
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>