// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Create User
const auth: Auth = getAuth(app);

export async function CreateAccount(
  email: string,
  password: string
): Promise<void> {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      'example__email@gmail.com',
      'example__password'
    );
    const user = userCredential.user;
    console.log("Account created:", user);
    alert("Account created successfully");
    // You might want to return the user object or dispatch an action here
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error creating account:", errorCode, errorMessage);
    alert(`Error creating account: ${errorMessage}`); // Display more informative error
    // Handle specific error codes (e.g., weak-password, email-already-in-use) for better UI feedback
  }
}
