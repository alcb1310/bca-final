import { useTheme } from "@/providers/theme-provider";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
	const theme = useTheme();

	function themeToggle() {
		theme.setTheme(theme.theme === "dark" ? "light" : "dark");
	}

	return (
		<Button variant="ghost" size="icon" onClick={themeToggle}>
			{theme.theme === "dark" ? <Sun /> : <Moon />}
		</Button>
	);
}
