import PageTitle from '@/components/titles/PageTitle'
import { getMe } from '@/queries/users'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/usuarios/perfil')({
  component: RouteComponent,
  loader: async ({ context: { queryClient, auth } }) => {
    const token = auth.token
    if (!token) {
      throw redirect({
        to: '/login',
      })
    }

    const user = await queryClient.prefetchQuery({
      queryKey: ['users', 'me'],
      queryFn: () => getMe({ token }),
    })

    return {
      token,
      user,
    }
  },
  beforeLoad: () => getMe,
  pendingComponent: () => <div>Loading...</div>,
})

function RouteComponent() {
  const { token } = Route.useLoaderData()
  const meQuery = useSuspenseQuery({
    queryKey: ['users', 'me'],
    queryFn: () => getMe({ token }),
  })

  const user = meQuery.data
  return (
    <div>
      <PageTitle title='Perfil' />

      <div className='mb-4'>
        <p>
          <span className='text-success'>Nombre:</span> {user.name}
        </p>
        <p>
          <span className='text-success'>Email:</span> {user.email}
        </p>
      </div>

      <p className='text-sm text-primary/50'>
        Para modificar el perfil, favor contactar con el administrador
      </p>
    </div>
  )
}
