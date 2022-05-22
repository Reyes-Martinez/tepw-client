<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">New Payment Method</h4>
      </div>
    </div>

    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a
          class="nav-link active"
          id="home-tab"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
          >Credit/Card</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="profile-tab"
          data-toggle="tab"
          href="#profile"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
          >Paypal</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          id="contact-tab"
          data-toggle="tab"
          href="#contact"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
          >Other</a
        >
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sunt
        error autem vel nesciunt, dolorum tempore facilis? Hic aliquam
        voluptatibus dolor, at eligendi dolorum, quis laborum debitis commodi
        recusandae voluptatum!
      </div>
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sunt
        error autem vel nesciunt, dolorum tempore facilis? Hic aliquam
        voluptatibus dolor, at eligendi dolorum, quis laborum debitis commodi
        recusandae voluptatum!
      </div>
      <div
        class="tab-pane fade"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sunt
        error autem vel nesciunt, dolorum tempore facilis? Hic aliquam
        voluptatibus dolor, at eligendi dolorum, quis laborum debitis commodi
        recusandae voluptatum!
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