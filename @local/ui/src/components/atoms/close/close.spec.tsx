import { render } from '@testing-library/react';

import CloseMenuIcon from './close.component';

describe('CloseMenuIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CloseMenuIcon />);
    expect(baseElement).toBeTruthy();
  });
});
