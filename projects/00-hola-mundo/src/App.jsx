import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernández',
        isFollowing: false
    },
    {
        userName: 'javiersalinas64',
        name: 'Javier Salinas Albornoz',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomás Delgado',
        isFollowing: false
    }
]

export function App() {
    return (
        <section className='App'>
            { // Lo que devuelve el mapeo de usuarios es lo que queremos renderizar, llaves para evaluar
                users.map(({ userName, name, isFollowing}) =>  (// Se hace un mapeo en la lista "users", donde se extraerá lo siguiente
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                )
            }
        </section>
    )
}