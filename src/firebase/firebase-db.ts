import { getDatabase } from "firebase/database";
import firebaseApp from "./initialize-firebase";

const firebaseDb = getDatabase(firebaseApp);

export default firebaseDb;