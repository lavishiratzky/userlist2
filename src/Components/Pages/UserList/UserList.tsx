import { useEffect, useState } from "react";
import "./UserList.css";
import { Result, Root } from "../../../Models/UserListModel";
import axios from "axios";

function UserList(): JSX.Element {
    const[userList,setUserList] =useState<Result[]>([])
    const tableHeaders =["name","first name", "phone", "picture","age"]
    useEffect(()=>{ 
		axios.get<Root>('https://randomuser.me/api/?results=10')
        .then(res =>{setUserList(res.data.results)})
        .catch(err => {console.log(err)})
    },[])
    return (
        <div className="UserList">
             <table>
       <thead>
        <tr>
         {tableHeaders.map(t=><th key={t}>{t}</th>)}   
            </tr>    
            </thead> 
            <tbody>
            {userList.map(u => <tr key={'user'+u.id}><td> {u.id.name}</td>,<td>{u.name.first}</td>,<td>{u.phone}</td>,<td><img src={u.picture.thumbnail} alt={u.name.first} /></td>,<td>{u.registered.age}</td></tr>)}
      

            </tbody>
            </table>
            </div>
    );

    }
export default UserList
