import { createSelector } from 'reselect';
import { create } from 'istanbul-reports';

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop =>shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollectionSelector = collectionId => createSelector(
    [selectShopCollections],
    collections  => collections ? collections[collectionId]: null
);

export const selectCollectionLoaded = createSelector(
    [selectShop],
    shop => (shop.collections) ? true: false
)