# Exercise 2: Make Todo List Great Again!
Howdy, guys! In this task you are challenged to used some _redux_ knowledge you have. I suggest you to go through the basic parts of _redux_ way of doing things, what are actions actions and what happens when you dispatch them, what are reducers and how to connect _redux_ store to your project. 

The project that we used to work on is broken into pieces again, however I scattered some comments in the every code so pay attention 👀 

### *NOTE1*: In this task we local use _dev-server_ and I believe you are already know how to rig it up. Styles and class names are provided so you don't need to design anything, but keep in mind if you wish to add something on your own, feel free to do so 🎉🎉🎉

#### *NOTE2*: You are starting with an App already being connected to redux store and even though _thunk_ and _dev tools_ are supported of the box, check out the way it is done. If you will have any questions, do not hesitate to ask.

#### *NOTE3*: Avoid switching to `master` branch, since it contains working example of the project.

#### HAPPY HACKING! 🙌

## What you need to achieve
This is how the app was looking before I messed everything up again :very_sad_emoji: ...

*Todo list now have a filter options with tree different options:*
#### Display All Tasks  
![ Display All Tasks](https://raw.githubusercontent.com/voogieJames/react-101/exercise2/snapshots/snap1.png)
Shows all the tasks both _completed_ and _active_. 

#### Completed Tasks 
![ Display Completed Tasks](https://raw.githubusercontent.com/voogieJames/react-101/exercise2/snapshots/snap2.png)
Displays _completed_ tasks only. 


#### Active Tasks 
![ Display Active Tasks](https://raw.githubusercontent.com/voogieJames/react-101/exercise2/snapshots/snap3.png)
Displays _active_ tasks only. 

## Available setup

After cloning the repo you need to start npm project, meaning, download all dependencies(`npm install`) and then you can run following scripts:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### server or dev-server

Contacts list app is fetching data from the glitch server app here: [https://voogie.glitch.me/contacts](https://voogie.glitch.me/contacts)
If by some reason data isn't available, I encourage you to use local *dev-server*
To start local *dev-server* run `npm run dev-server` from the project root folder and make sure that in your application
you're using the following URL: *http://localhost:8686/people*.
