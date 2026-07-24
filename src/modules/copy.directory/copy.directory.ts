import fs from "node:fs";
import path from "node:path";

const EXCLUDED_ENTRIES = new Set(["node_modules", ".git", "pnpm-lock.yaml", "package-lock.json", "yarn.lock"]);

export const copyDirectory = (
    sourceDir: string,
    destination: string
): void => {

    const entries: fs.Dirent[] = fs.readdirSync(sourceDir, { withFileTypes: true });

    for (const entry of entries) {
        if (EXCLUDED_ENTRIES.has(entry.name)) {
            continue;
        }

        const sourcePath = path.join(sourceDir, entry.name);
        const destinationPath = path.join(destination, entry.name);

        if (entry.isDirectory()) {
            fs.mkdirSync(destinationPath, {
                recursive: true,
            });
            copyDirectory(sourcePath, destinationPath);
        }
        else {
            fs.copyFileSync(sourcePath, destinationPath);
        };
    };
};