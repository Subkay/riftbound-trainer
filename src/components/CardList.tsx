import type { Card } from '../types/card'

interface CardListProps {
  cards: Card[]
}

export function CardList({ cards }: CardListProps) {
  if (cards.length === 0) {
    return (
      <p className="empty-state" role="status">
        No playable cards at this Energy.
      </p>
    )
  }

  return (
    <ul className="card-list" aria-label="Playable cards">
      {cards.map((card) => (
        <li className="card" key={card.name}>
          <header className="card-header">
            <h3>{card.name}</h3>
            <span className="energy-cost">Energy {card.energyCost}</span>
          </header>
          <dl>
            <div>
              <dt>Power Cost</dt>
              <dd>{card.powerCost}</dd>
            </div>
            <div>
              <dt>Domains</dt>
              <dd>{card.domains.join(', ')}</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>{card.cardType}</dd>
            </div>
            <div>
              <dt>Timing</dt>
              <dd>{card.timing}</dd>
            </div>
          </dl>
          <p>{card.effectText}</p>
        </li>
      ))}
    </ul>
  )
}
