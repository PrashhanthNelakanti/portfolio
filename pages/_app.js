import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/Layout'
import '../styles/globals.css'
import {createStore} from 'redux'
import allReducers from "../components/reducer";
import {Provider} from "react-redux";

const store = createStore(
    allReducers);

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
        <ChakraProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
        </Provider>

    )
}

export default MyApp
