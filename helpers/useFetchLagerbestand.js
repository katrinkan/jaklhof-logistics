import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function useFetchLagerbestand() {
  const [fetchError, setFetchError] = useState(null);
  const [lagerbestand, setLagerbestand] = useState(null);

  useEffect(() => {
    const fetchLagerbestand = async () => {
      const { data, error } = await supabase
        .from("lagerbestand")
        .select()
        .order("title", { ascending: true });

      if (error) {
        setFetchError("Could not fetch Lagerbestand");
        setLagerbestand(null);
        console.log(error);
      }
      if (data) {
        setLagerbestand(data);
        setFetchError(null);
      }
    };
    fetchLagerbestand();
  }, []);

  return { lagerbestand, fetchError };
}
