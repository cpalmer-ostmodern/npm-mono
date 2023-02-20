import { APIGatewayProxyResult } from 'aws-lambda';
import { toUpper } from 'ramda';

export const createResponse = (
  code: number,
  data: any,
): APIGatewayProxyResult => ({
  statusCode: code,
  body: data,
});
