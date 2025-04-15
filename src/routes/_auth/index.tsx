import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/")({
	component: App,
});

function App() {
	return <div>Home page</div>;
}
