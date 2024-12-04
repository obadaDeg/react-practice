import PropTypes from "prop-types";

export default function TableRow({ tableData }) {
  return (
    <tr>
      {tableData.map((element, idx) => (
        <td key={idx}>{element}</td>
      ))}
    </tr>
  );
}

TableRow.propTypes = {
  tableData: PropTypes.array.isRequired,
};
