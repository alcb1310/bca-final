import { Button } from "../ui/button";

export default function Greet({ name }: { name?: string }) {
  if (name) return <h1>Bienvenido {name}</h1>;

  return <Button>Login</Button>
}
