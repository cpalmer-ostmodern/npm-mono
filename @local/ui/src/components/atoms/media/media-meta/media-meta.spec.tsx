import React from 'react';
import { render } from '@testing-library/react';

import MediaMeta from './media-meta.component';

describe('MediaMeta', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MediaMeta date="15 يوليو 2021" category="جلسة فلسفة" />);
    expect(baseElement).toBeTruthy();
  });
});
