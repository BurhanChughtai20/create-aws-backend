import path from "node:path";
import { fileURLToPath } from "node:url";
import type { UserAnswers } from "../../types/answer.type.ts";
import TEMPLATE_MAP from "../../data/template.data.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(__dirname, "../../..");

const resolveTemplatePath = (relativePath: string): string =>
  path.join(packageRoot, relativePath);

export const collectTemplatePaths = (answers: UserAnswers): string[] => {
  const paths: string[] = [];

  if (answers.aws) {
    for (const service of answers.aws.services) {
      const templatePath = TEMPLATE_MAP.features.aws[service];
      if (templatePath) {
        paths.push(resolveTemplatePath(templatePath));
      }
    }
  }

  if (answers.database) {
    paths.push(resolveTemplatePath(TEMPLATE_MAP.features.database[answers.database.provider]));
  }

  return paths;
};