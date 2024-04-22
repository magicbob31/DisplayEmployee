import React, { useState } from "react";

function DisplayEmployee() {
  const [employee, setEmployee] = useState(null);

  const getEmployee = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="DisplayEmployee">
      {employee && (
        <>
          <img src={employee.picture.medium} alt={employee.name.first} />
          <ul>
            <li>Gender: {employee.gender}</li>
            <li>
              Name: {employee.name.title} {employee.name.last}{" "}
              {employee.name.first}
            </li>
            <li>E-mail: {employee.email}</li>
            <li>
              Location: {employee.location.street.number}{" "}
              {employee.location.street.name}, {employee.location.postcode}{" "}
              {employee.location.city}
            </li>
          </ul>
        </>
      )}
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
    </div>
  );
}

export default DisplayEmployee;
