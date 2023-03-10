
import { ContactForm } from "components/ContactForm/ContactsForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/loader/Loader";


import { Box } from "Box";

import { getIsLoading } from "redux/contactsSlice";
import { getError } from "redux/contactsSlice";
import { useSelector } from "react-redux";


export const PhoneBook = () => {

    const error = useSelector(getError);
    const isLoading = useSelector(getIsLoading)

    return (
        <Box width='450px'>
            <Box as="h2" p="16px" display="flex" justifyContent='center'>Phonebook</Box>
            <ContactForm />

            {isLoading && !error && <Loader />}
            
            <Box as="h2" p="16px" display="flex" justifyContent='center'>Contacts</Box>
            <Filter />
            <ContactList />
        </Box>
    );
};
