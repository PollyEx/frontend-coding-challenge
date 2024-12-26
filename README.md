# Polly Coding Challenge (frontend)

Welcome to Polly's Coding Challenge! We're imagining built a simple task management application built with Vue.js and TypeScript. The goal of this challenge is to demonstrate your skills in front-end development and problem-solving. The only challenge that's required is the [AI Integration](#ai-integration). If you complete the AI Integration challenge with extra time, feel free to also work on any of the optional challenges.

## Getting Started

This project was created using [vite](https://vite.dev/guide/). More specifically, the [vue-ts template](https://vite.new/vue-ts). If you're new to running vite projects, be sure to run `npm install`, and then `npm run dev`. Check out the [vite docs](https://vite.dev/guide/cli.html#dev-server) for more information.

### Setup Script

The project uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### IDE Support

This project uses Typescript. Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

### Icons

All of the icons used in this project are svg files downloaded from [Font Awesome](https://fontawesome.com/).Those svg files are rendered as Vue components thanks to the [vite-svg-loader](https://github.com/jpkleemans/vite-svg-loader) plugin. Feel free to change or add any icons as you see fit.

## Required Challenges

### AI Integration

Our product team at TaskBot really believes there is a market for a task list that uses an [LLM](https://en.wikipedia.org/wiki/Large_language_model) to help users brainstorm possible tasks. Our design team already did some discovery work and provided [the following designs](https://www.figma.com/design/cXVlfJKpDi3s8afFAghLzk/Front-End-Assessment). These designs are meant to be an aid for you in building out this feature, not a pixel perfect spec you need to follow.

Even with the design team's exploration, there are still lots of unknowns. Thankfully we have a senior level engineer like you to help us connect the dots. We're pretty sure we need a place for users to enter their prompt, maybe something like "I need help planning a birthday party for my daughter on Friday". The design team thought we'd have a chat, but that might have to wait for a future iteration. Hopefully the LLM can take the prompt and generate a list of new tasks for us to create for the user.

Our AI team is suggesting we use [cohere-ai](https://github.com/cohere-ai/cohere-typescript) for our LLM, since they have a Typescript SDK but you're free to choose what you think is best.

## Optional Challenges

### Task Urgency

Our tasks already have an optional due date field, but for the most part our product team feels like that value is underutilized. The design team has had a plan to display an "urgency badge" on each task to help users prioritize their tasks. Basically, each task with a due date should show a badge with user friendly text describing how far out this due date is, as well as a color-coding to help users quickly identify the most urgent tasks. Take a look at [one of our designs](https://www.figma.com/design/cXVlfJKpDi3s8afFAghLzk/Front-End-Assessment?node-id=52-245) to see how the design team imagined these badges looking. Again, these designs are meant to be an aid for you in building out this feature, not a pixel perfect spec you need to follow.

### Separate Completed Tasks

Our product team at TaskBot has received a lot of feedback from upset customers who are frustrated that their completed tasks are mixed in with their incomplete tasks. The product team would like to know if you can implement a way to separate completed tasks from incomplete tasks. The design team already did some discovery work and provided [the following designs](https://www.figma.com/design/cXVlfJKpDi3s8afFAghLzk/Front-End-Assessment?node-id=52-245). These designs are meant to be an aid for you in building out this feature, not a pixel perfect spec you need to follow.

### Context Popover Menu

As you probably noticed, the individual task components never got completely finished. The design team knew that we'd need a place to perform actions like "edit", "delete", and possibly more in the future. They decided a context menu that's hidden behind the ellipsis icon would be a good solution. The dev team before you put the ellipsis icon in place, but never got around to implementing it. The product team would like to know if you can implement a context menu here with actions "Edit Task" and "Delete Task". 

### Editing and Deleting Tasks

If you implemented the context menu, we can finally implement the "Delete Task" and "Edit Task" actions our users have been asking for. If you have time, see if you can implement these features.

### Drag & Drop Tasks

Ideally, our users would be able to drag and drop tasks to reorder them. For the most part, there aren't a lot of opinions about how we should accomplish this. However, the design team wants to make sure that this doesn't interfere with accessibility and would like the feature to work on mobile as well.

## Extra Credit

While we did try to structure this project in a realistic and applicable way, there are lots of opportunities for improvement intentionally left in. You should feel free to make any changes you think make the code base better.
