import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";
import {Link} from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap'



export const UserList = () => {
    const {users, removeUser} = useContext(GlobalContext);
    return (
       <ListGroup className='mt-2'>
           {users.length> 0 ? (
               <>
                   {users.map(user => (
                       <ListGroupItem key={user.id} className=''>
                           <strong className='mr-auto p-2'>{user.name}</strong>
                           <div className=''>
                               <Link className='btn btn-warning m-1 col-3' to={`/edit/${user.id}`}>Edit</Link>
                               <Button onClick={()=> removeUser(user.id)} color='danger' className='col-3 ' >Delete</Button>
                           </div>
                       </ListGroupItem>
                   ))}
               </>
           ) : (
               <h4 className="text-center">No User</h4>
           )}

       </ListGroup>

    )
}
