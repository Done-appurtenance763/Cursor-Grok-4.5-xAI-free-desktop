import { useState } from 'react'
import CloudScene from './components/Cloud'
import RaindropShape from './components/Drop'
import type { RaindropData } from './types'

const CLOUD_LAYER = [
  { id: 1, x: 5,  y: 60,  size: 'large'  as const },
  { id: 2, x: 25, y: 30,  size: 'medium' as const },
  { id: 3, x: 48, y: 80,  size: 'small'  as const },
  { id: 4, x: 65, y: 45,  size: 'large'  as const },
  { id: 5, x: 80, y: 25,  size: 'medium' as const },
]

const INITIAL_DROPS: RaindropData[] = [
  { uid: 1, posX: 100, posY: 120, mathQuestion: '7 + 3',  correctAnswer: 10, fallSpeed: 1 },
  { uid: 2, posX: 280, posY: 200, mathQuestion: '15 - 6', correctAnswer: 9,  fallSpeed: 1 },
  { uid: 3, posX: 480, posY: 150, mathQuestion: '4 × 3',  correctAnswer: 12, fallSpeed: 1 },
  { uid: 4, posX: 650, posY: 280, mathQuestion: '9 + 8',  correctAnswer: 17, fallSpeed: 1 },
]

function App() {
  const [activeTargetId, setActiveTargetId] = useState<number>(1)

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(180deg, #b8dff0 0%, #cceaf7 60%, #a8d4e8 100%)',
        overflow: 'hidden',
      }}
    >
      {CLOUD_LAYER.map(cloud => (
        <CloudScene
          key={cloud.id}
          x={cloud.x}
          y={cloud.y}
          size={cloud.size}
        />
      ))}

      {INITIAL_DROPS.map(drop => (
        <RaindropShape
          key={drop.uid}
          x={drop.posX}
          y={drop.posY}
          question={drop.mathQuestion}
          isTargeted={drop.uid === activeTargetId}
        />
      ))}

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(180deg, #2196f3 0%, #1976d2 100%)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.75)',
            borderRadius: '20px',
            padding: '6px 16px',
            fontSize: '22px',
            display: 'flex',
            gap: '4px',
          }}
        >
          ❤️❤️❤️
        </div>

        <div
          style={{
            background: 'rgba(255,255,255,0.75)',
            borderRadius: '12px',
            padding: '6px 18px',
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
          }}
        >
          SCORE: 0
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '60px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <input
          type="number"
          placeholder="Type answer..."
          style={{
            padding: '8px 20px',
            borderRadius: '20px',
            border: '2px solid rgba(255,255,255,0.8)',
            background: 'rgba(255,255,255,0.9)',
            fontSize: '16px',
            textAlign: 'center',
            outline: 'none',
            width: '180px',
          }}
        />

        <div style={{ fontSize: '13px', color: '#555' }}>
          Targeting drop {activeTargetId} — click a number to change:
          {INITIAL_DROPS.map(d => (
            <button
              key={d.uid}
              onClick={() => setActiveTargetId(d.uid)}
              style={{
                marginLeft: '6px',
                padding: '2px 8px',
                borderRadius: '10px',
                border: 'none',
                background: d.uid === activeTargetId ? '#1976d2' : '#ccc',
                color: d.uid === activeTargetId ? '#fff' : '#333',
                cursor: 'pointer',
              }}
            >
              {d.uid}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App
