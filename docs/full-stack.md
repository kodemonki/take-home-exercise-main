# Web Team Candidate Assessment - Full-stack

Welcome to the web team's full-stack assessment. This assessment is designed to mimic the type of work you would be doing as a member of the web team and to give you a chance to show off your skills.

Make sure you read these instructions carefully before you start. If you have any questions please reach out to your recruiting specialist.

Once you've completed the assessment, please leave some notes for the reviewer in the [SUBMISSION.md](SUBMISSION.md) file. It's a good way for us to get to know you and your experience with the exercise. We want to hear from you!

**Happy coding and best of luck** 🎉

## Prerequisites

Install the following tools on your machine:

- [NodeJs][node] - our JavaScript runtime environment (install the latest LTS version)
- [Git][git] - our source control system (or [Github Desktop][github-desktop] if you don't want to use the command line)

## Getting Started

---

## Setup

First, run `npm install` to install all the dependencies.

Then, run the following command to start the local development server:

```bash
npm run start
```

Run `npm run start` to start the development server, which will automatically open at [http://localhost:1234](http://localhost:1234)

This project uses [Parcel][parcel] by default, but you can replace that with your preferred bundler (e.g. Webpack, Rollup, etc.) if you want.

## Instructions

**Take a look at the designs for the application in the [designs][designs] folder**.

You are required to build the frontend and backend for a web application that allows users to search for and view information about movies and books.
You can find all of the data for the media items at **[this url][data]**

We've split the requirements into three sections - **basic**, **intermediate**, and **advanced**.
All candidates should aim to complete all of the basic requirements. For Senior+ and Tech Lead candidates,
please also aim to complete the intermediate and most of the advanced requirements.
For all other roles, these sections are optional, but we recommend you attempt some of them if you have time.
Choose the ones that you think will best showcase your skills
You can also add any other additional features you think would be useful or improve the user/developer experience.

### Important

To assess your work, we'll be running the following commands:

```bash
npm install
npm run serve # runs the backend server
npm run start # runs the frontend server
```

You should ensure that your project is runnable using only these commands. You can add any other commands you like to the `package.json` file, but these commands should be sufficient to run your project.

### Basic

- Create a backend API using NodeJS that fetches the JSON data from the [provided endpoint][data].

- Add a GET endpoint to the backend API that returns all of the media items in the JSON data.

- Create a frontend application that displays the data from the backend API. You should try recreate the design in the [designs][designs] folder as closely as possible. You can use vanilla JavaScript or your preferred framework (e.g. React, Vue, etc.).

For the frontend:

- The user should be able to select one or more categories from the `Genre` dropdown

- The user should be able to select one or more years from the `Year` dropdown

- The app should display a list of movies and books from the selected genre(s) and year(s)

- The user should be able to search for movies and books using the `search input`. Search can be done on the frontend or backend.

- The radio button group `All`, `Movies`, and `Books` should be set to `All` by default. The user should only be able to select one of them at a time. Selecting one of them should filter the results - if `Movies` is selected, the results should only show movies, if `Books` is selected, the results should only show books.

- if the user searches, the results should be filtered by the search term. For example, if the user searches for "Harry Potter", the results should only show movies and books that contain "Harry Potter" in the title. The search should be case insensitive.

- The `Clear Filters` button should reset the `Genre` and `Year` dropdowns to their default values, as well as clear the `search input` and reset the radio button group to `All`

- Write clean, clear, DRY code. Assume this is a real project that you'll be working on with other developers

### Intermediate

- make the application responsive so that it works on all screen sizes (mobile, tablet, desktop)

- Make the app accessible (e.g. screen readers, keyboard navigation) We recommend using the free [AXE DevTools][axe] Chrome plugin to test for accessibility issues

- Optimize the app for performance, for example, by lazy loading images. You can use the [Lighthouse][lighthouse] tool to test the performance of your app from within Chrome DevTools

### Advanced

- write unit tests for your frontend and backend code (you can use any testing framework you like)

- Add fuzzy search to the search input, so that the user can find results even if they don't type the full title or misspell it (e.g. "hary potter" should return results for "Harry Potter")

- Add pagination to the app, to account for scaling the number of movies and books (e.g. 10 results per page). Your API should support pagination, and the frontend should display the results correctly.

---

## FAQs

### How long do I have to complete the assessment?

You have **4 days** from the time you receive the assessment to complete it.

### What if I don't have time to complete the assessment?

If you need extra time please reach out to your recruiting specialist.

### What if I have questions about the assessment?

Please reach out to your recruiting specialist, who can forward your questions to the web team.

### How do I submit my assessment?

Please submit your assessment by following the instructions in the email you received with the assessment link.

### Can I use TypeScript?

Absolutely, we love TypeScript

### Do I have to use NodeJs?

Yes, please use NodeJs as it's the runtime environment we use on the web team.

### Can I use kick-starters or boilerplate generators like Create React App?

We recommend starting from scratch so that we can see how you structure your project.
You can use starter projects but please don't use boilerplate generators like Create React App.
They tend to add a lot of unnecessary code and configuration. We recommend using a simpler project configurator like [Create App][configurator]

### Can I use a language other than JavaScript?

No, please use JavaScript or TypeScript, though you can use any Javascript framework that you like.

### Can I add or remove additional dependencies in the `package.json` file?

Yes. We've included some recommended packages to get you started, but you can add, remove, or update any dependencies you like.

<!-- links -->
[node]: https://nodejs.org/en/download
[git]: https://git-scm.com/downloads
[github-desktop]: https://desktop.github.com/
[designs]: ../designs/
[parcel]: https://parceljs.org
[data]: https://drive.google.com/file/d/1c7MKP-vr3r_64aiW7TAM2VxKRP7jK-4I/view?usp=sharing
[configurator]: https://createapp.dev/
