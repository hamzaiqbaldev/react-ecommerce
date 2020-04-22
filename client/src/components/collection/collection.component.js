import React from "react";
import {
  selectCollectionSelector,
  selectCollectionLoaded
} from "../../redux/shop/shop.selectors";
import CollectionItem from "../collection-item/collection-item.component";
import { connect } from "react-redux";

import Spinner from "../spinner/spinner.component";

import "./collection.styles.scss";

const Collection = ({ collection }) => {
  if(collection !== null) {
    const { title, items } = collection;
    return (
        <div className="collection-page">
        <div className="title">{title}</div>
        <div className="items">
            {items
            ? items.map(item => <CollectionItem key={item.id} item={item} />)
            : null}
        </div>
        </div>
    );
  } else {
      return(<Spinner />);
  }
  
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionSelector(ownProps.match.params.collectionId)(
    state
  )
});

export default connect(mapStateToProps)(Collection);
