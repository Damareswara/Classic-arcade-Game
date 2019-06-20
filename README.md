# Classic-arcade-Game
+ while developing this project I learn a lot
+ we learn  document object modeling and JavaScript
+ while coding I enjoyed a lot
## details and rules about arcade game(by default)
+ this game contain two sprits (human and bug)
+ condition is when the human touches the bug the human will die and when the human touches the water the score will be increase
+ these are the rules of the arcade game
## the steps I followed to develop the arcade game
+ download the Skeleton structure file(Zip File) from https://github.com/udacity/frontend-nanodegree-arcade-game
+ extracting the zip file
+ creating the root file  `index.html`
+ creating the div(classes) according to need
+ setting all links in the index file
+ creating `app.js` for graphical JavaScript
+ The file `engine.js` is for the creation of game environment in 2D
+ The file `resources.js` is for the load the all url's
+ `style.css` is a css file to add styles to html file externally
+ `image` file contain different sprits and game environmental images
+ for the player sprite I used these functions `render()` , `update()` and `handleInput()`
+ The variables `crashedTimes` and `scoreNow` are the counting variables to count score and number of times crashed
# Procedure to play game or rules of game (Coded by me)
+ press the motion control keys(other then mouse) in the keyboard the sprite player will move in grid appearing in the game
+ if you touch the water other end of the grid the variable score will increase by 1 , if you crash with sprit bug while crossing the road the variable crash will increase by 1  
+ If the crash=5 then the game will be over
+ If game will be over you will get a alert as (Game over)
+ If the score>=5 means the score will display as (your score)
+ If the score>=6 and <=9 means the score will display as (High Score)
+ If the score>=10 means the score will display as (Arcarde master)
+ if you want to play again means click the button play again 
