import { APIGatewayProxyResult } from "aws-lambda";
import { createResponse } from "../shared/utils";

export const handler = async (event: {
  headers: any;
  httpMethod: string;
  statusCode: number;
}): Promise<APIGatewayProxyResult> => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  const name = "CMS";
  return createResponse(200, name);
};
