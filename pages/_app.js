import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
  return(
    <ChakraProvider>
       <Layout>
      <Component {...pageProps} />
     </Layout>
    </ChakraProvider>
    
  )   
}

export default MyApp
