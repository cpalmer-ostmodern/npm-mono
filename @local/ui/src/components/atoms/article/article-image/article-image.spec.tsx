import React from 'react';
import { render } from '@testing-library/react';

import ArticleImage from './article-image.component';

describe('ArticleImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleImage src="" orientation="square" alt="" />);
    expect(baseElement).toBeTruthy();
  });
});
