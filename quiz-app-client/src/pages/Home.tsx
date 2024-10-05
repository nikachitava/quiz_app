import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import NavBar from "@/components/custom/NavBar";

const Home = () => {
	const { currentUser } = useContext(AuthContext);

	if (!currentUser) return <Navigate to="/auth" />;

	return (
		<div>
			<NavBar />
		</div>
	);
};

export default Home;
