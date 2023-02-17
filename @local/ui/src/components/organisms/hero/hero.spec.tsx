import React from 'react';
import { render } from '@testing-library/react';

import Hero from './hero.component';

describe('Hero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Hero title="عروض أزياء مجموعات ربيع وصيف 2023" link="#" />,
    );
    expect(baseElement).toBeTruthy();
  });
});
