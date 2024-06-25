import Card from '../card/card.component';
import { User } from "../../App";
import './card-list.styles.css';

type CardListProps = {
    monsters: User[]
}

export default function CardList({monsters}: CardListProps) {
    return <div className='card-list'>
        {monsters.map(monster =>
            <Card key={monster.id} monster={monster}/>
        )}
    </div>
}