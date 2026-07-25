import { getUserAnswers } from "../modules/answers/get-user-answers.ts";
import { executePipeline } from "../modules/pipeline/pipeline.ts";


async function main() {
  const answers = await getUserAnswers();
  await executePipeline({
    cwd: process.cwd(),
    answers,
  });
  console.log("\n✅ Your backend project is ready. Run `pnpm install` to install dependencies, then check `.env.example` for required environment variables.\n");
}

main().catch((err) => {
  console.error("create-aws-backend failed:", err.message);
  process.exit(1);
});