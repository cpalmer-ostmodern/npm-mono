import React from 'react';
import { render } from '@testing-library/react';

import MediaImage from './media-image.component';

describe('MediaImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MediaImage src="" alt="" />);
    expect(baseElement).toBeTruthy();
  });
});
