import { ref, set } from "firebase/database";
import firebaseDb from "./firebase-db";

const writeData: (dbPath: string, newData: {}) => void = (dbPath, newData) => {
  set(ref(firebaseDb, dbPath), newData);
};

export default writeData;