import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { InputSearch } from '.';

const props = {
  placeholder: 'pesquise algo',
  value: 'nada',
};
describe('<InputSearch>', () => {
  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    const { debug } = render(<InputSearch {...props} onChange={fn} />);

    const input = screen.getByPlaceholderText(/pesquise algo/i);
    expect(input).toBeInTheDocument();
    expect(input).toBe('nada');
  });

  it('should check the types', () => {
    const fn = jest.fn();
    render(<InputSearch placeholder="ola" onChange={fn} />);

    const input = screen.getByPlaceholderText(/ola/i);

    const value = 'algo';
    //a função abaixo digita algo
    userEvent.type(input, value);
    expect(input).toBe(value);

    //verifica a quantidade de vez que a função foi chamada
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('Should match snapshot', () => {
    const fn = jest.fn();
    const container = render(<InputSearch {...props} onChange={fn} />);

    expect(container).toMatchSnapshot();
  });
});
