import apiSlice from "./apiSlice";


const productApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		postProduct: builder.mutation({
			query: (data) => ({
				method: "POST",
				url: "/order",
				body: data,
				headers:{
					'x-access-user': 'aimunnaharr@gmail.com'
				}
			}),
		}),
		getPoduct: builder.query({
			query: () => ({
				url: "products",
			}),
		}),
	}),
});

export const { usePostProductMutation, useGetPoductQuery } = productApi;
