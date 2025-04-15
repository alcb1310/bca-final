const server = import.meta.env.VITE_SERVER_URL;

export const login = async (email: string, password: string) => {
  const res = await fetch(`${server}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error);
  }

  return await res.json();
};
