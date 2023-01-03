import { render, screen } from '@testing-library/react';
import App from '../App';
describe('App', () => {
  it('Should render correctly', () => {
    render(<App />)
    expect(screen.getByText("testando 1")).toBeInTheDocument();
    expect(screen.getByText("testando 2")).toBeInTheDocument();
  })
})