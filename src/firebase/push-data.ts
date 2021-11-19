import LearningResource from "@/models/learning-resource";
import { push, ref } from "@firebase/database";
import firebaseDb from "./firebase-db";

const pushData: (newResource: LearningResource, path: string) => void = (newResource, path) => {
  const dbRef = ref(firebaseDb, path);
  push(dbRef,newResource)
};

export default pushData;