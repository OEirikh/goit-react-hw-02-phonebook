import React from "react";

function ContactsList({ list, onDeleteContact }) {
  return (
    <ul>
      {list.map(({ name, number, id }, idx) => (
        <li key={id}>
          <p>
            {idx + 1} - {name}: {number}
            <button
              type="button"
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ContactsList;
