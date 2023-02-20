import React from 'react';
import { render } from '@testing-library/react';

import MenuMagazineCover from './menu-magazine-cover.component';

describe('MenuMagazineCover', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuMagazineCover />);
    expect(baseElement).toBeTruthy();
  });
});
