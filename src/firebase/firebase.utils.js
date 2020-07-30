import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyCd18ZNDsUT04HLf8GMFY32LJorjERcmHg',
  authDomain: 'cool-clothing.firebaseapp.com',
  databaseURL: 'https://cool-clothing.firebaseio.com',
  projectId: 'cool-clothing',
  storageBucket: 'cool-clothing.appspot.com',
  messagingSenderId: '36335287853',
  appId: '1:36335287853:web:f67d0e844991df0cec02a4',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const createUserProfileDocuemnt = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const registeredAt = new Date();
    const { email } = userAuth;

    try {
      await userRef.set({
        email,
        registeredAt,
        ...additionalData,
      });
    } catch (error) {}
  }
  return userRef;
};

export const convertCategoriesSnapshotToMap = (categoriesSnapshot) => {
  const transformedCategories = categoriesSnapshot.docs.map((docSnapshot) => {
    const { title, items } = docSnapshot.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items,
    };
  });

  return transformedCategories.reduce((accumulator, category) => {
    accumulator[category.title.toLowerCase()] = category;
    return accumulator;
  }, {});
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const auth = firebase.auth();

export default firebase;
