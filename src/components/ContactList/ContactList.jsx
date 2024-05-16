import { selectContacts, selectIsLoading } from "../../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import { selectNameFilter } from "../../redux/filtersSlice";
import { getVisibleContacts } from "../../helpers/getVisibleContacts";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const visibleContacts = getVisibleContacts(contacts, filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {visibleContacts.map((contact) => (
          <li key={contact.id} className={s.item}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
          }}
        >
          <RotatingLines
            visible={true}
            height="40"
            width="40"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </div>
      )}
    </>
  );
}

export default ContactList;
