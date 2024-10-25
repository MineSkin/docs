import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { createStoreWithoutState } from "docusaurus-theme-openapi-docs/lib/theme/ApiItem/store";

// Placeholder reducer (replace this with any actual reducers if needed)
const rootReducer = combineReducers({
    // Add reducers here if needed
});

// Create Redux store
const openApiStore = createStoreWithoutState({}, []);

export default openApiStore;