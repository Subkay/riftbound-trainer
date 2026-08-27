export type ChampionName = 'Viktor'

export interface Card {
  champion: ChampionName
  name: string
  energyCost: number
  powerCost: number
  domains: string[]
  cardType: string
  timing: string
  effectText: string
}
