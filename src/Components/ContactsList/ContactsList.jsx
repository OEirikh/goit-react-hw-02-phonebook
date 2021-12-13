import React from "react";
import PropTypes from "prop-types";

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

ContactsList.propTypes = {
  list: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
