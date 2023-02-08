import React from 'react';
import { render } from '@testing-library/react';

import Input from './input.component';

test('renders HTML input element', () => {
  const { container } = render(<Input />);

  expect(container.querySelector('input')).toBeTruthy();
});
