<template>
    <section class="heading center">
        <div class="heading__title">
            <h2 class="heading__title__title">Articles & News</h2>
            <p class="heading__title__text">Home / Blog</p>
        </div>
    </section>
    <section class="latest center">
        <h2 class="latest__title">Latest Post</h2>
        <article class="latest__post">
            <img :src="latestPostPic" alt="post pic" class="latest__post__img">
            <div class="latest__post__info">
                <h3 class="latest__post__info__title">Low Cost Latest Invented Interior Designing Ideas</h3>
                <p class="latest__post__info__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.<br><br> Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                <p class="latest__post__info__date">26 December,2022</p>
                <button class="latest__post__info__btn"><svg xmlns="http://www.w3.org/2000/svg" width="75" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></button>
            </div>
        </article>
    </section>
    <section class="news center" id="news">
        <h2 class="news__title">Articles & News</h2>
        <ul class="news__list">
            <li class="news__li" v-for="post in posts" :key="post.id">
                <article class="news__card">
                    <div class="news__card__img">
                        <img :src="post.img" alt="news pic">
                        <div class="news__card__theme">{{post.theme}}</div>
                    </div>
                    <h3 class="news__card__title">{{post.title}}</h3>
                    <p class="news__card__date">{{post.date}}</p>
                    <button class="news__card__btn"><svg xmlns="http://www.w3.org/2000/svg" width="75" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></button>
                </article>
            </li>
        </ul>

        <div class="news__pagination">
            <button class="news__pagination__btn news__pagination__btn_active">01</button>
            <button class="news__pagination__btn">02</button>
            <button class="news__pagination__btn">03</button>
            <button class="news__pagination__btn">></button>
        </div>     
    </section>
</template>

<script>
    export default {
        name: "BlogComponent",
        data() {
            return {
                posts: [
                        {id: 1, title: "Let’s Get Solution For Building Construction Work", theme: "Kitchen Design", date: "26 December,2022", img: require('@/assets/img/news1.jpg')},
                        {id: 2, title: "Low Cost Latest Invented Interior Designing Ideas.", theme: "Living Design", date: "22 December,2022", img: require('@/assets/img/news2.jpg')},
                        {id: 3, title: "Best For Any Office & Business Interior Solution", theme: "Interior Design", date: "22 December,2022", img: require('@/assets/img/news3.jpg')},
                        {id: 4, title: "Let’s Get Solution For Building Construction Work", theme: "Kitchen Design", date: "26 December,2022", img: require('@/assets/img/news4.jpg')},
                        {id: 5, title: "Low Cost Latest Invented Interior Designing Ideas.", theme: "Living Design", date: "22 December,2022", img: require('@/assets/img/news5.jpg')},
                        {id: 6, title: "Best For Any Office & Business Interior Solution", theme: "Interior Design", date: "22 December,2022", img: require('@/assets/img/news6.jpg')},
                    ],
                    latestPostPic: require('@/assets/img/latestPost.jpg'),
            }
        },
    }
</script>

<style scoped>

</style>