import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Filters'],
    endpoints: builder => ({
        getFilters: builder.query({
            query: () => '/filters',
            providesTags: ['Filters']
        })
    })
})

export const {useGetFiltersQuery} = apiSlice;