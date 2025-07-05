/* eslint-disable @typescript-eslint/no-unused-vars */

import * as React from 'react';
import {render, screen, userEvent} from '@testing-library/react-native';
import CustomCards from '../CustomCards';

test('renders correctly', () => {
  render(<CustomCards />);

  expect(screen.getByText('tarde')).toBeOnTheScreen();
});
