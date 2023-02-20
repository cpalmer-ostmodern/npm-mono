import { render } from '@testing-library/react';

import VideoArticle from './video-article.component';

describe('VideoArticle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <VideoArticle thumbnail="" title="" imageAlt="" />,
    );
    expect(baseElement).toBeTruthy();
  });
});
