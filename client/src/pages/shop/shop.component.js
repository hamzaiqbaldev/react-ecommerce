import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import Collection from '../../components/collection/collection.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.util';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { selectCollectionLoaded } from '../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends Component {

    
     componentDidMount() {
        this.props.fetchCollections();
    }

    render() {
        const { isCollectionLoaded } = this.props;
        return(
        <div className='shop-page'>
            <Route exact={true} path={`${this.props.match.path}`} component={CollectionOverview} />
            <Route path={`${this.props.match.path}/:collectionId`} component={Collection}/>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    isCollectionLoaded: selectCollectionLoaded(state)

});

const mapDispatchToProps = dispatch => ({
    fetchCollections: () => dispatch(fetchCollectionStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);