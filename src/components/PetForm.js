import { useState } from "react";

const PetForm = () => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState("");

    return (
        <form>
            <h2> Tell us about your pet:</h2>
            <input
                type="text"
                placeholder="Pet's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Type of pet"
                value={type}
                onChange={(e) => setType(e.target.value)}
            />
            <input
                type="text"
                placeholder="Pet's breed"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                min="0"
                onChange={(e) => setAge(e.target.value)}
            />
            <button type="submit"> OK</button>
        </form>
    )
}

export default PetForm;