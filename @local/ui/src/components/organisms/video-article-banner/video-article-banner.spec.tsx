import React from 'react';
import { render } from '@testing-library/react';

import VideoArticleBanner from './video-article-banner.component';

describe('VideoArticleBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VideoArticleBanner />);
    expect(baseElement).toBeTruthy();
  });
});
