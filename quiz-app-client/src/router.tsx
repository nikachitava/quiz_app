import { createBrowserRouter } from "react-router-dom";
import Authorization from "./pages/Authorization";
import Home from "./pages/Home";
import DefaultLayout from "./layouts/DefaultLayout";
import AuthLayout from "./layouts/AuthLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <DefaultLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
	{
		path: "/",
		element: <AuthLayout />,
		children: [
			{
				path: "/auth",
				element: <Authorization />,
			},
		],
	},
]);

export default router;
