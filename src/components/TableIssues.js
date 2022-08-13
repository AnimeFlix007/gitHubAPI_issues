import React from "react";
import "../assets/css/tableissues.css";

const TableIssues = ({ data, loading }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>S No.</th>
          <th>Title</th>
          <th>Number</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 && data.map((item, index) => {
          return (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.number}</td>
              <td className={item.state}>{item.state}</td>
            </tr>
          );
        })}

        {data.length === 0 && <h1>No Data Found.</h1>}
      </tbody>
    </table>
  );
};

export default TableIssues;
