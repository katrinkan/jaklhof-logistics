import AddRow from "./AddRow";
import TableContent from "./TableContent";

export default function TableAnsaatplan(props) {
  const ansaatplan = props.ansaatplan;
  const week = props.week;
  return (
    <>
      {ansaatplan && (
        <div className="container">
          <AddRow ansaatplan={ansaatplan} />
          {ansaatplan.map((ansaatplan) => (
            <TableContent
              week={week}
              key={ansaatplan.id}
              ansaatplan={ansaatplan}
            />
          ))}
        </div>
      )}
    </>
  );
}
