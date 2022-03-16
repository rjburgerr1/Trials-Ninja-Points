# Repository for [Trials Ninja Points](https://trialsnp.netlify.app/ "Compete with other Riders now!")

## What is Trials Ninja Points?
TNP is a website where ninja riders from the game franchise [Trials](https://en.wikipedia.org/wiki/Trials_(series)) compete based on in-game, as well as, opinion-based metrics.
<br><br>
## How are Ninja Points Defined?


### 1. Ninja Points are composed of [subjective](https://www.vocabulary.com/dictionary/subjectivity) & [objective](https://www.vocabulary.com/dictionary/objectivity) measures for a run on a track



| Metric | Type | Description |
| --- | --- | --- |
| Faults  | Objective | The amount of times a player resets to a checkpoint during a run on a track in game. (1-499 faults possible per run) |
| Time | Objective | The amount of time a player took to pass a track in game. (<29:59.999 minutes possible) |
| Ninja Level | Subjective |  The rider's own opinion of how difficult a track feels to them, relative to other tracks that they've played (rated on a scale of {0.5 > x < 9.5}) | 
| Length | Subjective |  The rider's own opinion of how long a track feels to them, relative to other tracks they've played. Thought of based on number of obstacles. (Rated on a [likert scale](https://en.wikipedia.org/wiki/Likert_scale)) | 
| Consistency | Subjective | The rider's own opinion of how consistent a track feels to them, relative to other tracks they've played. Thought of best by how likely a rider is to fault given all obstacles on a given track.  (Rated on a [likert scale](https://en.wikipedia.org/wiki/Likert_scale)) |



### 2. Ninja Points are calculated using an algorithm created based upon those 5 measures
### 3. The higher/lower the ninja points are for a given run, the better/worse the run is, respectively 
     
<br>

## Website Composition
- [MySQL](https://www.mysql.com/) Relational Database
- [React](https://reactjs.org/) Frontend App
- [Node.js](https://nodejs.org/en/) Backend Server
- [Prisma](https://www.prisma.io/) object-relational mapper

<br>

<br>

## Quick-start for Contributing
### 1. Install [Node.js](https://nodejs.org/en/download/) (npm -v to check version)
### 2. Fork & Clone Repo `git clone https://github.com/rjburgerr1/Trials-Ninja-Points.git`

 
  - Setup for React Frontend App & Node Backend Server
      1. Change directory into base directory `cd Trials.com/`
      1. Install Node Modules `npm install --workspaces`
      1. Setup .env files using .env.development.sample files    
          1. edit `~Trials.com/react-frontend/.env.development.sample` & `~Trials.com/node-server/.env.development.sample` by filling out required environment variables
          1. rename .env.development.sample to .env.development
      
      
      1. Run start scripts for node backend & react frontend `npm start --workspace=node-server && npm start --workspace=react-frontend`
      
      <br>
      
      ```html
      # All commands for above steps, to start.
      
      # Change directory into base directory
      cd Trials.com/

      # Install node_modules
      npm install --workspaces

      # Setup .env files
      nano node-server/.env.development.sample
      nano react-frontend/.env.development.sample

      # Run start scripts for node-server & react-frontend (open two terminals for this)
      npm start --workspace=node-server
      npm start --workspace=react-frontend
      ```
    
  - Setup MySQL Database
    1. Install MySQL workbench (optional) & MySQL Server (If on windows, this can be done with the [MySQL installer](https://dev.mysql.com/downloads/installer/))
    2. Run [init.sql](https://github.com/rjburgerr1/Trials-Ninja-Points/blob/master/Trials.com/database/init.sql) + [structure-diff.sql](https://github.com/rjburgerr1/Trials-Ninja-Points/blob/master/Trials.com/database/structure-diff.sql) scripts in order
