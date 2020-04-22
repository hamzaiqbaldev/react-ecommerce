import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDUYN1xZVNRn4hPUnPDDN0_rUFqBp6GeVk",
    authDomain: "react-clothing-store-2bafd.firebaseapp.com",
    databaseURL: "https://react-clothing-store-2bafd.firebaseio.com",
    projectId: "react-clothing-store-2bafd",
    storageBucket: "react-clothing-store-2bafd.appspot.com",
    messagingSenderId: "844483255354",
    appId: "1:844483255354:web:ff6034cecb1610a6816903",
    measurementId: "G-TWM731XF4H"
  };

  firebase.initializeApp(config);
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(userRef);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };


  export const addCollectionAndItems = (collection, itemsToAdd) => {
    const collectionRef = firestore.collection(collection);
    
    const batch = firestore.batch();

    itemsToAdd.forEach(item => {
      const newDocRef = collectionRef.doc();

      batch.set(newDocRef, item);
    });

    return batch.commit();
  };

  export const convertCollectionSnapshotToMap = (collection) => {
    const convertedSnapShot = collection.docs.map(doc => {
      const {title, items} = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      };
    });
    return convertedSnapShot.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;