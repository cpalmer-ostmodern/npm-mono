import React from 'react';
import { render } from '@testing-library/react';

import ArticleTitle from './article-title.component';

describe('ArticleTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleTitle title="اخترنا لكم" />);
    expect(baseElement).toBeTruthy();
  });
});
