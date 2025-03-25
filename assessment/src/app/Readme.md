Portfolio Website Documentation - Assessment 2

This document explains how to set up, run, and customize the Next.js + TypeScript portfolio website with the following pages:


    Home (/)

    About (/about)

    Portfolio (/portfolio)

    Resume (/resume)

    Contact (/contact)



📌 Features

✔ Multi-page routing (Next.js App Router)

✔ Responsive design (Tailwind CSS)

✔ Social links in footer (GitHub, LinkedIn, Email)

✔ Modern UI with smooth transitions

✔ Contact form (submit functionality not implemented yet)


🛠️ Setup & Installation

1. Clone the Repository

git clone repo
cd repo name


2. Install Dependencies

npm install
# or
yarn install


This installs:


    next

    react

    typescript

    tailwindcss

    lucide-react (for the icons)


3. Run the Development Server

npm run dev
# or
yarn dev



    Open http://localhost:3000

    in the browser.



📂 Project Structure

src/
├── app/
│   ── page.tsx          # Main Home Page
│   ── about/page.tsx    # About Page
│   ── portfolio/page.tsx # Portfolio Page
│   ── resume/page.tsx   # Resume Page
│   ── contact/page.tsx  # Contact Page
├── components/
│   ── Header.tsx        # Navigation Header
│   ── Footer.tsx        # Footer with social links
│   ── Navigation.tsx    # Menu Links
│   ── SocialIcons.tsx   # GitHub, LinkedIn, Mail
├── styles/
│   ── globals.css       # Tailwind CSS imports
└── types/
    ── index.ts          # TypeScript types


📝 Notes


    Tailwind CSS is already configured in tailwind.config.js.

    Routing is handled by Next.js (no extra setup needed).

    All pages are statically generated (SEO-friendly).



🔗 Resources


    Next.js Docs


Tailwind CSS Docs

Lucide Icons