import { render, screen } from '@testing-library/react';
import { Posts } from '.';
import '@testing-library/jest-dom/extend-expect';
import { postsCardsPropsMocks } from './mock';

const props = postsCardsPropsMocks;
describe('<Posts>', () => {
  it('should render posts', () => {
    render(<Posts {...props} />);
    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(4);

    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(4);
    expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute('src', 'https://dfdf');
    expect(screen.getAllByText(/body/i)).toHaveLength(4);
  });

  it('should render posts', () => {
    const { container } = render(<Posts {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
