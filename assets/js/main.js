import loader from './components/loader.js';
import showMenu from './components/showMenu.js';
import showCart from './components/showCart.js';
import products from './components/products.js';
import getProducts from './helpers/getProducts.js';
import cart from './components/cart.js';


/* UI Elements */
/* OCULTAR LOADER */
loader()

/* Mostrar menu */
showMenu()

/* Mostrar Cart */
showCart()
/*END UI Elements */


/* PRODUCTS */
const {db, printProducts} = products(await getProducts())

/* CARRITO */
cart(db, printProducts)