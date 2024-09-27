"use client";

import { createContext, PropsWithChildren, useState } from "react";

interface AuthContext {
	user: boolean;
}

export const AuthContext = createContext<AuthContext>({ user: false });

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState(false);
	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};
