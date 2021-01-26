const products = [
	{
		id: 1,
		name: 'iPhone 11 128GB Black',
		price: 1219,
		img: 'product-1.png',
	},
	{
		id: 2,
		name: 'iPhone 11 Silicone Case - Black',
		price: 59,
		img: 'product-2.png',
	},
];
const cartItems = [];
let subTotalPrice = 0;

// render total price
const subTotalPriceDom = document.querySelector('#subTotal__Price');
const totalPriceDom = document.querySelector('#total__price');
const totalTexDom = document.querySelector('#tex');
const renderTotal = (total) => {
	const tex = (10 / 100) * total;
	const texTotal = tex.toFixed(2);
	subTotalPriceDom.innerText = total;
	totalTexDom.innerText = texTotal;
	totalPriceDom.innerText = total + tex;
};

// Calculate total price

const calculateTotalPrice = (products) => {
	let total = 0;
	products.map((price) => {
		total = price.price + total;
	});
	subTotalPrice = total;
	renderTotal(subTotalPrice);
};
calculateTotalPrice(products);

const itemInit = () => {
	products.map((item) => {
		let cartItem = {
			id: item.id,
			qun: 1,
		};
		cartItems.push(cartItem);
	});
};
itemInit();
// find price by id
const findPrice = (id) => {
	for (let i = 0; i < cartItems.length; i++) {
		if (productId == cartItems[i].id) {
			cartItems[i].qun = cartItems[i].qun - 1;
			subTotalPrice = subTotalPrice - parseFloat(productPrice.innerText);
		}
	}
};

const priceUpdatePlus = (id, price) => {
	const quantity = document.querySelector(`#input${id}`);
	const productId = id;
	quantity.value = parseInt(quantity.value) + 1;
	for (let i = 0; i < cartItems.length; i++) {
		if (productId == cartItems[i].id) {
			cartItems[i].qun = cartItems[i].qun + 1;
			subTotalPrice = subTotalPrice + price;
		}
	}
	console.log(subTotalPrice, cartItems);
	renderTotal(subTotalPrice);
};

const priceUpdateMinus = (id, price) => {
	const quantity = document.querySelector(`#input${id}`);
	const productId = id;
	for (let i = 0; i < cartItems.length; i++) {
		if (productId == cartItems[i].id) {
			if (cartItems[i].qun > 1) {
				quantity.value = parseInt(quantity.value) - 1;
				cartItems[i].qun = cartItems[i].qun - 1;
				subTotalPrice = subTotalPrice - price;
			} else {
				console.log('sorry');
			}
		}
	}
	console.log(subTotalPrice, cartItems);
	renderTotal(subTotalPrice);
};

const checkout = document.querySelector('#checkout');
checkout.addEventListener('click', () => {
	console.log(cartItems);
});
