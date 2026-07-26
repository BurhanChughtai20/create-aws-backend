[![npm version](https://img.shields.io/npm/v/create-aws-backend)](https://www.npmjs.com/package/create-aws-backend)
[![Downloads](https://img.shields.io/npm/dm/create-aws-backend)](https://www.npmjs.com/package/create-aws-backend)
[![GitHub](https://img.shields.io/badge/GitHub-Source-181717?logo=github)](https://github.com/BurhanChughtai20/create-aws-backend)


# create-aws-backend
 
### The Problem
The problem arises when you setup a new backend project, set up folder structure, file structure, dependencies,AWS DB configuration, and so forth. A lot of time and energy goes into doing this each time you create a new backend project.

### If this problem is never solved, then what will happen?
- It would take time and effort initially for all that.
- Your mind would be occupied with these tasks, and you wouldn’t be able to focus on the real work.
- It wouldn’t be easy for you to generate ideas for other projects quickly.
- During the first 30 minutes, only the AWS configuration and backend are included.

### The Solution

`create-aws-backend` 
this is a CLI tool, that will make it easy for you to set up a new backend project.
No need to worry about setting everything up from scratch anymore.
No more wondering about the directory structure.
No more wondering about your AWS setup.

---
 
---

##  Getting Started

Installation of global dependencies is not needed. Just type the following:

```bash
npx create-aws-backend
```

There will be only two questions that need to be answered by you:

1. **What are the AWS services that you would like to use?**
   Options available: AWS Lambda
2. **What is the database that you would like to use?**
   Options available: DynamoDB
After that, your project folder will be ready for you.

### After this step
 
```bash
pnpm install
```
 
Next, you should modify the `.env.example` file, fill it with your AWS credentials, and rename it to `.env`.
 
---
 
## Dependencies
 
- **Node.js** 16 or higher
- **pnpm**/**npm**/**yarn** (all fine after scaffolding)
- AWS account for deployment of generated Lambda/DynamoDB functions

## Contributing
 
Got a bug, or would you like to add a new template for an AWS service? Feel free to send your pull requests. Adding a new service consists primarily of creating a new template directory; the main CLI code is untouched.
 
---
 
## License
 
ISC © Burhan Chughtai