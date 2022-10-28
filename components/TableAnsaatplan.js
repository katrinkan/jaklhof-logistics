import TableContent from "./TableContent";

export default function TableAnsaatplan(props) {
  const ansaatplan = props.ansaatplan;
  const week = props.week;
  console.log(week);
  return (
    <>
      {ansaatplan && (
        <div className="container">
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
