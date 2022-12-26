// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const sliderApi = createApi({
  reducerPath: 'sliderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://quaint-ruby-garment.cyclic.app/' }),
  endpoints: (builder) => ({
    getAllSlider: builder.query({
        query:()=>({
            url: "slider",
            method: 'GET'
        }),
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllSliderQuery } = sliderApi