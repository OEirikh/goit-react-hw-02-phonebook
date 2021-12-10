import React from "react";

function ContactsList({ list }) {
  return (
    <ul>
      {list.map(({ name, number, id }, idx) => (
        <li key={id}>
          <p>
            {idx + 1} - {name}: {number}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ContactsList;
