import React from 'react';
import { render } from '@testing-library/react';

import ArticleExcerpt from './article-excerpt.component';

describe('ArticleExcerpt', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ArticleExcerpt excerpt="إطلالات جديدة استأثرت بها الملكة الأردنية رانيا الأنظار مع بداية شهر فبراير 2023 حيث شاركت زوجها الملك عبدالله الثاني، جولته في واشنطن، واختارت إطلالتين بطابع كلاسيكي راقي كما عودتنا" />,
    );
    expect(baseElement).toBeTruthy();
  });
});
