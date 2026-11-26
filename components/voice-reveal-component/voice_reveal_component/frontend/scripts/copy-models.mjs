import { copyFile, mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const frontendDir = path.resolve(here, "..");
const projectRoot = path.resolve(frontendDir, "../../../..");
const sourceDir = path.join(projectRoot, "models");
const targetDir = path.join(frontendDir, "public", "models");

await mkdir(targetDir, { recursive: true });

const entries = await readdir(sourceDir, { withFileTypes: true });
const models = entries.filter((entry) => entry.isFile() && entry.name.endsWith(".glb"));

if (models.length === 0) {
  throw new Error(`No .glb files found in ${sourceDir}`);
}

for (const model of models) {
  const source = path.join(sourceDir, model.name);
  const target = path.join(targetDir, model.name);
  await copyFile(source, target);
  const { size } = await stat(target);
  console.log(`copied ${model.name} (${(size / 1024 / 1024).toFixed(1)} MB)`);
}
