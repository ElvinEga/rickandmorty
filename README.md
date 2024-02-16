# Rick and Morty Universe Landing Page

This is the landing page for the Rick and Morty Universe, built with Next.js, TypeScript, and Tailwind CSS.

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
