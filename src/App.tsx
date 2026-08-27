import { useMemo, useState } from 'react'
import { CardList } from './components/CardList'
import { cards } from './data/cards'
import { champions } from './data/champions'
import { getPlayableCards } from './lib/threats'
import type { ChampionName } from './types/card'
import './App.css'

function App() {
  const [selectedChampion, setSelectedChampion] = useState<ChampionName>('Viktor')
  const [remainingEnergy, setRemainingEnergy] = useState(0)

  const playableCards = useMemo(
    () => getPlayableCards(cards, selectedChampion, remainingEnergy),
    [selectedChampion, remainingEnergy],
  )

  return (
    <main className="app-shell">
      <section className="panel">
        <h1>Riftbound Threat Trainer</h1>
        <p className="subtitle">
          Predict what your opponent can still play this turn.
        </p>

        <div className="controls">
          <label>
            Opponent Champion
            <select
              value={selectedChampion}
              onChange={(event) =>
                setSelectedChampion(event.target.value as ChampionName)
              }
            >
              {champions.map((champion) => (
                <option key={champion} value={champion}>
                  {champion}
                </option>
              ))}
            </select>
          </label>

          <label>
            Remaining Energy: <strong>{remainingEnergy}</strong>
            <input
              type="range"
              min={0}
              max={10}
              step={1}
              value={remainingEnergy}
              onChange={(event) => setRemainingEnergy(Number(event.target.value))}
            />
          </label>
        </div>
      </section>

      <section className="panel">
        <h2>Playable Cards</h2>
        <CardList cards={playableCards} />
      </section>
    </main>
  )
}

export default App
