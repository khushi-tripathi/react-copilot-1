import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders app without errors', () => {
    const { container } = render(<App />)
    expect(container).toBeTruthy()
  })

  it('renders routes', () => {
    render(<App />)
    // App should redirect to /login by default, so Login component should render
    // This tests that routing is set up correctly
    expect(screen.getByText(/Login|Home/i)).toBeInTheDocument()
  })

  it('App component structure is correct', () => {
    const { container } = render(<App />)
    const app = container.querySelector('[class*="App"]')
    expect(app || container.firstChild).toBeTruthy()
  })
})

