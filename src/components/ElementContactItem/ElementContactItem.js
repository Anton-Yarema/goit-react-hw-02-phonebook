import React from "react";
import css from './elementContactItem.module.css'

const ElementContactItem = ({value, data, onDeleteContact}) => {
    
    const normalizedFilter = value.toLowerCase();
    const filterContacts = data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <ul>
        {filterContacts.map(({ id, name, number }) => (
          <li className={css.contactsItem} key={id}>
            {name}: {number}
                <button className={css.btnBlockItem} type="submit"
                    onClick={() => onDeleteContact(id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    );
  };


export default ElementContactItem;