import "../styles/globals.css"
import Layout from '#/layout'
import { RecoilRoot } from "recoil"
import { ToastContainer } from 'react-toastify'
import { QueryClientProvider,QueryClient } from "react-query"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
   <RecoilRoot>
    <QueryClientProvider client={queryClient} >
    <Layout>
    <Component {...pageProps} />
    </Layout>
    <ToastContainer/>
    </QueryClientProvider>
   </RecoilRoot>
  )
}
