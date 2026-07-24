import type { PromptObject, PromptType, Choice } from "../types/prompt-question.type.ts";
import type { AwsService, DatabaseProvider } from "../types/template.type.ts";

export const AWS_QUESTION: PromptObject<"aws"> = {
  name: "aws",
  message: "Which AWS services would you like to include?",
  type: "multiselect" as PromptType,

  choices: [
    { title: "AWS Lambda", value: "lambda" satisfies AwsService },
  ] as Choice[],
};

export const DATABASE_QUESTION: PromptObject<"database"> = {
  name: "database",
  message: "Which database would you like to use?",
  type: "select" as const,

  choices: [
    { title: "DynamoDB", value: "dynamodb" satisfies DatabaseProvider },
    { title: "None", value: "none" },
  ] as Choice[],
};