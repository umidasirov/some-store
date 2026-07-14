import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'
import router from './router/router.tsx'
import 'remixicon/fonts/remixicon.css'
import { createTheme, MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router'

const theme = createTheme({
  colors: {
    brand: [
      '#000000',
      '#F9F9F9',
      '#ff99bb',
      '#FF9E0C',
      '#ff4d87',
      '#e63370',
      '#cc005c',
      '#A30041',
      '#7a0031',
      '#520021',
    ],
  },
  primaryColor: 'brand',
  fontFamily: '"Inter", sans-serif',
  headings: {
    fontFamily: '"Work Sans", sans-serif',
    fontWeight: '700',
  },
  defaultRadius: 'lg',
  defaultGradient: { deg: 135, from: 'brand.6', to: 'brand.8' },
})

const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
