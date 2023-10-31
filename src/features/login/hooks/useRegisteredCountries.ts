import { get, ref } from "firebase/database"
import { useEffect, useState } from "react"
import { database } from "../../../config/firebase/firebase.config"
import { getRegisteredCountries } from "../../../data/constValues/database/paths/databasePaths"

export const useRegisteredCountries = () => {
  const [registeredCountries, setRegisteredCountries] = useState<string[]>();

  useEffect(() => {
    const fetchRegisteredCountries = async () => {
      const registeredCountriesRef = ref(database, getRegisteredCountries())
      const snapshot = await get(registeredCountriesRef);
      if(snapshot.exists()) {
        setRegisteredCountries(Object.keys(snapshot.val()));
      }
    }

    fetchRegisteredCountries();
  }, []);

  return registeredCountries;
}