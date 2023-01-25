import { useState } from "react"
import PetList from "../components/PetList";
import PetForm from "../components/PetForm"

const PetContainer = () => {
    const [pets, setPets] = useState([]);

    return (
        <>
            <PetList/>
            <PetForm/>
        </>
    )
    
}

export default PetContainer;
