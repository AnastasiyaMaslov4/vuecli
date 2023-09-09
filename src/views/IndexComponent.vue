<template>
    <section class="top center" id="home">
        <div class="top__div">
        <h1 class="top__title">Let Your Home Be Unique</h1>
        <p class="top__text">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
        <button class="top__btn">Get Started<svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
        <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
        </svg></button>
    </div>
    </section>
    <section class="projects center" id="project">
        <h2 class="projects__title">Follow Our Projects</h2>
        <p class="projects__text">It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
            <ul class="projects__list">
                <router-link to="/projectdetails">
                <li class="projects__list__card">
                    <img :src='projectPic1' alt="project pic" class="projects__list__card__img">
                    <h3 class="projects__list__card__title">Modern Kitchen</h3>
                    <p class="projects__list__card__text">Decor / Artchitecture</p>
                    <button class="projects__list__card__btn"><svg xmlns="http://www.w3.org/2000/svg" width="75" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></button>
                </li>
                </router-link>
                <router-link to="/projectdetails">
                <li class="projects__list__card">
                    <img :src="projectPic2" alt="project pic" class="projects__list__card__img">
                    <h3 class="projects__list__card__title">Modern Kitchen</h3>
                    <p class="projects__list__card__text">Decor / Artchitecture</p>
                    <button class="projects__list__card__btn"><svg xmlns="http://www.w3.org/2000/svg" width="75" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></button>
                </li>
                </router-link>
                <router-link to="/projectdetails">
                <li class="projects__list__card">
                    <img :src="projectPic3" alt="project pic" class="projects__list__card__img">
                    <h3 class="projects__list__card__title">Modern Kitchen</h3>
                    <p class="projects__list__card__text">Decor / Artchitecture</p>
                    <button class="projects__list__card__btn"><svg xmlns="http://www.w3.org/2000/svg" width="75" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></button>
                </li>
                </router-link>
                <router-link to="/projectdetails">
                <li class="projects__list__card">
                    <img :src="projectPic4" alt="project pic" class="projects__list__card__img">
                    <h3 class="projects__list__card__title">Modern Kitchen</h3>
                    <p class="projects__list__card__text">Decor / Artchitecture</p>
                    <button class="projects__list__card__btn"><svg xmlns="http://www.w3.org/2000/svg" width="75" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></button>
                </li>
                </router-link>
            </ul>
    </section>
    <section class="numbers center">
        <ul class="numbers__list">
            <li class="numbers__li">
                <p class="numbers__li__num">12</p>
                <p class="numbers__li__text">Years Of Experience</p>
            </li>
            <li class="numbers__li">
                <p class="numbers__li__num">85</p>
                <p class="numbers__li__text">Success Projects</p>
            </li>
            <li class="numbers__li">
                <p class="numbers__li__num">15</p>
                <p class="numbers__li__text">Active Projects</p>
            </li>
            <li class="numbers__li">
                <p class="numbers__li__num">95</p>
                <p class="numbers__li__text">Happy Customers</p>
            </li>
        </ul>
    </section>
    <section class="news center" id="blog">
        <h2 class="news__title">Articles & News</h2>
        <p class="news__text">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        <ul class="news__list">
            <router-link to="/blogdetails">
            <li class="news__card">
                <div class="news__card__img">
                    <img :src="articlePic1" alt="news pic">
                    <div class="news__card__theme">Kitchen Design</div>
                </div>
                <h3 class="news__card__title">Let’s Get Solution For Building Construction Work</h3>
                <p class="news__card__date">26 December,2022</p>
                <button class="news__card__btn"><svg xmlns="http://www.w3.org/2000/svg" width="75" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></button>
            </li>
            </router-link>
            <router-link to="/blogdetails">
            <li class="news__card">
                <div class="news__card__img">
                    <img :src="articlePic2" alt="news pic">
                    <div class="news__card__theme">Living Design</div>
                </div>
                <h3 class="news__card__title">Low Cost Latest Invented Interior Designing Ideas.</h3>
                <p class="news__card__date">22 December,2022</p>
                <button class="news__card__btn"><svg xmlns="http://www.w3.org/2000/svg" width="75" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></button>
            </li>
            </router-link>
            <router-link to="/blogdetails">
            <li class="news__card">
                <div class="news__card__img">
                    <img :src="articlePic3" alt="news pic">
                    <div class="news__card__theme">Interior Design</div>
                </div>
                <h3 class="news__card__title">Best For Any Office & Business Interior Solution</h3>
                <p class="news__card__date">25 December,2022</p>
                <button class="news__card__btn"><svg xmlns="http://www.w3.org/2000/svg" width="75" height="70" viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></button>
            </li>
            </router-link>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "IndexComponent",
        data() {
            return {
                projectPic1 : require('@/assets/img/project1.jpg'),
                projectPic2 : require('@/assets/img/project2.jpg'),
                projectPic3 : require('@/assets/img/project3.jpg'),
                projectPic4 : require('@/assets/img/project4.jpg'),
                articlePic1: require('@/assets/img/news1.jpg'),
                articlePic2: require('@/assets/img/news2.jpg'),
                articlePic3: require('@/assets/img/news3.jpg'),
            }
        },
    }
</script>

<style scoped>

</style>