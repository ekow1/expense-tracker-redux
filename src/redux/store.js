import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {expenseReducer} from './reducer'


const persistConfig = {
    key: "expense-tracker",
    storage,
  };

  const pReducer = persistReducer(persistConfig, expenseReducer);


  const Store = createStore(pReducer);
  const persistor = persistStore(Store);
  export default Store;
  export { persistor };
  