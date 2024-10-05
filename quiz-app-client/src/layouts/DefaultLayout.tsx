import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
	return (
		<section>
			<Outlet />
		</section>
	);
};

export default DefaultLayout;
