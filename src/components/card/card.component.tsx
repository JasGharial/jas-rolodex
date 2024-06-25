import { User } from "../../App"

import './card.styles.css'

type CardProps = {
    monster: User
}

export default function Card({monster}: CardProps) {
    return <div className='card-container'>
                <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2`} />
                <h2>{monster.name}</h2>
                <p>{monster.email}</p>
            </div>
}