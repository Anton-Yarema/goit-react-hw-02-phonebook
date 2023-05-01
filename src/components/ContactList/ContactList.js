import React from 'react';
import PropTypes from 'prop-types';
import ElementContactItem from 'components/ElementContactItem/';

const ContactList = ({ onFiltred, onDeleteContact }) => {
  // const normalizedFilter = value.toLowerCase();
  // const filterContacts = data.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );

  return (
    <ul>
      {onFiltred().map(contact => (
        <ElementContactItem
          key={contact.id}
          {...contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  value: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
