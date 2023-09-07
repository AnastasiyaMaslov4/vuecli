<template>
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :zoom="true"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="swiper-zoom-container">
          <img class="slider__pic" :src="sliderPic1" />
        </div> </swiper-slide
      ><swiper-slide>
        <div class="swiper-zoom-container">
          <img class="slider__pic" src="../assets/img/project/proj6.jpg" />
        </div> </swiper-slide
      ><swiper-slide>
        <div class="swiper-zoom-container">
          <img class="slider__pic" src="../assets/img/project/proj8.jpg" />
        </div> </swiper-slide
      >
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/zoom';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
  
    // import required modules
    import { Zoom, Navigation, Pagination } from 'swiper/modules';
  
    export default {
        name: 'SliderComponent',
        components: {
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                sliderPic1: require('@/assets/img/sliderPic.jpg'),
            }
        },
        setup() {
            return {
            modules: [Zoom, Navigation, Pagination],
            };
      },
    };
  </script>

  <style scoped>
    .mySwiper {
        width: 1201px;
        height: 799px;
        border-radius: 70px;
    }

    .swiper-zoom-container {
        object-fit: cover;
    }
    .slider__pic {
        object-fit: cover;
        width: 100%;
    }
</style>
  