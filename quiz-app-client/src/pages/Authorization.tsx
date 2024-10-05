import LoginForm from "@/components/custom/LoginForm";
import RegisterForm from "@/components/custom/RegisterForm";
import { useState } from "react";

const Authorization = () => {
	const [isLoginPage, setIsLoginPage] = useState(true);

	const toggleLoginPage = () => {
		setIsLoginPage((isLoginPage) => !isLoginPage);
	};

	return isLoginPage ? (
		<LoginForm toggleLoginPage={toggleLoginPage} />
	) : (
		<RegisterForm toggleLoginPage={toggleLoginPage} />
	);
};

export default Authorization;
