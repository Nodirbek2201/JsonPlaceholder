import {useEffect,createContext, useReducer} from 'react'
// Routerdan takrorlash uchun foydalanyapman
import {Link, Route, Switch, Redirect} from 'react-router-dom'
import axios from "axios";
import Users from "./Components/Users";
import Tasks from "./Components/Tasks";
import Posts from "./Components/Posts";

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

function reducer(state,action){
    switch (action.type){
        case 'setUsers': return {...state, users:action.value}
        case 'setPosts': return {...state, posts:action.value}
        case 'setTasks': return {...state, tasks:action.value}
        default: return state
    }
}

// useContextdan bilimimni mustahkamlash uchun foydalanyapman
export const MyContext = createContext()


function App(){

    // Bu yerda useReducer dan bilimimni mustahkamlash uchun foydalanyapman
    const [state,dispatch]= useReducer(reducer,{
        users:[],
        posts:[],
        tasks:[]
    })

    useEffect(()=>{
        axios.request({
            url: 'https://jsonplaceholder.typicode.com/users',
            method:'get'
        }).then(response=>{
            dispatch({
                type:'setUsers',
                value: response.data
            })
        })

        axios.request({
            url:'https://jsonplaceholder.typicode.com/posts',
            method:'get'
        }).then(response=>{
            dispatch({
                type:'setPosts',
                value:response.data
            })
        })

        axios.request({
            url:'https://jsonplaceholder.typicode.com/todos',
            method:'get'
        }).then(response=>{
            dispatch({
                type:'setTasks',
                value:response.data
            })
        })
    },[])


    return(
    <MyContext.Provider value={state}>
    <div className={'container app'}>
        <div className="row mt-5">
            <div className="col-md-12">
                <ul className={'menu'}>
                    <Link to={'/users'} className={'nav-link'}>Users</Link>
                    <Link to={"/posts"} className={'nav-link'}>Posts</Link>
                    <Link to={"/tasks"} className={'nav-link'}>Tasks</Link>
                </ul>

                <Switch>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                    <Route path={'/tasks'} component={Tasks}/>
                    <Redirect to={'/users'}/>
                </Switch>
            </div>
        </div>
    </div>
    </MyContext.Provider>)
}

export default App