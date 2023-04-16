# 📜 SimpliScholar 📜
## Inspiration
Our team consists of students extremely interested in undergraduate research. However, an important part of research is reading multiple papers that tend to have extremely dense language. We all agreed that the toughest part about reading these papers is that we don't know what we don't know! We wanted a tool that provides simple summaries, with sources, to key ideas important to understanding these papers.
## What it does
SimpliScholar is a tool that identifies and summarizes key terms that are important to understanding a given paper. The user can paste any text they want key definitions of. Then, the user can simply click a button for natural language processing (NLP). SimpliScholar will identify important phrases and scrape the top search results from WikiPedia based off those phrases.
## How we built it
We build a full-stack application using the GERM+FN stack:
- GraphQL: Allows the client to request only the needed data.
- Express: Server for RESTful API
- React: Interactive front-end framework
- Mongo: Document database storing NLP search results
- Flask: Server dedicated for running NLP tasks
- Node: Server-side application

## Challenges we ran into
- We struggled with installing various NLP libraries. Found Spacey, which was simple to use.
- This was our first time using GraphQL, so setting that up to query a MongoDB database was difficult, but extremely rewarding in the end, as it simplifies how we set up endpoints in Express.
- We did not know how to run python NLP tasks alongside node.js web ones. As a result, we set up separate Node and Flask servers, and have them communicate with each other via REST APIs

## Accomplishments that we're proud of
- We are extremely proud to a have an MVP that solves a problem we all faced when trying to jump into research!

## What we learned
- We learned how to use GraphQL, tie it to the typical MERN stack, basic NLP.

## What's next for SimpliScholar
- Allow users to submit their PDF to identify skills a user already knows, then filter out the topics identified in a given paper.
- Recursively iterate through articles and find catalog number connections to reach any two Wikipedia pages recommended by our app.
- Have user authentication.
