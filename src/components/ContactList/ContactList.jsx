import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ list, onDelete }) {
  return (
    <ul className={css.list}>
      {list.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
