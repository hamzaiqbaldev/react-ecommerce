import React from 'react';
import { selectCollectionSelector } from '../../redux/shop/shop.selectors';
import CollectionItem from '../collection-item/collection-item.component';
import { connect } from 'react-redux';

import './collection.styles.scss';

const Collection = ({collection}) => 
    {
        console.log(collection);
        return (
            <div className='collection-page'>
                <div className='title'>{collection.title}</div>
                <div className='items'>
                {
                    collection.items.map((item) => <CollectionItem item={item} />)
                }
                </div>                
            </div>
        );
    }


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollectionSelector(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);