# Budget Control Application

## Deployment Status

Master branch deployment status [![Netlify Status](https://api.netlify.com/api/v1/badges/d783cd62-5581-4e5f-b24f-cb674f95670b/deploy-status)](https://app.netlify.com/sites/alcb1310-bca-final/deploys)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Testing](#testing)
- [Deployment](#deployment)
- [License](#license)
- [Author](#author)

## Tech stack

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Biome](https://img.shields.io/badge/biome-60a5fa?style=for-the-badge&logo=biome&logoColor=white)

![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

![Vitest](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

## Description

This project helps to manage a construction company's budget. There are severall steps in order for it to work:

- Add a project information
- Create a budget for the project
- Add expenses to the budget
- Update the budget if the price of the supply has changed
- Generate different reports

With all this information, the goal of this application is help managemet to make better and more time efficient decisions.

## Features

## Testing

In order to ru the tests, run the following command:

```bash
pnpm test
```

If you would like to show the results in a browser, run the following command:

```bash
pnpm test:ui
```

## Deployment

To deploy the application, run the following commands:

```bash
git clone https://github.com/alcb1310/bca-final.git
cd bca-final
pnpm install
```

You will need to add the following environment variables:


```env
VITE_SERVER_URL=<host address of the server>
```

```bash
pnpm build
pnpm preview
```

## License

Refere to the [License](LICENSE)

## Author

Andres Court

[![X](https://img.shields.io/badge/X-%23000000.svg?style=for-the-badge&logo=X&logoColor=white)](https://x.com/alcb1310)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/alcb1310)
