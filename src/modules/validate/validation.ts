import fs from "fs-extra";
import path from "path";
import type { ValidationResult } from "../../types/validation.type.ts";

export const validateProject = (cwd: string): ValidationResult => {
  const MIN_NODE_MAJOR = 16;
  const packageJsonPath = path.join(cwd, "package.json");
 
  const hasPackageJson = fs.existsSync(packageJsonPath);
  const packageJson = hasPackageJson ? fs.readJSONSync(packageJsonPath) : null;

  const hasExpress = Boolean(
    packageJson?.dependencies?.express || packageJson?.devDependencies?.express
  );

  const hasTypeScript = Boolean(
    packageJson?.dependencies?.typescript || packageJson?.devDependencies?.typescript
  ); 
  const nodeVersionOk = Number(process.version.slice(1).split(".")[0]) >= MIN_NODE_MAJOR;

  return {
    hasPackageJson,
    hasExpress,
    hasTypeScript,
    nodeVersionOk,
    packageJson,
  };
};