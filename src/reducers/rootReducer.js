import productsReducer from './productsReducer';
import productsByIDReducer from './productsByIDReducer';
import appReducer from './appReducer';
import activePageReducer from './activePageReducer';
import selectedProductReducer from './selectedProductReducer';

//TODO: use combineReducers

const webshop = {
    products: {},
    productsByID: {},
    category: null,
    activePage: 'loading',
    selectedProductID: null
};

const rootReducer = (state = webshop, action) => {
    return {
        products: productsReducer(state.products, action),
        productsByID: productsByIDReducer(state.productsByID, action),
        category: appReducer(state.category, action),
        activePage: activePageReducer(state.activePage, action),
        selectedProductID: selectedProductReducer(state.selectedProductID, action)
    };
}

export default rootReducer;