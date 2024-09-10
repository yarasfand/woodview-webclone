import { configureStore, compose, applyMiddleware } from '@reduxjs/toolkit'
import { landingSliceReducer } from '../storefeatures/storeFeatures'

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const makeStore = () => {
    return configureStore({
        reducer: {
            landingSliceReducer,
        },
        // enhancers: (applyMiddleware())?
    },)
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']