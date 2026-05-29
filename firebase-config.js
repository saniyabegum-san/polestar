import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDG1YtNvm2fCcxObyGJntkpfqRlPHpHd0Y",
  authDomain: "polestar-s1209.firebaseapp.com",
  projectId: "polestar-s1209",
  storageBucket: "polestar-s1209.firebasestorage.app",
  messagingSenderId: "205770812460",
  appId: "1:205770812460:web:b6bec02d1039888bb67589",
  measurementId: "G-T06K3M67V5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);