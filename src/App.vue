<template>
    <div id="app">
        <v-app light>
            <header-container></header-container>
            <div class="top-nav-margin"></div>
            <body-container></body-container>
            <footerContainer></footerContainer>
        </v-app>
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
    html {
        overflow: initial!important;
    }

    h1 {
        text-align: center;
    }

    .application {
        background-color: #fff!important;
    }
    button {
        width: 100%;
        margin: 0!important;
    }
    .container {
        padding: 30px;
        width: 100%;
    }

    .radio-group .v-input__slot{
        margin-bottom:0!important;
    }
    .top-nav-margin {
        height:64px;
        width:100%;
    }
</style>