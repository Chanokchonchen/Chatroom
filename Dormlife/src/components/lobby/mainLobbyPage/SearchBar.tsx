import React , {useState} from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { SearchLobbyProps } from "../../type";



const SearchBar = (props : SearchLobbyProps) => {
    const {handleSubmit} = props
    const [search, setSearch] = useState<string>("");
    const handleChange =  (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearch(value)
    }
    return (
        <div>
        <InputGroup>
            <FormControl
            onChange={handleChange}
            value={search}
            placeholder="Search"
            />
            <InputGroup.Append>
            <button onClick={() => {
                handleSubmit(search)
            }} >Search</button>
            </InputGroup.Append>
        </InputGroup>
        </div>
    );
};
export default SearchBar
