import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyByjN0mSA-SYB_wYStOm4JbhhhbgIEmNao",
    authDomain: "modern-cart.firebaseapp.com",
    projectId: "modern-cart",
    storageBucket: "modern-cart.appspot.com",
    messagingSenderId: "545812621008",
    appId: "1:545812621008:web:37c72a10afc2a80fd3a0d5",
    measurementId: "G-3PXFZ44M5H"
  };

  firebase.initializeApp(config)
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
      const {displayName, email} = userAuth
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        // console.log('error creating user', error.message)
      }
    }

    return userRef
  }

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()
    objectsToAdd.forEach(
      obj => {
        const newDocRef = collectionRef.doc(obj.title)
        batch.set(newDocRef, obj)
      }
    )
    return await batch.commit()
  }
 
  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(
      doc => {
        const {title, items} = doc.data()

        return {
          routeName: encodeURI(title.toLowerCase()),
          id: doc.id,
          title, items
        }
      }
    )

    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection
      return accumulator
    }, {})
  }

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase