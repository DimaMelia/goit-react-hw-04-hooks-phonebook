import ContactListItem from '../ContactListItem/ContactListItem';

function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          id={id}
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ContactList;
