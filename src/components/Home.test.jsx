import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('Home Component', () => {
  it('renders home page heading', () => {
    render(<Home />)

    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('displays welcome message', () => {
    render(<Home />)

    expect(screen.getByText('Welcome to the Home page.')).toBeInTheDocument()
  })

  it('displays logged in message', () => {
    render(<Home />)

    expect(screen.getByText(/You are now logged in/i)).toBeInTheDocument()
  })

  it('mentions home route', () => {
    render(<Home />)

    expect(screen.getByText(/This is the home route/i)).toBeInTheDocument()
  })

  it('renders without errors', () => {
    const { container } = render(<Home />)
    expect(container).toBeTruthy()
  })

  it('has correct page structure', () => {
    const { container } = render(<Home />)

    const header = container.querySelector('header')
    const main = container.querySelector('main')

    expect(header).toBeInTheDocument()
    expect(main).toBeInTheDocument()
  })
})
