import React , {useState} from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import MailIcon from '@material-ui/icons/Mail';
import { ChatBoxProps } from "../../type";



const Chatbox = (props : ChatBoxProps) => {
  const {handleSubmit} = props
  const [message,setMessage] = useState<string>("")

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }
  const handleForm = (e : React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(message)
    setMessage("")
  }

  return (
    <>
      <div className="panel-footer fixed-bottom">
        <form onSubmit={handleForm}>
          <InputGroup >
            <FormControl
              value={message}
              onChange={handleChange}
              placeholder="Enter message"
            />
            <InputGroup.Append>
              <Button disabled={message.length ? false : true} type="submit" style={{padding:"0 12px"}} variant="light"><MailIcon style={{color:"#F55E61"}} /></Button>
            </InputGroup.Append>
          </InputGroup>
        </form>
      </div>
    </>
  );
};
export default Chatbox;
