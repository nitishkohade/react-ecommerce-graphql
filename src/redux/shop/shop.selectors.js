import {createSelector} from 'reselect'

const selectShop = state => state.shop;

export const getShopCollecions = createSelector(
    [selectShop],
    (shop) => shop.collections ? Object.values(shop.collections) : []
)

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)