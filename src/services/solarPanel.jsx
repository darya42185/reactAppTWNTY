import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { v4 as uuidv4 } from "uuid";

// Define a service using a base URL and expected endpoints
export const solarPanelApi = createApi({
  reducerPath: "solarPanelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://testtask.twnty.de/",
  }),
  tagTypes: ["solar"],
  endpoints: (builder) => ({
    getSolarPanel: builder.query({
      query: () => ({
        method: "GET",
      }),
      transformResponse: (responseData) => {
        return Object.keys(responseData)?.map((key) => {
          return {
            name: key,
            id: uuidv4(),
            ...responseData[key],
          };
        });
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSolarPanelQuery } = solarPanelApi;
