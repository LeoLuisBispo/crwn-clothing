import firebase from 'firebase/app';

import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('bcpJw4OlOJ6xNMkIOjuV').collection('cartItems').doc('yBRm3oAHwXgoTubIm6Ru')

// firestore.doc('/users/bcpJw4OlOJ6xNMkIOjuV/cartItems/yBRm3oAHwXgoTubIm6Ru')