import LoginForm from "@/components/custom/LoginForm";
import RegisterForm from "@/components/custom/RegisterForm";
import { useState } from "react";

const Authorization = () => {
	const [isLoginPage, setIsLoginPage] = useState(true);

	const handleLoginPage = () => {
		setIsLoginPage((isLoginPage) => !isLoginPage);
	};

	return isLoginPage ? (
		<LoginForm hadleLoginPage={handleLoginPage} />
	) : (
		<RegisterForm hadleLoginPage={handleLoginPage} />
	);
};

export default Authorization;
