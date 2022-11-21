import { useContext } from "react";
import { AnsaatplanContext } from "../pages/ansaatplan";
import { supabase } from "../utils/supabaseClient";

export default function DeleteRow({ ansaatplan }) {
  const { onDelete } = useContext(AnsaatplanContext);
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("ansaatplan")
      .delete()
      .eq("id", ansaatplan.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      onDelete(ansaatplan.id);
    }
  };

  return (
    <input type="submit" id="delete" value="Löschen" onClick={handleDelete} />
  );
}
