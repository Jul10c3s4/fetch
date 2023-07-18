import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock } from './mock';
import '@testing-library/jest-dom/extend-expect';

const props = postCardPropsMock;
describe('<PostCard>', () => {
  it('should render PostCard correctly', () => {
    const { debug } = render(<PostCard {...props} />);
    //o debug é usado para exibir o componente no terminal
    //debug()
    expect(screen.getByRole('img', { name: 'titulo' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'titulo' })).toHaveAttribute('src', props.photo);
    expect(screen.getByAltText(props.title));
    expect(screen.getByRole('heading', { name: 'titulo' })).toBeInTheDocument();
    expect(screen.getByText('corpo')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    //usado para gerar uma pasta com arquivo que contém um snapshot do componente
    expect(container.firstChild).toMatchSnapshot();
  });
});
