<template>
  <div id="home">
    <!-- Page Wrapper -->
    <div id="background-div" class="page-holder bg-cover">
      <!-- <div class="container py-5">
        <header class="text-left text-white py-5">
          <h3 class="mb-4 rounded">
            <a
              href="#start-shopping"
              class="bg-white px-2 py-2 rounded"
              id="heading"
              >Our Products</a
            >
          </h3>
          <p id="content" class="lead mb-0 bg-dark p-1 rounded">
            
          </p>
        </header>
      </div> -->
              <section id="container-slider">
            <a href="javascript: fntExecuteSlide('prev');" class="arrowPrev"
              ><i class="fas fa-chevron-circle-left"></i
            ></a>
            <a href="javascript: fntExecuteSlide('next');" class="arrowNext"
              ><i class="fas fa-chevron-circle-right"></i
            ></a>
            <ul class="listslider">
              <li>
                <a itlist="itList_0" href="#" class="item-select-slid"></a>
              </li>
              <li><a itlist="itList_1" href="#"></a></li>
              <li><a itlist="itList_2" href="#"></a></li>
            </ul>
            <ul id="slider">
              <li
                style="
                  background-image: url('https://cdn.pixabay.com/photo/2020/04/15/11/20/telework-5046230_1280.jpg');
                  z-index: 0;
                  opacity: 1;
                "
              >
                <div class="content_slider">
                  <div>
                    <h2>Computers & Accessories</h2>
                    <p>
                      Register and know the benefits, free shipping in less than 2 days!
                    </p>
                    <a href="#start-shopping" class="btnSlider">See More</a>
                  </div>
                </div>
              </li>
              <li
                style="
                  background-image: url('https://cdn.pixabay.com/photo/2018/02/20/10/28/business-3167295_960_720.jpg');
                "
              >
                <div class="content_slider">
                  <div>
                    <h2>Comfy styles for her</h2>
                    <p>
                      Show your style with our unbeatable wears
                    </p>
                    <a href="#start-shopping" class="btnSlider">See more</a>
                  </div>
                </div>
              </li>
              <li
                style="
                  background-image: url('https://cdn.pixabay.com/photo/2015/07/17/22/42/typing-849806_960_720.jpg');
                "
              >
                <div class="content_slider">
                  <div>
                    <h2>Electronics</h2>
                    <p>
                      Everything you need and prices that fit your budged
                    </p>
                    <a href="#start-shopping" class="btnSlider">See more</a>
                  </div>
                </div>
              </li>
            </ul>
          </section>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 text-left">
          <h2 class="pt-3">Top Categories</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.category_size"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <CategoryBox :category="categories[index - 1]"> </CategoryBox>
        </div>
      </div>
    </div>
    <div style="padding: 30px">
      <router-link :to="{ name: 'Category' }">
        <button
          class="btn btn-primary"
          style="background-color: #febd69; border-color: #febd69"
        >
          See all categories
        </button>
      </router-link>
    </div>
    <hr />
    <div id="start-shopping" class="container">
      <div class="row">
        <div class="col-12 text-left">
          <h2 class="pt-3">Top Products</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.product_size"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <ProductBox :product="products[index - 1]"> </ProductBox>
        </div>
      </div>
      <div style="padding: 30px">
        <router-link :to="{ name: 'AdminProduct' }">
          <button
            class="btn btn-primary"
            style="background-color: #febd69; border-color: #febd69"
          >
            See all products
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from "../components/Product/ProductBox";
import CategoryBox from "../components/Category/CategoryBox";
export default {
  name: "Home",
  components: { ProductBox, CategoryBox },
  props: ["baseURL", "products", "categories", "user"],
  data() {
    return {
      category_size: 0,
      product_size: 0,
    };
  },
  mounted() {
     console.log(this.user)
    this.category_size = this.categories.length;
    this.category_size = Math.min(6, this.category_size);
    this.product_size = this.products.length;
    this.product_size = Math.min(8, this.category_size);
  },
};
</script>

<style>
.page-holder {
  min-height: 100vh;
}
.bg-cover {
  background-size: cover !important;
}
#background-div {
  background: url(../assets/home.jpg);
}
#heading {
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  opacity: 0.8;
  font-family: "Josefin Sans", sans-serif;
}
#content {
  opacity: 0.8;
}
h2 {
  font-family: "Josefin Sans", sans-serif;
}
</style>