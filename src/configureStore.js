import { createStore } from 'redux';

/** home reducer */
import homePageReducer from 'containers/HomePage/reducer';

export default function configureStore() {
    /** setup store */
    const store = createStore(
        homePageReducer,
        // setup redux dev tools
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

    return store;
}