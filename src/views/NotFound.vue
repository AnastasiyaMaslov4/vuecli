<template>
    <div class="center">
        <div class="nf">
            <p class="nf__text1">404</p>
            <p class="nf__text2">We are sorry, but the page you requested was not found</p>
            <router-link class="nf__btn" to="/">Back To Home <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
            </svg>
            </router-link>
        </div>
        <img class="nf__img" :src="img">
    </div>
</template>

<script>
    export default {
        name: 'NotFound',
        data() {
            return {
                img: require('@/assets/img/404.jpg')
            }
        },
    }
</script>

<style scoped>
    .center {
        display: flex;
        justify-content: space-between;
        margin-bottom: 200px;
    }

    .nf {
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }

    .nf__text1 {
        color: #CDA274;
        font-family: 'DM Serif Display';
        font-size: 250px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%; 
        margin-bottom: 15px;
    }

    .nf__text2 {
        font-family: 'DM Serif Display';
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 52.5px */
        letter-spacing: 0.35px;
        margin-bottom: 63px;
    }

    .nf__btn {
        padding: 26px 54px;
        border-radius: 18px;
        background: #292F36;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        color: #FFF;
        text-align: center;
        font-family: 'Jost';
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 125%; /* 22.5px */
        letter-spacing: 0.36px;
    }

    .nf__img {
        width: 45%;
        border-radius: 0px 0px 0px 30%;
    }
</style>