# Personal Website

My personal website built with **React** and **Vite**, and deployed through **AWS**.
A space to showcase projects, experience, and experiments as I keep iterating on things.

## Tech Stack
- React
- Vite
- JavaScript
- CSS (custom styling)
- AWS (S3 + CloudFront)
- Route 53 (custom domain)

## Features
- Fast, lightweight setup with Vite
- Responsive layout for desktop and mobile
- Modular React components
- Static site optimized for performance

## Local Development

Install dependencies:

npm install

Start the development server:

npm run dev

The site will be available at `http://localhost:5173`.

## Build

Generate a production build:

npm run build

The output will be in the `dist/` folder.

## Deployment

The production build is deployed as a static site:
- Files from `dist/` are uploaded to an S3 bucket
- Served globally via CloudFront
- Domain managed through Route 53

## Notes
This project is actively evolving.  
Structure, design, and content may change as I refine things.

## License
This project is for personal use.  
Feel free to draw inspiration, but please don’t copy content or design directly.
