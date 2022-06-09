import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// const persistConfig = {
//   key: 'main-root',
//   storage

// }
// const persistedReducer = persistReducer(persistConfig, reducers)

const makeStore = () =>{
  const persistConfig = {
    key: "root",
    storage: storage,
    whiteList: [],
  };
  const persistedReducer = persistReducer(persistConfig, reducers);
  const store :any = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
  store.__persisitor = persistStore(store); 
  return store;
}
 

export const Persistor = persistStore(makeStore());



export const wrapper = createWrapper(makeStore);





// BINDING MIDDLEWARE
// const bindMiddleware = (middleware) => {
//   if (process.env.NODE_ENV !== "production") {
//   return composeWithDevTools(applyMiddleware(...middleware));
//   }
//    return applyMiddleware(...middleware);
//   };
  
  
//   const makeStore = ({ isServer }) => {
//   if (isServer) {
//   //If it's on server side, create a store
//   return createStore(rootReducer,initialState, bindMiddleware(middleware));
//   } else {
//   //If it's on client side, create a store which will persis
//   const persistConfig = {
//     key: "root",
//     storage: storage,
//     whiteList: [],
//   };
//   const persistedReducer = persistReducer(persistConfig, rootReducer);
//   const store = createStore(persistedReducer,initialState, bindMiddleware(middleware));
//   store.__persisitor = persistStore(store); // This creates a persistor object & push that 
//   persisted object to .__persistor, so that we can avail the persistability feature
//   return store;
//   }
//   };
//   // export an assembled wrapper
//   export const wrapper = createWrapper(makeStore);