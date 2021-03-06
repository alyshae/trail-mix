  # TrailMix

  Dropping bread crumbs is a thing of the past, now there's TrailMix to keep you on the right path! Track all your favorite trails & details, add newly discovered trails & delete ones you've conquered.

  Heroku Link:  https://glacial-ridge-83997.herokuapp.com/

  ## Technologies used:
  - JavaScript
  - jQuery
  - ajax
  - MongoDB
  - Express
  - Node
  - Bootstrap
  - Mustache

  ## Existing Features:
  - Add new trails
  - Delete existing trails
  - Update existing trails
  - Search through your trails by name

  ## Planned Features:
  - Google Maps integration to show all trail-heads on a main map
  - Google Map integration for each info-modal to show the actual trail path for
    the selected trail
  - User Logins/Accounts
  - Social capabilities/sharing of trails, photos, comments, etc.
  - Advanced search capabilities (back-end search)

  ## Searching for a trail:
  ![screenshot #1](https://github.com/kabitachatterjee/trail-mix/blob/cleanUpBranch2/public/images/screenshot1.png?raw=true)

  ## Adding a trail:
  ![screenshot #2](https://github.com/kabitachatterjee/trail-mix/blob/cleanUpBranch2/public/images/screenshot2.png?raw=true)


  ## Endpoints:
  - method: GET,
    path: "/api/trails",
    description: lists out all trails as a JSON object
  - method: GET,
    path: "/api/trails/:id",
    description: a single JSON object with details about the trail with the provided ID
  - method: POST,
    path: "/api/trails",
    description: creates a new trail as a JSON object by taking input from a form
  - method: PUT,
    path: "/api/trails/:id",
    description: updates a trail as a JSON object by taking input from a form
  - method: DELETE,
    path: "/api/trails/:id",
    description: removes the data for a single JSON object with the provided ID
