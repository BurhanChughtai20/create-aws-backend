import type { TemplateMap } from "../types/template.type.ts";

const TEMPLATE_MAP: TemplateMap = {
  features: {
    aws: {
      lambda: "templates/aws/lambda",
    },
    database: {
      dynamodb: "templates/database/dynamodb",
    },
  },
};

export default TEMPLATE_MAP;