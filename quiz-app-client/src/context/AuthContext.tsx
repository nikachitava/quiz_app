import { createContext, ReactNode, useState } from "react";
import { IUser } from "../interfaces/IUser";
import { makeRequest } from "@/lib/axios";

interface AuthContextProviderProps {
	children: ReactNode;
}

const AUTH_CONTEXT_DEFAULT_VALUES: AuthContextTypes = {
	currentUser: null,
	setCurrentUser: () => {},
	logout: () => {},
};

interface AuthContextTypes {
	currentUser: IUser | null;
	setCurrentUser: React.Dispatch<React.SetStateAction<IUser | null>>;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextTypes>(
	AUTH_CONTEXT_DEFAULT_VALUES
);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
	children,
}) => {
	const [currentUser, setCurrentUser] = useState<IUser | null>(null);

	const logout = async () => {
		try {
			await makeRequest.post("user/logout", null, {
				withCredentials: true,
			});
			setCurrentUser(null);
			localStorage.removeItem("user");
			console.log("pressss logout");
		} catch (error) {
			console.log("logout error", error);
		}
	};

	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
