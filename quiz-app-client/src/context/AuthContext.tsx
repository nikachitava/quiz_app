import { createContext, ReactNode, useState } from "react";
import { IUser } from "../interfaces/IUser";

interface AuthContextProviderProps {
	children: ReactNode;
}

const AUTH_CONTEXT_DEFAULT_VALUES: authContextTypes = {
	currentUser: null,
	setCurrentUser: () => {},
};

interface authContextTypes {
	currentUser: null | IUser;
	setCurrentUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const authContext = createContext<authContextTypes>(
	AUTH_CONTEXT_DEFAULT_VALUES
);

export const authContextProvoider = ({
	children,
}: AuthContextProviderProps) => {
	const [currentUser, setCurrentUser] = useState<IUser | null>(null);

	<authContext.Provider value={{ currentUser, setCurrentUser }}>
		{children}
	</authContext.Provider>;
};
