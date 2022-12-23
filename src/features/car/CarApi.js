// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const carApi = createApi({
  reducerPath: 'carApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://quaint-ruby-garment.cyclic.app/' }),
  endpoints: (builder) => ({
    getAllCar: builder.query({
        query:()=>({
            url: "carList",
            method: 'GET'
        }),
    }),
    
    getSingleCar: builder.query({
      query: (slug) => ({
          url: `carList/?slug=${slug}`,
          method: 'GET'
      }),
  }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCarQuery, useGetSingleCarQuery } = carApi