import { Outlet } from "react-router-dom";

const AuthLayout = () => {
	return (
		<section className="min-h-screen flex justify-between items-center">
			<Outlet />
			<img
				src="assets/images/wallpaper.jpg"
				className="hidden lg:block h-screen"
			/>
		</section>
	);
};

export default AuthLayout;
