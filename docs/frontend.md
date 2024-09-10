# Web Team Candidate Assessment - Frontend

Welcome to the web team's frontend assessment. This assessment is designed to mimic the type of work you would be doing as a member of the web team and to give you a chance to show off your skills.

Make sure you read these instructions carefully before you start. If you have any questions please reach out to your recruiting specialist.

Once you've completed the assessment, please leave some notes for the reviewer in the [SUBMISSION.md](SUBMISSION.md) file. It's a good way for us to get to know you and your experience with the exercise. We want to hear from you!

**Happy coding and best of luck** 🎉

## Prerequisites

Install the following tools on your machine:

- [NodeJs][node] - our JavaScript runtime environment (install the latest LTS version)
- [Git][git] - our source control system (or [Github Desktop][github-desktop] if you don't want to use the command line)

## Getting Started

1. Clone or download this repository (please do not fork it).

2. Create a new branch for your work (`git checkout -b <your-name>`)

3. Run `npm install` in your project directory

4. Run `npm run start` to start the development server, which will automatically open at [http://localhost:1234](http://localhost:1234)

This project uses [Parcel][parcel] by default, but you can replace that with your preferred bundler (e.g. Webpack, Rollup, etc.) if you want.

Regardless of the build tools you use, your project should be runnable using only two commands:

 `npm install` and `npm run start`

---

## Instructions

You're required to build a web application that allows users to search for and view information about movies and books. You can find all of the data for the media items at **[this url][data]**

**The designs for the application can be found in the [designs][designs] folder**. Try to match the designs as closely as possible, but if you want to make any enhancements or improvements feel free to do so. **Note** that we only provide designs for the desktop version of the app, so you'll need to decide how the app should look on mobile and tablet devices.

We've included some recommended packages in `package.json` for you to use, but feel free to add or remove dependencies as needed. See the [FAQs](#faqs) for more information on what you can and can't use.

We've split the requirements into three sections - **basic**, **intermediate**, and **advanced**.
All candidates should aim to complete all of the basic requirements. For Senior+ and Tech Lead candidates,
please also aim to complete the intermediate and most of the advanced requirements.
For all other roles, these sections are optional, but we recommend you attempt some of them if you have time.
Choose the ones that you think will best showcase your skills
You can also add any other additional features you think would be useful or improve the user/developer experience.

### Basic

- The user should be able to select one or more categories from the `Genre` dropdown
- The user should be able to select one or more years from the `Year` dropdown
- The app should display a list of movies and books from the selected genre(s) and year(s)
- The user should be able to search for movies and books using the `search input`
- The radio button group `All`, `Movies`, and `Books` should be set to `All` by default. The user should only be able to select one of them at a time. Selecting one of them should filter the results - if `Movies` is selected, the results should only show movies, if `Books` is selected, the results should only show books.
- if the user searches, the results should be filtered by the search term. For example, if the user searches for "Harry Potter", the results should only show movies and books that contain "Harry Potter" in the title. The search should be case insensitive.
- The `Clear Filters` button should reset the `Genre` and `Year` dropdowns to their default values, as well as clear the `search input` and reset the radio button group to `All`
- The app should be responsive and work on mobile, tablet, and desktop devices
- Write clean, clear, DRY code. Assume this is a real project that you'll be working on with other developers

### Intermediate

- Make the app accessible (e.g. screen readers, keyboard navigation) We recommend using the free [AXE DevTools][axe] Chrome plugin to test for accessibility issues
- Add linting or a code formatter to the project (e.g. ESLint, Prettier, etc.)
- Add animations to the app to improve the user experience, for example, loading animations, hover effects, etc.
- Add a `Sort By` dropdown, so that the user can sort the results by `Title` or `Year`
- Optimize the app for performance, for example, by lazy loading images. You can use the [Lighthouse][lighthouse] tool to test the performance of your app from within Chrome DevTools

### Advanced

- Add unit tests for your code, using your preferred testing framework. Tests should be executable using `npm run test`
- Add fuzzy search to the search input, so that the user can find results even if they don't type the full title or misspell it (e.g. "hary potter" should return results for "Harry Potter")
- Add pagination to the search results, to account for scaling the number of movies and books (e.g. 10 results per page)
- Deploy your app to a free hosting service (e.g. Netlify, Vercel, etc.) and provide a link to the hosted app when you submit your assessment

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

### What if I want to use a different framework or build tool?

You can use any framework or build tool you like, as long as the project can be run using `npm install` and `npm run start`.

### Can I use TypeScript?

Absolutely, we love TypeScript

### Can I use a language other than JavaScript?

No, please use JavaScript or TypeScript, though you can use any Javascript framework that you like.

### Can I add or remove additional dependencies in the `package.json` file?

Yes. We've included some recommended packages to get you started, but you can add, remove, or update any dependencies you like.

### What if I want to use a CSS framework like Bootstrap or Tailwind?

Please do not use any CSS frameworks. You are free to use any CSS pre-processors you like SCSS, LESS, etc. but we want to see how you write CSS.

### Can I use kick-starters or boilerplate generators like Create React App?

We recommend starting from scratch so that we can see how you structure your project. You can use starter projects but please don't use boilerplate generators like Create React App. They tend to add a lot of unnecessary code and configuration. We recommend using a simpler project configurator like [Create App][configurator]

<!-- links -->
[node]: https://nodejs.org/en/download
[parcel]: https://parceljs.org
[git]: https://git-scm.com/downloads
[axe]: https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd
[configurator]: https://createapp.dev/
[github-desktop]:  https://desktop.github.com/
[lighthouse]: [https://developer.chrome.com/docs/lighthouse/overview/]
[designs]: ../designs/
[data]: https://drive.google.com/file/d/1c7MKP-vr3r_64aiW7TAM2VxKRP7jK-4I/view?usp=sharing
