import type { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import type { SuccessBody } from "../types/lambda.success.ts";
import type { ErrorBody } from "../types/lambda.error.ts";

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type,Authorization",
  "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
};

const success = (statusCode: number, body: SuccessBody): APIGatewayProxyResult => ({
  statusCode,
  headers: DEFAULT_HEADERS,
  body: JSON.stringify(body),
});

const failure = (statusCode: number, error: string, requestId?: string): APIGatewayProxyResult => ({
  statusCode,
  headers: DEFAULT_HEADERS,
  body: JSON.stringify({ error, requestId } satisfies ErrorBody),
});

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  if (event.httpMethod === "OPTIONS") {
    return success(200, { message: "OK" });
  }

  try {
    switch (event.httpMethod) {
      case "GET":
        return success(200, {
          message: "Lambda function is running.",
          data: {
            path: event.path,
            queryParams: event.queryStringParameters ?? {},
          },
        });

      case "POST": {
        if (!event.body) {
          return failure(400, "Request body is required.", context.awsRequestId);
        }

        let parsedBody: unknown;
        try {
          parsedBody = JSON.parse(event.body);
        } catch {
          return failure(400, "Request body must be valid JSON.", context.awsRequestId);
        }

        return success(201, {
          message: "Resource created.",
          data: parsedBody,
        });
      }

      default:
        return failure(405, `Method ${event.httpMethod} is not allowed.`, context.awsRequestId);
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Unhandled Lambda error:", message, {
      requestId: context.awsRequestId,
      path: event.path,
      method: event.httpMethod,
    });

    return failure(500, "Internal server error.", context.awsRequestId);
  }
};