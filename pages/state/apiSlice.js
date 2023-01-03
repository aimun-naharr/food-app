import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const apiSlice=createApi({
     reducerPath: 'api',
     baseQuery: fetchBaseQuery({ baseUrl: 'https://munchies-api.up.railway.app' }),
     endpoints: (builder)=>({})
})

export default apiSlice