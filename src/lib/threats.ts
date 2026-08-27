import type { Card, ChampionName } from '../types/card'

export function getPlayableCards(
  allCards: Card[],
  champion: ChampionName,
  remainingEnergy: number,
): Card[] {
  return allCards
    .filter(
      (card) => card.champion === champion && card.energyCost <= remainingEnergy,
    )
    .sort((a, b) => a.energyCost - b.energyCost || a.name.localeCompare(b.name))
}
