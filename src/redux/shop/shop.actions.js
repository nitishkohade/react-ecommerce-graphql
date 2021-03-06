import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import ShopActionsTypes from "./shop.types";

// export const updateCollections  = (collectionsMap) => ({
//     type: ShopActionsTypes.UPDATE_COLLECTIONS,
//     payload: collectionsMap
// })

export const fetchCollectionsStart  = () => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess  = (collectionsMap) => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure  = (errorMessage) => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

// this is to be run by redux-thunk
export const fetchCollectionsStartAsync  = () => dispatch => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionsStart())
    collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionsSuccess(collectionsMap))
    }).catch(
        error => dispatch(fetchCollectionsFailure(error.message))
    )
}

// export const fetchCollectionsStartAsync  = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections')
//         dispatch(fetchCollectionsStart())
//         collectionRef.get().then(snapshot => {
//             const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
//             dispatch(fetchCollectionsSuccess(collectionsMap))
//         }).catch(
//             error => dispatch(fetchCollectionsFailure(error.message))
//         )
//     }
// }