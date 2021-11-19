import { ref, remove } from "@firebase/database";
import firebaseDb from "./firebase-db";

const deleteData: (id: string, path: string) => void = (id, path) => {
  const dbRef = ref(firebaseDb, `${path}/${id}`);
  remove(dbRef);
}

export default deleteData;