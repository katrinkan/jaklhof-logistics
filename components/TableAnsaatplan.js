import { useContext } from "react";
import { AnsaatplanContext } from "../pages/ansaatplan";
import AddRow from "./AddRow";
import TableContent from "./TableContent";

export default function TableAnsaatplan(props) {
  const { ansaatplan, weekSelect, handleDelete } =
    useContext(AnsaatplanContext);

  return (
    <>
      {ansaatplan && (
        <div className="container">
          <AddRow />
          {ansaatplan.map((ansaatplan) => (
            <TableContent key={ansaatplan.id} ansaatplan={ansaatplan} />
          ))}
        </div>
      )}
    </>
  );
}
