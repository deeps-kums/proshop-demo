import { PRODUCTS_URL, UPLOAD_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({keyword, pageNumber}) => ({
        url: PRODUCTS_URL,
        params:  {keyword, pageNumber}
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Products'],
    }),
    getProductDetails: builder.query({
        query: (productId) => ({
            url: `${PRODUCTS_URL}/${productId}`,
          }),
        keepUnusedDataFor: 5,
        providesTags: ['Products'],
      }),
      createProduct: builder.mutation({
        query: () => ({
          url: `${PRODUCTS_URL}`,
          method: 'POST',
        }),
        invalidatesTags: ['Product'],
      }),
      updateProduct: builder.mutation({
        query: (data) => ({
          url: `${PRODUCTS_URL}/${data.productId}`,
          method: 'PUT',
          body: data,
        }),
        invalidatesTags: ['Products'],
      }),
      deleteProduct: builder.mutation({
        query: (productId) => ({
          url: `${PRODUCTS_URL}/${productId}`,
          method: 'DELETE',
        }),
        providesTags: ['Product'],
      }),
      uploadProductImage: builder.mutation({
        query: (data) => ({
          url: `${UPLOAD_URL}`,
          method: 'POST',
          body: data,
        }),
      }),
      createReview: builder.mutation({
        query: (data) => ({
          url: `${PRODUCTS_URL}/${data.productId}/reviews`,
          method: 'POST',
          body: data,
        }),
        invalidatesTags: ['Product'],
      }),
      getTopProducts: builder.query({
        query: () => `${PRODUCTS_URL}/top`,
        keepUnusedDataFor: 5,
      }),
}),
});

export const {
    useGetProductsQuery,
    useGetProductDetailsQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useUploadProductImageMutation,
    useCreateReviewMutation,
    useGetTopProductsQuery
} = productsApiSlice;;