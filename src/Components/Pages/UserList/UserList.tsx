import { useEffect, useState } from "react";
import "./UserList.css";
import { Result, Root } from "../../../Models/UserListModel";
import axios from "axios";

function UserList(): JSX.Element {
    const[userlist,setUserList] =useState<Result[]>([])
    
    useEffect(()=>{ 
		axios.get<Root>('https://randomuser.me/api/?results=10')
        .then(res =>{setUserList(res.data.results)})
        .catch(err => {console.log(err)})
    },[])
    return (
        <div className="UserList">
			  {userlist.map(u => <p key={'user'+u.id}> {u.id.name},{u.name.first},{u.phone},{u.picture.thumbnail},{u.registered.age}</p>)}
        </div>
    );

    }
export default UserList
