<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">My Address</h4>
      </div>
    </div>
    <div style="padding: 30px">
      <router-link :to="{ name: 'AddAddress' }">
        <button
          class="btn btn-primary"
          style="background-color: #febd69; border-color: #febd69"
        >
         Add New Address
        </button>
      </router-link>
    </div>

    <div class="features pt-3">
          <h5><strong>My Address</strong></h5>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Officia quas, officiis eius magni error magnam voluptatem</li>
            <li>nesciunt quod! Earum voluptatibus quaerat dolorem doloribus</li>
            <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
            <li>ut doloremque dolore corrupti, architecto iusto beatae.</li>
          </ul>
        </div>
    <!-- <div class="row">
            <div v-for="address of addresses" :key="address.id"
                 class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
                <AddressBox :address="address"/>
            </div>
      </div> -->

  </div>
      

</template>

<script>
import AddressBox from "../../components/Address/AddressBox";

export default {
  name: "Home",
  components: { AddressBox },
  props: ["baseURL", "addresses"],
  data() {
    return {
      category_size: 1,
      product_size: 0,
      addresses : [
  {
    "address": "Direccion ejemeplo",
    "city": "ciudad ejemplo",
    "id": 0,
    "imageURL": "qwe",
    "postal_code": "asasd",
    "country": "celaya"
  },{
    "address": "Direccion ejemeplo",
    "city": "ciudad ejemplo",
    "id": 1,
    "imageURL": "qwe",
    "postal_code": "asasd",
    "country": "celaya"
  }],
    };
  },
  mounted() {
    // this.category_size = this.categories.length;
    // this.category_size = Math.min(6, this.category_size);
    // this.product_size = this.products.length;
    // this.product_size = Math.min(8, this.category_size);
  },
};
</script>


<style scoped>
h4 {
  font-family: "Roboto", sans-serif;
  color: #484848;
  font-weight: 700;
}
</style>