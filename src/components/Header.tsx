import { Link } from "@tanstack/react-router";
import ThemeToggle from "./theme/theme-toggle";

export default function Header() {
	return (
		<header className="p-2 flex gap-2 bg-muted text-muted-foreground justify-between items-center">
			<nav className="flex flex-row">
				<div className="flex gap-3 px-2 font-bold">
					<Link to="/" className="uppercase font-bold tracking-wide">
						Sistema Control Presupuestario
					</Link>

					<Link to="/login">Login</Link>
				</div>
			</nav>

			<ThemeToggle />
		</header>
	);
}
