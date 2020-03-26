import React from "react";

export default function DataTable_Countries({ data = [], fields = [] } = {}) {
  return data && data.length > 0 ? (
    <table>
      <tbody>
        {data.map((reg, i) => {
          return (
            <tr key={i}>
              <td>{reg[0]}</td>
              <td>{reg[1]}</td>
              <td>{reg[2]}</td>
              <td>{reg[3]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <div>Empty</div>
  );
}
