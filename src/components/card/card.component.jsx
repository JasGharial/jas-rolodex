import './card.styles.css'

export default function Card({monster}) {
    return <div className='card-container'>
                <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2`} />
                <h2>{monster.name}</h2>
                <p>{monster.email}</p>
            </div>
}