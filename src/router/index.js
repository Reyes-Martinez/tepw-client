import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AddCategory from "../views/Category/AddCategory";
import Category from "../views/Category/Category";
import Product from "../views/Product/Product";
import Admin from "../views/Admin";
import AddProduct from "../views/Product/AddProduct";
import EditCategory from "../views/Category/EditCategory";
import EditProduct from "../views/Product/EditProduct";
import ShowDetails from "../views/Product/ShowDetails";
import WishList from "../views/Product/WishList";
import ListProducts from "../views/Category/ListProducts";
import Signup from "../views/Signup";
import Signin from "../views/Signin";
import Cart from "../views/Cart";

//User
import Address from "../views/User/Address";
import AddAddress from "../views/User/AddAddress";

//Payment
import Success from "../views/payment/Success";
import Failed from "../views/payment/Failed";
import Checkout from "../views/order/MakeOrder";
import PaymentMethod from "../views/User/PaymentMethod";
import AddPaymentMethod from "../views/User/AddPaymentMethod";

//Reports
import Reports from "../views/Reports/Reports";

//Orders
import OrderHistory from "../views/order/OrderHistory";
import OrderDetails from "../views/order/OrderDetails";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // category detail page
  {
    path: "/category/show/:id",
    name: "ListProducts",
    component: ListProducts,
  },
  {
    path: "/admin/category/add",
    name: "AddCategory",
    component: AddCategory,
  },
  {
    path: "/admin/category",
    name: "Category",
    component: Category,
  },
  // category edit
  {
    path: "/admin/category/:id",
    name: "EditCategory",
    component: EditCategory,
  },
  // admin home page
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/admin/product",
    name: "AdminProduct",
    component: Product,
  },
  // add product
  {
    path: "/admin/product/new",
    name: "AddProduct",
    component: AddProduct,
  },
  // edit product
  {
    path: "/admin/product/:id",
    name: "EditProduct",
    component: EditProduct,
  },

  // show details of product
  {
    path: "/product/show/:id",
    name: "ShowDetails",
    component: ShowDetails,
  },

  // sign up and signin

  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/wishlist",
    name: "WishList",
    component: WishList,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },

  // sucess and fail pages
  {
    path: "/payment/success",
    name: "PaymentSuccess",
    component: Success,
  },

  {
    path: "/payment/failed",
    name: "PaymentFail",
    component: Failed,
  },

  // checkout

  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },

  //user
  {
    path: "/user/address",
    name: "Address",
    component: Address,
  },
  {
    path: "/user/AddAddress",
    name: "AddAddress",
    component: AddAddress,
  },
  {
    path: "/user/paymentMethod",
    name: "PaymentMethod",
    component: PaymentMethod,
  },
  {
    path: "/user/AddPaymentMethod",
    name: "AddPaymentMethod",
    component: AddPaymentMethod,
  },

  //Reports
  {
    path: "/admin/Reports",
    name: "Reports",
    component: Reports,
  },

  //Orders
  {
    path: '/orders',
    name: 'OrderHistory',
    component: OrderHistory
  },
  {
    path:'/order/:id',
    name:'OrderDetails',
    component: OrderDetails
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
