import { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Home = () => {
	const { currentUser } = useContext(authContext);

	if (!currentUser) return <Navigate to="/auth" />;

	return <div>{currentUser.email}</div>;
};

export default Home;
