import Layout from '../components/Layout'
import '../styles/globals.css'
import {createStore} from 'redux'
import allReducers from "../components/reducer";
import {Provider} from "react-redux";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {PersistGate} from "redux-persist/integration/react";

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, allReducers);

function MyApp({Component, pageProps}) {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
            </PersistGate>
        </Provider>

    )
}

export default MyApp

