import {useContext} from 'react'
import {MyContext} from '../App'

function Posts(){

    const posts = useContext(MyContext).posts

    return <div className={'row posts justify-content-center'}>
        {
            posts.map(item=>{
                return <div key={item.id} className={'col-md-6 my-3'}>
                    <div className="posts-item">
                        <h5 className={'text-center text-capitalize'}>{item.title}</h5>
                        <p>{item.body}</p>
                    </div>
                </div>
            })
        }
    </div>

}

export default Posts