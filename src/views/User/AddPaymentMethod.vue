<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">New Payment Method</h4>
      </div>
    </div>

    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home-tab-pane"
          type="button"
          role="tab"
          aria-controls="home-tab-pane"
          aria-selected="true"
        >
          Card
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile-tab-pane"
          type="button"
          role="tab"
          aria-controls="profile-tab-pane"
          aria-selected="false"
        >
          Paypal
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact-tab-pane"
          type="button"
          role="tab"
          aria-controls="contact-tab-pane"
          aria-selected="false"
        >
          Gift Card
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="disabled-tab"
          data-bs-toggle="tab"
          data-bs-target="#disabled-tab-pane"
          type="button"
          role="tab"
          aria-controls="disabled-tab-pane"
          aria-selected="false"
          disabled
        >
          Disabled
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home-tab-pane"
        role="tabpanel"
        aria-labelledby="home-tab"
        tabindex="0"
      >
       1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dignissimos, dolorem id distinctio facilis dicta possimus ullam fuga nisi impedit odio obcaecati tempore nostrum quasi quo expedita laboriosam, sunt modi!
      </div>
      <div
        class="tab-pane fade"
        id="profile-tab-pane"
        role="tabpanel"
        aria-labelledby="profile-tab"
        tabindex="1"
      >
       2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio dolores esse reprehenderit et debitis architecto repellat? Facere labore, explicabo hic porro natus nisi, sit nihil numquam sint dolorum repellat suscipit.
      </div>
      <div
        class="tab-pane fade"
        id="contact-tab-pane"
        role="tabpanel"
        aria-labelledby="contact-tab"
        tabindex="2"
      >
        3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia unde possimus modi. Animi natus magnam molestias placeat excepturi quasi repellendus perferendis eveniet! Suscipit, dolores recusandae. Hic nesciunt eos inventore?
      </div>
      <div
        class="tab-pane fade"
        id="disabled-tab-pane"
        role="tabpanel"
        aria-labelledby="disabled-tab"
        tabindex="3"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia unde possimus modi. Animi natus magnam molestias placeat excepturi quasi repellendus perferendis eveniet! Suscipit, dolores recusandae. Hic nesciunt eos inventore?
      </div>
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