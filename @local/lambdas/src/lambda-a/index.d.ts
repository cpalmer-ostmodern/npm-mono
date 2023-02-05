import { APIGatewayProxyResult } from "aws-lambda";
export declare const handler: (event: {
    headers: any;
    httpMethod: string;
    statusCode: number;
}) => Promise<APIGatewayProxyResult>;
