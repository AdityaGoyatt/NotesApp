import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
// import "./index.css";
import theme from "./components/theme.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import "./assets/styles/fonts.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
