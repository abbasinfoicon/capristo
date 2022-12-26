// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://quaint-ruby-garment.cyclic.app/' }),
  endpoints: (builder) => ({
    getContact: builder.query({
        query:()=>({
            url: "contact",
            method: 'GET'
        }),
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactQuery } = contactApi