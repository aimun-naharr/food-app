import apiSlice from "./apiSlice";


const productApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		postProduct: builder.mutation({
			query: (data) => ({
				method: "POST",
				url: "/products/createNew",
				body: data,
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
