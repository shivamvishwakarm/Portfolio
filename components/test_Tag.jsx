import { render } from '@testing-library/react';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders the tag text', () => {
    const tagText = 'JavaScript';
    const { getByText } = render(<Tag tag={tagText} color="red" />);
    expect(getByText(tagText)).toBeInTheDocument();
  });

  it('applies the correct border color', () => {
    const { container } = render(<Tag tag="React" color="blue" />);
    expect(container.firstChild).toHaveStyle('border-color: blue');
  });
});