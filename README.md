# MERN Mastery Tracker

A practical, browser-based learning roadmap for tracking your progress from web fundamentals to building and shipping full-stack MERN applications.

> **Project scope:** The tracker itself is built with HTML, CSS, and vanilla JavaScript. It helps you learn the MERN stack; it is not itself a MERN application and does not require a Node.js server or MongoDB database.

## Features

- **14 learning modules** covering HTML, CSS, JavaScript, Git/GitHub, React, Node.js, Express, MongoDB/Mongoose, full-stack integration, security, testing, deployment, and advanced engineering.
- **Skill checklist** with individual tasks and practical build challenges.
- **Progress dashboard** showing completed skills, remaining skills, completed modules, and project milestones.
- **Search and filters** to find skills and view all, remaining, or completed tasks.
- **Automatic local saving** using the browser's `localStorage`.
- **JSON backup** to export your progress and import it later.
- **Learning references** linking to courses, videos, and official documentation.
- **Responsive layout** for desktop and mobile screens.

## Built With

- HTML5
- CSS3
- JavaScript (Vanilla)
- Browser `localStorage` and File APIs

## Getting Started

No package installation, build step, database, or server is required.

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in a modern web browser.
4. Start working through the modules and tick a skill only when you can explain and implement it independently.

You can also use a local development server such as the **Live Server** extension in Visual Studio Code, but it is optional.

## Project Structure

```text
mern-mastery-tracker/
├── index.html   # Page structure and content
├── style.css    # Responsive styles
├── app.js       # Roadmap data, checklist, progress and backup logic
├── README.md    # Project documentation
└── .gitignore   # Files that should not be committed
```

## Progress and Backups

- Your checklist progress is saved in the current browser on the current device.
- Progress is **not synced** between browsers or devices because this project has no backend or user account system.
- Use **Export progress** to download a JSON backup.
- Use **Import backup** to restore a previously exported JSON file.
- Importing a backup replaces the progress currently stored in that browser.
- Clearing browser storage can remove saved progress, so keep a backup if you need one.

## Learning Approach

Follow the modules in order. Do not mark a skill complete just because you watched a video. Try to explain the concept in your own words, build a small example, and debug it without copying a tutorial.

The final module includes project milestones intended to help you demonstrate your skills through independent work.

## Deployment

This is a static website and can be hosted using **GitHub Pages**. In the repository, open **Settings → Pages**, choose deployment from the `main` branch and the root (`/`) folder, then save. GitHub Pages will provide a public website URL after deployment completes.

## Limitations

- Progress is stored locally in the browser; there is no cloud sync.
- There is no login, backend API, or MongoDB database.
- The learning-resource links require an internet connection.
- This tracker is a learning aid, not a certification or a guarantee of employment.

## Contributing

Suggestions and improvements are welcome. For larger changes, consider opening an issue first to describe the proposed update.

## License

No license has been specified yet. Unless a license is added, others should not assume they have permission to reuse, modify, or distribute this project's code.


## 📸 Project Screenshots

### Dashboard
![Dashboard](screenshots/01-dashboard.png)

### Learning Roadmap
![Learning Roadmap](screenshots/02-roadmap.png)

### Progress Tracking
![Progress Tracking](screenshots/03-progress.png)

### Search Functionality
![Search Functionality](screenshots/04-search.png)

