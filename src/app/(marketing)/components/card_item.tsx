import {Card} from "../utils/cards"

interface Props {
  card: Card
}

function CardItem({card}: Props) {
  return (
    <li>
      <div className="flex flex-col gap-3">
        <div>
          <card.image />
        </div>
        <div>
          <h3 className="text-2xl font-bold">{card.title}</h3>
          <p className="">
            {card.description}{" "}
            <span className="font-bold text-slate-900">&rarr;</span>
          </p>
        </div>
      </div>
    </li>
  )
}

export default CardItem
