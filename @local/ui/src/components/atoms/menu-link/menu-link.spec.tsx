import React from 'react';
import { render } from '@testing-library/react';

import MenuLink from './menu-link.component';

describe('MenuLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuLink href="" openNewTab={false}>Link</MenuLink>);
    expect(baseElement).toBeTruthy();
  });
});
