const url = `${import.meta.env.VITE_SERVER_URL}/api/v1`
if (!url) {
  throw new Error('VITE_BACKEND_SERVER is not defined')
}

export async function loginProcedure({
  email,
  password,
}: { email: string; password: string }) {
  const response = await fetch(`${url}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error)
  }

  return await response.json()
}
