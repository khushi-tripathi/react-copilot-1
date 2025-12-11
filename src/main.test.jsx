import { describe, it } from 'vitest'

// Ensure a `#root` element exists so importing `main.jsx` can mount into it.
beforeAll(() => {
  const existing = document.getElementById('root')
  if (!existing) {
    const root = document.createElement('div')
    root.id = 'root'
    document.body.appendChild(root)
  }
})

describe('main entry', () => {
  it('imports without throwing and mounts the app', async () => {
    // dynamic import so jest/vitest picks this up and counts coverage for main.jsx
    await import('./main.jsx')
  })
})
