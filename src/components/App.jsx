import { useState, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import FormikForm from "./FormikForm/FormikForm";
import ContactList from "./ContactList/ContactList";
import initialList from "../initiallist.json";

import css from "./App.module.css";
import searchbar from "./SearchBar/SearchBar.module.css";

const App = () => {
  const [list, setList] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialList;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(list));
  }, [list]);

  const addContact = newContact => {
    setList(prevList => {
      return [...prevList, newContact];
    });
  };

  const deleteTask = contactId => {
    setList(prevList => {
      return prevList.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = list.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <FormikForm onAdd={addContact} />
      <SearchBar
        className={searchbar.searchbar}
        value={filter}
        onFilter={setFilter}
      />
      <ContactList list={visibleContacts} onDelete={deleteTask} />
    </div>
  );
};

export default App;
