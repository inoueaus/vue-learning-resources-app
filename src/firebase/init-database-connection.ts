import { ref, onValue } from "firebase/database";
import firebaseDb from "./firebase-db";

const initDatabaseConnection: (vueRef: { value: any }, dbDir: string, loading: any) => void = (
  vueRef,
  dbDir,
  loading
) => {
  const dbRef = ref(firebaseDb, dbDir);
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    vueRef.value = data;
    loading.value = false;
  });
};

export default initDatabaseConnection;
