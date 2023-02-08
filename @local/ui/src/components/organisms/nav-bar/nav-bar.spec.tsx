import React from 'react';
import { render } from '@testing-library/react';

import NavBar from './nav-bar.component';

describe('NavBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavBar logoTw={''} />);
    expect(baseElement).toBeTruthy();
  });
});
