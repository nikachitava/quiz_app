"use client";

import LoginForm from "@/components/ui/custom/LoginForm";
import RegistrationForm from "@/components/ui/custom/RegistrationForm";
import { useState } from "react";

const Authorization = () => {
	const [isLoginPage, setisLoginPage] = useState(true);

	const toogleLoginPage = () => {
		setisLoginPage((isLoginPage) => !isLoginPage);
		console.log(isLoginPage);
	};

	return isLoginPage ? (
		<LoginForm toogleLoginPage={toogleLoginPage} />
	) : (
		<RegistrationForm toogleLoginPage={toogleLoginPage} />
	);
};

export default Authorization;
