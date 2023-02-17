import React from 'react';
import { render } from '@testing-library/react';

import NewsletterBanner from './newsletter-banner.component';

describe('NewsletterBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewsletterBanner />);
    expect(baseElement).toBeTruthy();
  });
});
