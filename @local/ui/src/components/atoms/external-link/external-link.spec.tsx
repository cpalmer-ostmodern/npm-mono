import React from "react";
import { render } from '@testing-library/react';

import ExternalLink from './external-link.component';

describe('ExternalLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ExternalLink href="https://www.hiamag.com" openNewTab>HIA website</ExternalLink>
    );
    expect(baseElement).toBeTruthy();
  });
});
