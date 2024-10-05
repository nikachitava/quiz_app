import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router.tsx";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/theme-provider.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<AuthContextProvider>
				<RouterProvider router={router} />
			</AuthContextProvider>
		</ThemeProvider>
	</StrictMode>
);
