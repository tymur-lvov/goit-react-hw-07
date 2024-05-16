import { Toaster } from "react-hot-toast";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <h1 style={{ textAlign: "center", marginTop: "24px" }}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
