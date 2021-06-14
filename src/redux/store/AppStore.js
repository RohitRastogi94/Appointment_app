import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';


const AppStore = createStore(
  rootReducer,
  applyMiddleware(),
);


export default AppStore;