import React, { Component } from 'react';

import { connect } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

const CollectionOverview = ({collections}) =>  {
  let collectionsMap =  Object.keys(collections).map(key => collections[key]);
    return(
        <div className='collections-overview'>
            {
                collectionsMap.map(
                    (collection) =>  {
                      return (<CollectionPreview key={collection.id} {...collection} />);                          
                    }   
                )
            }
        </div>
    );
}

const mapStateToProps = state => ({
  collections: selectShopCollections(state)
});

export default connect(mapStateToProps)(CollectionOverview);