import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const existingProduct = state.cart.find((product) => product.id === action.payload.id);
			if (existingProduct) {
				let newCart = state.cart.filter((product) => product.id !== existingProduct.id);
				existingProduct.quantity = existingProduct.quantity + 1;
				state.cart = [...newCart, existingProduct];
			} else state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
		},
		increaseQuantity: (state, action) => {
			state.cart = state.cart.map((item) => {
				if (item.id === action.payload.id && action.payload.quantity < action.payload.quantity_available) {
					item.quantity++;
				}
				return item;
			});
		},
		decreaseQuantity: (state, action) => {
			state.cart = state.cart.map((item) => {
				if (item.id === action.payload.id && item.quantity > 0) {
					item.quantity--
				}
				return item;
			});
		},
	},
});

export const { addToCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
