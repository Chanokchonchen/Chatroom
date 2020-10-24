import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { Button } from "@material-ui/core";
import SearchList from "./SearchList"
function SearchBar() {
  const [input, setInput] = useState<string>("");
  const [show , setShow] = useState(false)
  function handleChange(e : React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value
    setInput(val);
  }
  function handleClose() {
    setShow(false)
  }
  function sendBack(data : string) {
    setInput(data)
    setShow(false)
  }
  return (
    <div style={{padding:"0 10%"}}>
      <InputGroup onClick={()=> {
        setShow(true)
      }
      } className="mb-3">
        <FormControl
          name="input"
          onChange={handleChange}
          value={input}
          placeholder="Search"
        />
        <InputGroup.Append>
          <Button onClick={()=>{
            console.log(input)
            setInput("")
          }}>Search</Button>
        </InputGroup.Append>
      </InputGroup>
      <SearchList sendBack={sendBack} show={show} handleClose={handleClose} />
    </div>
  );
}
export default SearchBar;
