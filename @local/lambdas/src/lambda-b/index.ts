import { APIGatewayProxyResult } from 'aws-lambda';
import { createResponse } from '../shared/utils';

export const handler = async (): Promise<APIGatewayProxyResult> => {
  const data = JSON.stringify({
    colors: {
      black: '#212121',
      white: '#1b73e8',
      grey: {
        100: '#9ea0a2',
      },
      gold: {
        50: '#F7F3F0',
        100: '#EEE6E1',
        200: '#DECEC3',
        300: '#CDB5A5',
        400: '#BD9D87',
        450: '#B49078',
        500: '#AC8469',
        600: '#907460',
        700: '#6C5748',
      },
      blue: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365',
      },
    },
  });
  return createResponse(200, data);
};
