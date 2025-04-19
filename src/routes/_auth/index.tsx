import Greet from '@/components/greet/Greet'
import { getMe } from '@/queries/users'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/')({
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
      <Greet name={user.name} />
    </div>
  )
}
