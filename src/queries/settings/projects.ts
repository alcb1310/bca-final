import type { ProjectResponseType } from '@/types/settings/projects'

const url = import.meta.env.VITE_SERVER_URL

if (!url) throw new Error('VITE_SERVER_URL is not defined')

export async function getAllProjects({ token }: Readonly<{ token: string }>) {
  const response = await fetch(`${url}/parametros/proyectos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error)
  }

  return (await response.json()) as ProjectResponseType[]
}

export async function updateProject({
  token,
  project,
}: Readonly<{ token: string; project: ProjectResponseType }>) {
  const response = await fetch(`${url}/parametros/proyectos/${project.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(project),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error)
  }

  return (await response.json()) as ProjectResponseType
}
