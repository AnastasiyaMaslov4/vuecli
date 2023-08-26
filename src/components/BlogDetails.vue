<template>
    <div class="blog center" id="blog">
        <main class="blog__list">
            <article class="blog__list__article" v-for="article in visibleArticles">
                <h2 class="blog__list__article__title"> {{article.title}}</h2>
                <img :src="article.image" alt="article pic" class="blog__list__article__img">
                <div class="blog__list__article__data">
                    <p class="blog__list__article__data__date">{{article.date}}</p>
                    <p class="blog__list__article__data__nav">Interior / Home / {{article.tag}}</p>
                </div>
                <p class="blog__list__article__text">{{article.text}}</p>
                <blockquote v-if="article.quote" class="blog__list__article__quote">
                    <p class="blog__list__article__quote__big">“</p>
                    <p class="blog__list__article__quote__normal">{{article.quote}}</p></blockquote>
                <h2 v-if="article.title2" class="blog__list__article__title">{{article.title2}}</h2>
                <p v-if="article.text2" class="blog__list__article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                <ol v-if="article.text2" class="blog__list__article__list">
                    <li class="blog__list__article__text blog__list__article__li">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                    <li class="blog__list__article__text blog__list__article__li">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                    <li class="blog__list__article__text blog__list__article__li">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                </ol>
                <img v-if="article.image2" :src="article.image2" alt="article pic" class="blog__list__article__img">
                <p v-if="article.text3" class="blog__list__article__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
            </article>
            </main> 
            <aside class="blog__tags">
            <h3 class="blog__tags__title">Tags</h3>
            <div class="blog__tags__div">
                <button class="blog__tags__btn" @click="sortArticles('Kitchen')">Kitchen</button>
                <button class="blog__tags__btn" @click="sortArticles('Bedroom')">Bedroom</button>
                <button class="blog__tags__btn" @click="sortArticles('Building')">Building</button>
                <button class="blog__tags__btn" @click="sortArticles('Architecture')">Architecture</button>
                <button class="blog__tags__btn" @click="sortArticles('Kitchen Planning')">Kitchen Planning</button>
            </div>
        </aside>
    </div>
</template>

<script>
    export default {
        name: "BlogDetails",
        data() {
            return {
                tagValue: "",
                articles: [
                {title: 'Let’s Get Solution for Building Construction Work', title2: "Design sprints are great", text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.", text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", image: require('@/assets/img/blog1.jpg'), image2: require('@/assets/img/blog2.jpg'), date: '26 December,2022', quote: "The details are not the details. They make the design.", tag: 'Decore'},
                {title: 'Let’s Get Solution For Building Construction Work', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', image: require('@/assets/img/articles/kitchen1.jpg'), date: '26 December,2022', tag: 'Kitchen'},
                {title: 'Low Cost Latest Invented Interior Designing Ideas', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', image: require('@/assets/img/articles/kitchen2.jpg'), date: '22 December,2022', tag: 'Kitchen'},
                {title: 'Low Cost Latest Invented Interior Designing Ideas', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', image: require('@/assets/img/articles/bedroom1.jpeg'), date: '20 December,2022', tag: 'Bedroom'},
                {title: 'Design sprints are great', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', image: require('@/assets/img/articles/bedroom2.jpg'), date: '20 December,2022', tag: 'Bedroom'},
                {title: 'Design sprints are great', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', image: require('@/assets/img/articles/building.jpg'), date: '16 December,2022', tag: 'Building'},
                {title: 'Best For Any Office & Business Interior Solution', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.', image: require('@/assets/img/articles/architecture.jpg'), date: '16 November,2023', tag: 'Architecture'},
                {title: 'Best For Any Office & Business Interior Solution', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.', image: require('@/assets/img/articles/kitchen_planning.jpeg'), date: '10 November,2023', tag: 'Kitchen Planning'},
                ],
                visibleArticles: [
                {title: 'Let’s Get Solution for Building Construction Work', title2: "Design sprints are great", text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.", text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", image: require('@/assets/img/blog1.jpg'), image2: require('@/assets/img/blog2.jpg'), date: '26 December,2022', quote: "The details are not the details. They make the design.", tag: 'Decore'},
                {title: 'Let’s Get Solution For Building Construction Work', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', image: require('@/assets/img/articles/kitchen1.jpg'), date: '26 December,2022', tag: 'Kitchen'},
                {title: 'Low Cost Latest Invented Interior Designing Ideas', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', image: require('@/assets/img/articles/kitchen2.jpg'), date: '22 December,2022', tag: 'Kitchen'},
                {title: 'Low Cost Latest Invented Interior Designing Ideas', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', image: require('@/assets/img/articles/bedroom1.jpeg'), date: '20 December,2022', tag: 'Bedroom'},
                {title: 'Design sprints are great', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', image: require('@/assets/img/articles/bedroom2.jpg'), date: '20 December,2022', tag: 'Bedroom'},
                {title: 'Design sprints are great', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.', image: require('@/assets/img/articles/building.jpg'), date: '16 December,2022', tag: 'Building'},
                {title: 'Best For Any Office & Business Interior Solution', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.', image: require('@/assets/img/articles/architecture.jpg'), date: '16 November,2023', tag: 'Architecture'},
                {title: 'Best For Any Office & Business Interior Solution', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.', image: require('@/assets/img/articles/kitchen_planning.jpeg'), date: '10 November,2023', tag: 'Kitchen Planning'},
                ],
            }
        },
        methods: {
        sortArticles(tagName) {
            this.visibleArticles = this.articles.filter((el) => el.tag == tagName);
        },
    },

    }
</script>

<style scoped>

</style>