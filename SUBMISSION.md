# Submission Notes

These notes are for the benefit of the reviewer - they are not required for the project submission, but feel free to include any additional information about your submission that you would like the reviewer to know.

We've provided some questions to help guide you, but feel free to include any additional information if you feel it will be helpful.

## Given more time, what would you have included or done differently?

* Redis caching on the back-end API
* More in-depth SuperTests for the back-end to check response body
* Mocking external services with Nock would be the approach for the above point. I made it load the local JSON for now when in tests.
* Generally, it's best in large projects to build off an existing component library like Atom or MUI... but to save time I built things from scratch as the scope was limited.
* I avoided a CSS library... as performance was mentioned, JSON object and style properties are the most performant in benchmarking... you can pretty much achieve everything this way and it's faster... but in a larger project, I would factor in the team's knowledge and project conventions and use something like StyledComponents.
* I would have used a different approach for styling the checkbox in the dropdown... it looks good, but the keyboard focus doesn't show when using keyboard control. I left in the HTML code but commented out using `<Select><Option>` which has better keyboard control... but does not match the design. I would make this component from scratch in React given time or base it off a MUI one.
* I tested it in chrome and firefox mostly but i saw there was a minor css issue in safari the triangle in the dropdown panel is slightly off by a couple of pixels... but ran out of time.
* A production Api should have Logging, Monitoring and some kind of online documentaion like swagger... I would have liked to add these.
* The inputs should have been sanitzed in a more secure way on the query string parameters, to prevent malicous code injection.

## Did you deviate from the instructions? If so, why?

* There was a bit of a contradiction... the requirements talked about an All option for the radio buttons... but in the design, this was missing... it's usually impossible to deselect a radio button... so I assumed this was a bit of a challenge. The easy way would be to add an All option, but I used a useRef and reset the whole form which achieved this without the need to deviate from the design and then in the code made it default to all.
* I added a Loading message to help with unit tests to check data was loaded successfully.
* I added some animations because they looked cool :)

## What part of the exercise did you find the biggest challenge, and why?

* My IDE markdown viewer didn't show the external URL for the data... there was a local data JSON... so I wrongly assumed this was meant to be used and the instructions had a mistake... I double-checked the markdown and couldn't find the URL. I made it into a git repo, and loaded it into GitHub then the links worked and I saw the correct link. I'm assuming this was intentional but the link was not in a format that can be directly fetched using node... I spent a fair amount of time searching through the Google API and Google Drive docs before I found a way to get around needing authentication. If this was intentional then this was a devious challenge, if not then it might be better to use the URL that can be downloaded directly using Fetch in the requirements.

## Is there anything else you'd like us to know?

* I found it interesting and challenging.
