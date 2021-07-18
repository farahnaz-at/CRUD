import React, {useState,useContext} from "react";
import {GlobalContext} from "../context/GlobalState";
import {Link,useHistory} from "react-router-dom";
import {v4 as uuid} from 'uuid';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button

} from 'reactstrap'

export const AddUser = () => {
    const [name,setName] = useState('');
    const {addUser} = useContext(GlobalContext);
    const history= useHistory();
    const onSubmit = () => {
        const newUser ={
            id:uuid(),
            name
        }
        addUser(newUser);
        history.push('/')
    }

    const onChange =(e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label>Name:</Label>
                    <Input className='m-lg-1' type="text" placeholder="Enter Name"  value={name} onChange={onChange}></Input>
                </FormGroup>
                <Button type='submit' className='m-2 btn btn-primary'>Submit</Button>
                <Link to='/' className="btn btn-danger ml-2">Cancle</Link>

            </Form>
        </div>
    )
}
