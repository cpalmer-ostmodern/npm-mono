import { render } from '@testing-library/react';

import ArticleVideoImage from './article-video-image.component';

describe('ArticleVideoImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArticleVideoImage src="" alt="" />);
    expect(baseElement).toBeTruthy();
  });
});
