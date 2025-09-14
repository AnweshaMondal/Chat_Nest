import React from 'react'
import Contact from './Contact';


function Users() {

const[allUsers, loading] = useGetAllUsers();
console.log(allUsers);

return (
    <div>
        <h1 className='px-8 py- h-7 text-white font-semibold bg-slate-800 rounded-md'>Messeges</h1>
        <div className='overflow-y-auto' style={{maxHeight:"calc(78vh)"}}>
            {allUsers.map((user,index)=>{
                <Contact key = {index} user = {user}/>
            })}
       </div>
    </div>
);
}

export default Users