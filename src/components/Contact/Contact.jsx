import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <div>
          <div className={css.item}>
            <FaUser size="18" />
            {name}
          </div>
          <div className={css.item}>
            <FaPhoneAlt size="18" />
            {number}
          </div>
        </div>
      </div>

      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
