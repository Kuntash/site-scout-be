# Site Scout Backend

Backend service for **Site Scout**, an application that allows users to track changes on a website over time and provides insights about those changes. The backend is built using **Express** and **TypeScript**, with a focus on performance and reliability.

## Features

- **Track Website Changes:** Monitor a website's layout and content changes.
- **Competitor Analysis:** Receive insights on how a website's changes compare to your competitor's or your own target site.
- **Target Selectors:** Track specific elements within a webpage and get updates when those elements change (e.g., price changes on e-commerce websites).
- **Recursive Analysis:** Analyze sections of a website and recursively scan sub-links for deeper insights.

## Technology Stack

- **Express**: Web server framework for Node.js.
- **TypeScript**: Static typing for JavaScript.
- **Morgan**: HTTP request logger middleware.
- **ESLint & Prettier**: Code linting and formatting.
- **Jest**: Testing framework.

## Scripts

- `start`: Runs the production build from the `dist` folder.
- `dev`: Starts the development server using `nodemon` and watches for changes.
- `build`: Compiles TypeScript files to JavaScript using `tsc`.
- `lint`: Runs ESLint to check for code quality and formatting issues.
- `test`: Runs tests using Jest.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repo/site-scout-backend.git
   cd site-scout-backend
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```
3. **Run development:**
   ```bash
   pnpm run dev
   ```
4. **Run build:**
   ```bash
   pnpm run build
   ```

## License

This project is licensed under the ISC License. See the LICENSE file for more details.

## Author

Kunga Tashi
