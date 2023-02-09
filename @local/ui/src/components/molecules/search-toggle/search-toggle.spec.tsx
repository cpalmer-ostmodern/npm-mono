import { render } from '@testing-library/react';

import SearchToggle from './search-toggle';

describe('SearchToggle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchToggle />);
    expect(baseElement).toBeTruthy();
  });
});
