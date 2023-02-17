import React from 'react';
import { render } from '@testing-library/react';

import ArticleAuthor from './article-author.component';

describe('ArticleAuthor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleAuthor authorName="احسان علوه" />);
    expect(baseElement).toBeTruthy();
  });
});
