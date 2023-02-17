import React from 'react';
import { render } from '@testing-library/react';

import MenuLinkParent from './menu-link-parent.component';

describe('MenuLinkParent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MenuLinkParent
        href=""
        openNewTab={false}
        sublinks={[
          {
            href: 'https://www.hiamag.com/',
            name: 'A link to the HIA Website',
            openNewTab: true,
            children: 'HIA Website',
          },
        ]}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
