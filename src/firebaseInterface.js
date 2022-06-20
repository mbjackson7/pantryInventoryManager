import db from "./firebase";
import { collectionGroup, onSnapshot, query, getDocs, setDoc, doc } from "firebase/firestore";

export async function fetchAllData(){
  const q = query(collectionGroup(db, "pantry"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const documents = [];
    snapshot.forEach((doc) => {
      documents.push(doc.data());
    });
    console.log("All Data Fetched");
    console.log(documents);
    return documents;
  });
}

export async function setImage(image){
  await setDoc(doc(db, "images", "receipt"), {
    data: image,
  });
}