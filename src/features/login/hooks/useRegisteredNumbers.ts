import { DataSnapshot, off, onValue, ref } from "firebase/database";
import { database } from "../../../config/firebase/firebase.config";
import { getRegisteredNumbers } from "../../../data/constValues/database/paths/databasePaths";
import { useEffect, useState } from "react";
import { IRegisteredNumbers } from "../interfaces/IRegisteredNumbers";

export const useRegisteredNumbers = () => {
  const [registeredNumbers, setRegisteredNumbers] =
    useState<IRegisteredNumbers | null>(null);

  useEffect(() => {
    const registeredNumbersRef = ref(database, getRegisteredNumbers());

    const handleDataChange = (snapshot: DataSnapshot) => {
      const numbers = snapshot.val();
      setRegisteredNumbers(numbers);
    };

    onValue(registeredNumbersRef, handleDataChange);

    return () => {
      off(registeredNumbersRef, "value", handleDataChange);
    };
  }, []);

  useEffect(() => {
    if (registeredNumbers === null) {
      const collectRegisteredNumbers = () => {
        return new Promise<IRegisteredNumbers>((resolve, reject) => {
          const registeredNumbersRef = ref(database, getRegisteredNumbers());
          onValue(
            registeredNumbersRef,
            (snapshot) => {
              resolve(snapshot.val());
            },
            (error) => {
              // Handle the error here, e.g., show a toast or report it
              reject(error);
            }
          );
        });
      };

      collectRegisteredNumbers().then((numbers: IRegisteredNumbers) => {
        setRegisteredNumbers(numbers);
      });
    }
  }, [registeredNumbers]);

  const findMatchingNumber = (userNumber: string) => {
    if (registeredNumbers === null) {
      return null;
    }

    for (const cafeId in registeredNumbers) {
      if (Object.prototype.hasOwnProperty.call(registeredNumbers, cafeId)) {
        const phoneNumbers = registeredNumbers[cafeId];
        if (userNumber in phoneNumbers) {
          return phoneNumbers[userNumber];
        }
      }
    }

    return null; // Return null if no match is found
  };

  return findMatchingNumber;
};
