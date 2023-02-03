import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/categories'}),
    tagTypes: ['Weapons'],
    endpoints: builder => ({
        getWeapons: builder.query({
            query: (category = 'tanks') => `/${category}.json`,
            providesTags: ['Weapons']
        }),
        changeCategory: builder.mutation({
            query: (category) => ({
                url: `/${category}/.json`,
                method: 'GET'
            }),
            invalidatesTags: ['Weapons']
        })
    })
})

export const {useGetWeaponsQuery, useChangeCategoryMutation} = apiSlice;