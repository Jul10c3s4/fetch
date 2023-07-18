import { render, screen } from '@testing-library/react';
import { AddPostButton } from '.';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

//usar comando npm test -- --coverage para procurar por coverages no código
describe('<AddPostButton>', () => {
  it('should check the atributes of the addPostButton', () => {
    render(<AddPostButton title="add more posts" />);

    const button = screen.getByRole('button', { name: /add more posts/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<AddPostButton title="add more posts" click={fn} />);
    const button = screen.getByRole('button', { name: /add more posts/i });

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true ', () => {
    render(<AddPostButton title="add more posts" disabled={true} />);
    const button = screen.getByRole('button', { name: /add more posts/i });
    expect(button).toBeDisabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<AddPostButton title="add more posts" disabled={false} click={fn} />);
    //usado para gerar uma pasta com arquivo que contém um snapshot do componente
    expect(container.firstChild).toMatchSnapshot();
  });
});
