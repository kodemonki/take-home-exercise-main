# Web Team Candidate Assessment - Backend

Welcome to the web team's backend assessment. This assessment is designed to mimic the type of work you would be doing as a member of the web team and to give you a chance to show off your skills.

Make sure you read these instructions carefully before you start. If you have any questions please reach out to your recruiting specialist.

Once you've completed the assessment, please leave some notes for the reviewer in the [SUBMISSION.md](SUBMISSION.md) file. It's a good way for us to get to know you and your experience with the exercise. We want to hear from you!

**Happy coding and best of luck** 🎉

## Prerequisites

Install the following tools on your machine:

- [NodeJs][node] - our JavaScript runtime environment (install the latest LTS version)
- [Git][git] - our source control system (or [Github Desktop][github-desktop] if you don't want to use the command line)
- [SQLite][sqllite] - the database we'll be using for this assessment.

## Getting Started

---

## Setup

First, run `npm install` to install all the dependencies.

Then, run the following command to initialize your database:

```bash
npm run db:setup
```

This will create a `database.db` file in the root of your project, with some sample data inside.

Then, run the following command to start the server:

```bash
npm run serve
```

You should see the following message in your terminal:

```bash
Example app listening at http://localhost:<PORT>
```

Visit the API at `http://localhost:<PORT>/media` to see the list of media items in the database. Right now there is only one item in the database.

## Instructions

**Take a look at the designs for the application in the [designs][designs] folder**.

You are required to build the backend for a web application that allows users to search for and view information about movies and books. You can find all of the data for the media items at **[this url][data]**

**Note:** You don't need to build the frontend for this application, but you should design the API so that it will be easy to integrate with a frontend in the future.

We've split the requirements into three sections - **basic**, **intermediate**, and **advanced**.
All candidates should aim to complete all of the basic requirements. For Senior+ and Tech Lead candidates,
please also aim to complete the intermediate and most of the advanced requirements.
For all other roles, these sections are optional, but we recommend you attempt some of them if you have time.
Choose the ones that you think will best showcase your skills
You can also add any other additional features you think would be useful or improve the user/developer experience.

### Important

To assess your work, we'll be running the following commands:

```bash
  npm run db:setup
  npm run db:seed
  npm run serve
```

You should ensure that your project is runnable using only these commands. You can add any other commands you like to the `package.json` file, but these three commands should be sufficient to run your project.

### Basic

- Create a schema for the database that will store the media items. The schema should include the following fields:
  - `id` - a unique identifier for the media item
  - `title` - the title of the media item
  - `year` - the year the media item was released
  - `genre` - the genre of the media item
  - `type` - the type of media item (movie or book)
  - `image` - a URL to an image of the media item

- Create a backend API with C.R.U.D endpoints for the database. There should be endpoints for:
  - Creating a new media item
  - Reading a single media item
  - Reading a list of media items
  - Updating a media item
  - Deleting a media item

- add a command `npm run db:seed` that seeds the database with some sample data. There should be at least 10 media items in the database after running this command. How the media items are structured is up to you.

- ensure that the API handles validation of input data and provides meaningful error messages when users attempt invalid operations.

### Intermediate

- update your `db:seed` command, so that it seeds database with the data from **[this url][data]**. The data is in JSON format so you'll need to parse it before inserting it into the database.

- Implement pagination when fetching the media items from the database. The API should allow for the following query parameters:
  - `page` - the page number to fetch
  - `limit` - the number of items to fetch per page
  - `total` - the total number of items
  - some means to get the next page of results (e.g. a `next` link in the response body)

- add query parameters to the `GET /media` endpoint, so that users can sort and filter the results. The API should allow for the following query parameters:
  - `genre` - the genre to filter by
  - `year` - the year to filter by
  - `type` - the type to filter by
  - `sort` - the field to sort by (e.g. `title` (alphabetically) or `year`)

- Document your API - you can use any documentation tool you like, but we recommend using [Swagger](https://swagger.io/)

### Advanced

- Add unit tests for your endpoints and database queries, using your preferred testing framework. Tests should be executable using `npm run test`

- Add a search endpoint that allows users to search for media items by title

- Add a caching mechanism to the API. You can use any caching mechanism you like, but we recommend using [Redis](https://redis.io/)

- Implement rate limiting to prevent abuse of the API

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

### Do I have to use SQLite?

Yes, please use SQLite for this assessment.

### Can I use TypeScript?

Absolutely, we love TypeScript

### Do I have to use NodeJs?

Yes, please use NodeJs as it's the runtime environment we use on the web team.

### Can I use a language other than JavaScript?

No, please use JavaScript or TypeScript, though you can use any Javascript framework that you like.

### Can I add or remove additional dependencies in the `package.json` file?

Yes. We've included some recommended packages to get you started, but you can add, remove, or update any dependencies you like.

<!-- links -->
[node]: https://nodejs.org/en/download
[git]: https://git-scm.com/downloads
[github-desktop]: https://desktop.github.com/
[sqllite]: https://www.sqlite.org/download.html
[designs]: ../designs/
[data]: https://drive.google.com/file/d/1c7MKP-vr3r_64aiW7TAM2VxKRP7jK-4I/view?usp=sharing
