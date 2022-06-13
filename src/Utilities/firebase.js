// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  where,
  addDoc,
  collection,
  deleteDoc,
  doc,
  
} from "firebase/firestore";
import { getDatabase, ref, onValue, set, get, child } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuHCN25WRQ7THUy2paezcYmx0reLd_SbM",
  authDomain: "dauthclient.firebaseapp.com",
  projectId: "dauthclient",
  storageBucket: "dauthclient.appspot.com",
  messagingSenderId: "588055944940",
  appId: "1:588055944940:web:3f8f6db83afd881eff0fc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const realTimeDB = getDatabase(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (authCb) => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    authCb(user);
    document.cookie = `authToken=${await user.getIdToken()}`;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    console.log("some error occured in auth", error);
  }
};

export const logOut = () => {
  signOut(auth);
};

export const queryServer = async () => {
  const docs = await getDocs(collection(db, "users"));
  docs.docs.map((data) => console.log(data.data()));
};

export const getDevices = async (uid) => {
  const q = query(collection(db, "devices"), where("uid", "==", uid));
  const { docs } = await getDocs(q);
  return new Promise((resolve, reject) => {
    if (docs.length) {
      let ArrayOfData = [];
      docs.map((data) => ArrayOfData.push(data.data()));
      resolve(ArrayOfData);
    } else {
      resolve([]);
    }
  });
};

export const addDevice = async (deviceMeta) => {
  try {
    await addDoc(collection(db, "devices"), deviceMeta);
  } catch (error) {
    console.log("error adding device", error);
  }
};

export const removeDevice = async (deviceId) => {
  const q = query(collection(db, "devices"), where("deviceId", "==", deviceId));
  const { docs } = await getDocs(q);
  if (docs.length) {
    const docRef = doc(db, "devices", docs[0].id);
    await deleteDoc(docRef);
  }
};

export const watchDevice = (id = 788984, cb) => {
  const databaseRef = ref(realTimeDB, "devices");

  setInterval(() => {
    get(databaseRef).then((snapshot) => {
      const isAct = Date.now() - snapshot.val()[id].deviceState < 8000;
      if (cb) {
        cb(isAct);
      }
    });
  }, 10000);
  // onValue(databaseRef, (snapshot) => {
  //     const isAct = Date.now() - snapshot.val()[788984].deviceState < 8000;
  //     if (cb) {
  //       cb(isAct);
  //     }
  //     const isAct = Date.now() - snapshot.val()[788984].deviceState < 8000;
  //     if (cb) {
  //       cb(isAct);
  //     }
  // });
};

export const putDate = (id = 788984) => {
  const databaseRef = ref(realTimeDB, `devices/${id}/deviceState`);
  set(databaseRef, Date.now());
};

export const getAllUsers = async () => {
  const docCollection = collection(db, "users");
  const { docs } = await getDocs(docCollection);
  return new Promise((resolve, reject) => {
    if (docs.length) {
      let ArrayOfData = [];
      docs.map((data) => ArrayOfData.push(data.data()));
      resolve(ArrayOfData);
    } else {
      resolve([]);
    }
  });
};
