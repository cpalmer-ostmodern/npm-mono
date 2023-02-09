import React from 'react';
import { render } from '@testing-library/react';

import ArticleCategory from './article-category.component';

describe('ArticleCategory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleCategory>Category Name</ArticleCategory>);
    expect(baseElement).toBeTruthy();
  });
});
