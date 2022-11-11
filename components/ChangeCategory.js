import { useContext, useState } from "react";
import styles from "../styles/Lagerbestand.module.css";
import TableLagerbestand from "../components/TableLagerbestand";
import AddProduct from "../components/AddProduct";
import { supabase } from "../utils/supabaseClient";
import { LagerbestandContext } from "../pages/lagerbestand";

export default function ChangeCategory() {
  const { fetchError } = useContext(LagerbestandContext);
  const [category, setCategory] = useState(null);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleAddProduct = (event) => {
    event.preventDefault();
    setShowAddProduct((current) => !current);
  };

  const handleCategoryChange = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase
      .from("lagerbestand")
      .select()
      .filter("category", "eq", event.target.value);
    if (error) {
      console.log(error);
    }
    if (data) {
      setCategory(data);
    }
  };
  return (
    <>
      <button
        className={styles.btn}
        value="Getreide"
        onClick={handleCategoryChange}
      >
        Getreide
      </button>
      <button
        className={styles.btn}
        value="Nudeln"
        onClick={handleCategoryChange}
      >
        Nudeln
      </button>
      <button className={styles.btn} value="Öl" onClick={handleCategoryChange}>
        Öl
      </button>
      <button className={styles.btn} onClick={handleAddProduct}>
        Neues Produkt
      </button>
      {showAddProduct && <AddProduct />}

      {fetchError && <p>{fetchError}</p>}
      {category && (
        <div className="container">
          <form className={styles.form}>
            <div className={styles.grid}>
              <div className={styles.grid_item}>
                <h5 className={styles.heading}>To Do</h5>
              </div>
              <div className={styles.grid_item}>
                <h5 className={styles.heading}>Titel</h5>
              </div>
              <div className={styles.grid_item}>
                <h5 className={styles.heading}>Aktuell verfügbar</h5>
              </div>
              <div className={styles.grid_item}>
                <h5 className={styles.heading}>Hinzufügen</h5>
              </div>
              <div className={styles.grid_item}>
                <h5 className={styles.heading}>Entnehmen</h5>
              </div>
              <div className={styles.grid_item}>
                <h5 className={styles.heading}></h5>
              </div>
              {category.map((category) => (
                <TableLagerbestand key={category.id} lagerbestand={category} />
              ))}
            </div>
          </form>
        </div>
      )}
    </>
  );
}
