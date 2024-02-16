# Rick and Morty Universe Landing Page

This is the landing page for the Rick and Morty Universe, built with Next.js, TypeScript, and Tailwind CSS.

![Screenshot 2024-02-16 at 17-53-27 https __rickandmorty-ruddy-nine vercel app](https://github.com/ElvinEga/rickandmorty/assets/12608507/c21250e4-b346-47ff-92ff-232c2752b9e8)

## Technologies

The project is built using the following technologies:

- Next.js: A React framework for server-side rendering and building web applications.
- Tailwind CSS: A utility-first CSS framework for rapidly designing and styling web interfaces.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Features

- Character and location pages showcasing detailed information and images.
- Dynamic routing for seamless navigation between pages.
- Responsive design for optimal viewing on all devices.
- Built with modern technologies for speed and maintainability.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ElvinEga/rickandmorty.git
   ```

2. Install dependencies:
   `npm install`

## Usage

To start the development server and view the landing page, run the following command:

`npm run dev`

Open your web browser and visit http://localhost:3000 to see the Devportfolio landing page in action.

Absolutely! Here's how you can update your README to mention the Rick and Morty API:

**In the Features section:**

- Add a bullet point stating: "Data sourced from the official Rick and Morty API: [https://rickandmortyapi.com/api](https://rickandmortyapi.com/api)"

**In the Getting Started section:**

- Before running the development server, add a step for installing an API client library to interact with the Rick and Morty API. You can recommend popular libraries like `axios` or `fetch`.

**Under Project Structure:**

- Inside the `src/lib` directory, mention the file name responsible for interacting with the API (e.g., `api.ts`).

**In the `api.ts` file (or its equivalent):**

- Document the functions used to fetch data from the API, highlighting the endpoints used and how they are utilized.

**Remember to replace placeholders with actual filenames and details specific to your implementation.**

Here's an example snippet for `api.ts`:

```typescript
// api.ts

import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const fetchCharacters = async (page: number = 1) => {
  const response = await api.get(`/character?page=${page}`);
  return response.data;
};

export const fetchLocations = async (page: number = 1) => {
  const response = await api.get(`/location?page=${page}`);
  return response.data;
};
```

By adding these updates, your README will clearly communicate the use of the Rick and Morty API and provide developers with valuable information for setting up and running the project.

## Deployment

Follow these steps to deploy the Devportfolio landing page:

1. Build the production-ready optimized version of the project:
   `npm run build`
2. Start the production server:
   `npm run start`

   By default, the production server will run on port 3000. You can configure the port by modifying the package.json file.

### Project Structure

```
rick-and-morty-universe/
├── public/
│   ├── images/
│   │   └── characters/
│   │       └── ...character images...
│   │   └── locations/
│   │       └── ...location images...
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── CharacterCard.tsx
│   │   ├── LocationCard.tsx
│   │   └── ...other components...
│   ├── lib/
│   │   ├── api.ts
│   │   └── utils.ts
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── characters/
│   │   │   ├── [id].tsx
│   │   │   └── index.tsx
│   │   ├── locations/
│   │   │   ├── [id].tsx
│   │   │   └── index.tsx
│   │   └── index.tsx
│   ├── styles/
│   │   └── globals.css
│   └── tsconfig.json
├── package.json
└── README.md
```

### Technologies Used

- **Next.js:** A React framework for server-side rendering and static site generation.
- **TypeScript:** A typed superset of JavaScript for enhanced code safety and readability.
- **Tailwind CSS:** A utility-first CSS framework for rapid design and development.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix: git checkout -b feature/your-feature-name.
3. Make your changes and commit them: git commit -m "Add a new feature".
4. Push to the branch: git push origin feature/your-feature-name.
5. Submit a pull request detailing your changes.

## License

This project is licensed under the MIT License.
