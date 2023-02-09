import React from 'react';
import { render } from '@testing-library/react';

import SubMenuCounter from './sub-menu-counter.component';

describe('SubMenuCounter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SubMenuCounter totalLinks={1} />);
    expect(baseElement).toBeTruthy();
  });
});
