// Load the MySQL pool connection
const pool = require("../data/database-config");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// const { request } = require("express"); Keep for now, might need later

const router = (app) => {
  // Add a new run
  // ` (grave) for column and ' (apostrophe) for values for syntax fun :)
  //Name attribute in form element sets "'gamertag', and 'rank' etc...." name = ninjaLevel === request.body.ninjaLevel
  //Format:
  //sql: "INSERT INTO runs SET `gamertag` = 'efwef', `rank` = 'wefwef', `faults` = 'wefwe', `time` = 'fwefwef', `track-name` = 'wefwef', `ninja-points` = 'wefwef'"

  app.post("/submitted-run", async (request, response) => {
    // For some reason that I cannot seem to figure out. request.body returns an object with key value pairs from the submit form
    // and all of the values are strings even if they were not strings in the form

    // Convert specific fields to number, before insertion in db
    request.body.faults = Number(request.body.faults);
    request.body.rank = Number(request.body.rank);
    request.body.ninjaLevel = Number(request.body.ninjaLevel);
    request.body.rating = Number(request.body.rating);
    request.body.ninjaPoints = Number(request.body.ninjaPoints);

    const run = { ...request.body };
    delete run.creator; // creator does not belong in the run table, so remove it before inserting values

    try {
      await prisma.runs.create({
        data: { ...run }, // map run fields over data property
      });
      return response.sendStatus(200);
    } catch (error) {
      return response.status(400).send("BAD REQUEST");
    }
  });
};
// Export the router
module.exports = router;
