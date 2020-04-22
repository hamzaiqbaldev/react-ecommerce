import { shopActionTypes } from "./shop.types";

import {
  firestore,
  convertCollectionSnapshotToMap
} from "../../firebase/firebase.util";

export const updateCollections = collections => {
  return dispatch => {
    dispatch();
  };
};

export const fetchCollectionStart = () => {
  return {
    type: shopActionTypes.FETCH_COLLECTION_START
  };
};

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    dispatch(fetchCollectionStart());
    const collectionRef = firestore.collection("collections");
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionFailure(error.message)));
  };
};

export const fetchCollectionSuccess = collections => ({
  type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collections
});

export const fetchCollectionFailure = message => ({
  type: shopActionTypes.fetchCollectionFailure,
  payload: message
});
