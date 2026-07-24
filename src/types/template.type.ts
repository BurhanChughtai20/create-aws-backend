export type AwsService =
  | "lambda"
  | "logger"
  | "api-gateway"
  | "secrets-manager"
  | "dynamodb";

export type DatabaseProvider = "dynamodb";

export interface TemplateMap {
  features: {
    aws: Partial<Record<AwsService, string>>;
    database: Record<DatabaseProvider, string>;
  };
}