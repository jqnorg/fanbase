import { initializeApp } from "firebase/app";

import {getFirestore, query, getDocs,getDoc, doc, collection, where} from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyBgYoKqOUqLlbY_Egdh2rTrACPcd0EhiQY",

  authDomain: "unicos-860c7.firebaseapp.com",

  projectId: "unicos-860c7",

  storageBucket: "unicos-860c7.appspot.com",

  messagingSenderId: "50738184227",

  appId: "1:50738184227:web:26e4a395155142434df196",

  measurementId: "G-02DB5LXTB1"

};

// Initialize Firebase

const appFirebase = initializeApp(firebaseConfig);

const appFirestore = getFirestore(appFirebase);

export async function getProducts() {
    const productsCollection = collection(appFirestore, "products");
    const productsSnapshot = await getDocs(productsCollection);
  
    let answer = productsSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
  
    return answer;
  }

export async function getProductsByCategory(categoryId) {
    const productCollection = collection(appFirestore, "products");
    const q = query(productCollection, where("category", "==", categoryId));
    const productsSnapshot = await getDocs(q);

    let answer = productsSnapshot.docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        };
    });

    return answer;
}

export async function getProductById(itemId) {
    const docref = doc(appFirestore, "products", itemId);
    const docSnapshot = await getDoc(docref);
    return {
        id: docSnapshot.id,
        ...docSnapshot.data(),
    };
}

