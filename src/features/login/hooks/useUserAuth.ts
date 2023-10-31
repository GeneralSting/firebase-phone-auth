import {
  RecaptchaVerifier,
  User,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../config/firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth/cordova";

export const useUserAuth = () => {
  const [userAuth, setUserAuth] = useState<User | null>(null);
  const [renderedRecaptcha, setRenderedRecaptcha] = useState<RecaptchaVerifier | undefined>();
  const [firstRendering, setFirstRendering] = useState<boolean>(true);

  const preRenderRecaptcha = (userNumber: string) => {
    if(firstRendering) {
      const recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: function () {
            setFirstRendering(false)
          },
          "expired-callback": () => {
            alert("reCAPTCHA has expired. Please solve it again.");
            // You can also trigger the reCAPTCHA to render again, if needed.
            recaptchaVerifier.render();
          },
        }
      );
      recaptchaVerifier.render();
      setRenderedRecaptcha(recaptchaVerifier)
      return signInWithPhoneNumber(auth, userNumber, recaptchaVerifier);
    }
    else {
      if(renderedRecaptcha) {
        return signInWithPhoneNumber(auth, userNumber, renderedRecaptcha);
      }
    }
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserAuth(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    userAuth,
    preRenderRecaptcha,
    logOut,
  };
};
