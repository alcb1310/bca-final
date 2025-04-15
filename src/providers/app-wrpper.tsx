import { StrictMode, type ReactNode } from "react";
import * as TanstackQuery from "../integrations/tanstack-query/root-provider";
import { ThemeProvider } from "./theme-provider";

export default function AppWrapper({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<StrictMode>
			<TanstackQuery.Provider>
				<ThemeProvider defaultTheme="light" storageKey="ui-theme">
					{children}
				</ThemeProvider>
			</TanstackQuery.Provider>
		</StrictMode>
	);
}
