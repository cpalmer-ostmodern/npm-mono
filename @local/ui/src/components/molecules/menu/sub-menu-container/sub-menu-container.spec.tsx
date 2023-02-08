import React from 'react';
import { render } from '@testing-library/react';

import SubMenuContainer from './sub-menu-container.component';

describe('SubMenuContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubMenuContainer />);
    expect(baseElement).toBeTruthy();
  });
});
