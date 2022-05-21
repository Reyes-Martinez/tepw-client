<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">My Payment Methods</h4>
      </div>
    </div>
    <div style="padding: 30px">
      <router-link :to="{ name: 'AddAddress' }">
        <button
          class="btn btn-primary"
          style="background-color: #febd69; border-color: #febd69"
        >
         Add New Payment Method
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
  </div>
</template>

<script>
// var axios =  require('axios');
// import swal from 'sweetalert';
// export default {
//   data(){
//     return {
//       id : null,
//       categoryId : 0,
//       name : null,
//       description : null,
//       imageURL : null,
//       price : 0,
//       productIndex : null
//     }
//   },
//   props : ["baseURL", "products", "categories"],
//   methods : {
//     async editProduct() {
//       const updatedProduct = {
//         id : this.id,
//         categoryId : this.categoryId,
//         name : this.name,
//         description : this.description,
//         imageURL : this.imageURL,
//         price : this.price
//       }
//       await axios({
//         method: 'post',
//         url: this.baseURL+"product/update/"+this.id,
//         data : JSON.stringify(updatedProduct),
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       .then(() => {
//         //sending the event to parent to handle
//         this.$emit("fetchData");
//         this.$router.push({name : 'AdminProduct'});
//         swal({
//           text: "Product Updated Successfully!",
//           icon: "success",
//           closeOnClickOutside: false,
//         });
//       })
//       .catch(err => console.log("Hello", err));
//     }
//   },
//   mounted() {
//     this.id = this.$route.params.id;
//     this.productIndex = this.products.findIndex(product => product.id == this.id);
//     //input fields
//     this.categoryId = this.products[this.productIndex].categoryId;
//     this.name = this.products[this.productIndex].name;
//     this.description = this.products[this.productIndex].description;
//     this.imageURL = this.products[this.productIndex].imageURL;
//     this.price = this.products[this.productIndex].price;
//   }
// }
</script>

<style scoped>
h4 {
  font-family: "Roboto", sans-serif;
  color: #484848;
  font-weight: 700;
}
</style>