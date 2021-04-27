import { useContext, useEffect, useState } from 'react'
import { MyContext } from '../App'

function Tasks() {

    const [state, setState] = useState([])

    const tasks = useContext(MyContext).tasks
    // users dan ismlar olish uchun foydalanyapman
    const users = useContext(MyContext).users

    //tasks da kelgan ma`lumotlarni userId bo`yicha guruhlab olmoqchiman
    useEffect(function () {
        let arr1 = []
        let arr2 = []
        let id = 1
        tasks.forEach(item => {
            if (item.userId === id) {
                arr1.push(item)
                console.log(arr1)
            } else {
                id = id + 1
                arr2.push(arr1)
                arr1 = []
            }
        })

        setState(arr2, id, 'arr2')
    }, [tasks])


    console.log(state)

    return <div className={'row tasks'}>
        {
            state.map((item, index) => {
                return <div className={'col-md-6 my-3'}>
                    <div className="tasks-item">
                        <h2 className={'name'}>{users[index].name}</h2>
                        {
                            item.map((element, index) => {
                                return <ul key={element.id} className={'list-group'}>
                                    <p className={''}>
                                        <span className={'title'}>{(index + 1) + '.  ' + element.title}</span>
                                        <span className={'active'}><input type="checkbox" checked={element.completed} /></span></p>
                                </ul>
                            })
                        }
                    </div>
                </div>
            })
        }
    </div>

}

export default Tasks