import React from 'react';

import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import Collection from '../../components/collection/collection.component';


const ShopPage = ({match}) => {
    console.log('collection item');
    console.log(match.params);
    return (
        <div className='shop-page'>
            <Route exact={true} path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    );
}
export default ShopPage;