import { createSelector } from 'reselect';
import { create } from 'istanbul-reports';

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop =>shop.collections
);

export const selectCollectionSelector = collectionId => createSelector(
    [selectShopCollections],
    collections  => collections[collectionId]
);