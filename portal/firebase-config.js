// Configuração do projeto Firebase "Lmotion"
// Estes valores são públicos por natureza (não são senhas) — é assim que o Firebase
// identifica o projeto no navegador. A segurança real fica nas Regras do Firestore.
const firebaseConfig = {
  apiKey: "AIzaSyDZAJcCOF2BJJdiGT4xVZDW-Bxjn_iREYs",
  authDomain: "lmotion.firebaseapp.com",
  projectId: "lmotion",
  storageBucket: "lmotion.firebasestorage.app",
  messagingSenderId: "397717026069",
  appId: "1:397717026069:web:cf8ab1a28fb86b1f6da51c"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
