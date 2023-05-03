import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpisResponse,
  
} from "./types";

const baseUrl = import.meta.env.VITE_BASE_URL; // Replace with your own environment variable or hardcoded URL

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: "main",
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      query: () => "kpi/kpis",
      providesTags: ["Kpis"]
    })
  })
})

export const { useGetKpisQuery } = api;