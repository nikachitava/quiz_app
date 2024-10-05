import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
	const { currentUser, logout } = useContext(AuthContext);

	if (!currentUser) return <Navigate to="/auth" />;

	return (
		<div>
			{currentUser.email}
			<Button onClick={logout}>Log out</Button>
		</div>
	);
};

export default Home;
