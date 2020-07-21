//NEW CONTENT HERE 

## My user stories
As a player, I want to see the rules displayed so that I know how to play.
As a player, I want several ways to win so that I can strategize.
As a player, I want to know if I win or lose so that I get closure/know the game is over.
As a player, I want to pick whether I am 'x' or 'o' (or an image) so that I can make sense of the gameplay.

As a sign-in user, I must be able to start a tic tac-toe game
When playing as a user, I must start as X and rotate between X and O
When playing as a user, I want to select available spaces on the board

## My wireframes
[First wireframe](https://imgur.com/tH0a56P)
[Second wireframe](https://imgur.com/bRA88R0)

## My planning, development story, problem-solving strategies
[informal planning outline](https://imgur.com/FHhiRQS)
Outlining my plan was the first step for me in the development process. I referenced the project requirements and example tic-tac-toe games available on google searches to inform my outline. When confronted with problems, I read into the browser console's error messages (and browser network) to locate bugs in my code. This was in tandem with inserting console logs in my code where I suspected errors could be present. I also used curl scripts to rule out whether bugs were front-end or back-end related. *update* I tried three different strategies to create winning game logic, I ended up choosing to use a Winning Combos array. Now, working on figuring out where to make a GET request when games are over to display wins for X and wins for O in a scoreboard.

## My unsolved mysteries
Right now, I'm having a hard time thinking of how to connect my game board cells to functions that will collectively update stored data in the game api (connected to authenticated user data).
-update: I want the game to start AFTER a user signs in. Trying to solve this. Not sure if every click a user makes needs to be logged into the user's data or just ending game results. 

## My technologies/languages
jquery, json, bootstrap, sass, webpack, a pre-built API

//NEW CONTENT ENDS HERE
