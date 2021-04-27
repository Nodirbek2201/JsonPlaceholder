import {useContext} from 'react'
import {MyContext} from '../App'
function Users(){

   const users = useContext(MyContext).users

    return <div className={'row users'}>
        {
            users.map(item=>{
                return <div key={item.id} className={'col-md-4 my-3'}>
                    <div className="users-item">
                        <div className="logo border-primary bg-dark"><span>{item.username.slice(0,1)}</span></div>
                        <p className={'username'}>{item.username}</p>
                        <p className={'name'}><b>Full name:</b> {item.name}</p>
                        <p className={'email'}><b>Email:</b> {item.email}</p>
                        <p className={'phone'}><b>Phone:</b> {item.phone}</p>
                        <p className={'website'}><b>Website:</b> <a href={`https://${item.website}/`}>{item.website}</a></p>
                        <p className={'address'}><b>Address:</b> {item.address.city+', '+item.address.street}</p>
                    </div>
                </div>
            })
        }
    </div>

}

export default Users