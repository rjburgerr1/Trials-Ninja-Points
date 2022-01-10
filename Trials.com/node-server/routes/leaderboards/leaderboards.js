const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * Create Dates come in the form "YYYY-MM-DDTHH:MM:SS.sssZ"
 * We split by "T" to get only the day of the year
 * This effectively removes any given time on the date given
 *
 * @param {*} date
 * @returns
 */
const formatDate = (date) => {
    return date.split("T")[0];
};

/**
 *  data types and formats are quite complicated here...
 *  The date fed into this function is a string in the form of DATETIME from MySql table
 *  Then we create a Date object from this and increment the
 *  day for use in filtering the data by day (>=YYYY-MM-DD - <YYYY-MM-DD+1)
 *
 * @param {*} date
 * @returns
 */
function subtractDayFromDate(date) {
    result = new Date(date);
    result.setDate(result.getDate() - 1); // Increment day

    return result;
}

/**
 * Check if date argument is the same as "today"s date
 *
 * @param {*} date
 * @returns
 */
const isToday = (date) => {
    var isToday = new Date().toDateString() == new Date(date).toDateString();

    return isToday;
};

const router = (app) => {
    app.get("/main-leaderboard", async (request, response) => {
        try {
            let result = !isToday(request.query.date)
                ? await prisma.profileshistory.findMany({
                      // Here we get the history of a leaderboard by checking dates between (given date - 1 day <-> the given date)
                      // The trick here is that the date given is from a datepicker calendar, and
                      // the date is actually +1 of the actual date picked because of the datepicker's functionality.
                      // So if the user clicks 12-21-2021, the datepicker sends 12-22-2021 to this function
                      // So we need to subtract 1 from the given date to get the correct bounds
                      where: {
                          history_dates: {
                              gte: subtractDayFromDate(
                                  formatDate(request.query.date)
                              ),
                              lt: new Date(formatDate(request.query.date)),
                          },
                      },
                      select: {
                          username: true,
                          country: true,
                          highest_level_pass: true,
                          highest_np_run: true,
                          total_ninja_points: true,
                      },
                      distinct: ["username"],
                      orderBy: {
                          total_ninja_points: "desc",
                      },
                  })
                : await prisma.profiles.findMany({
                      select: {
                          username: true,
                          country: true,
                          highest_level_pass: true,
                          highest_np_run: true,
                          total_ninja_points: true,
                      },
                      orderBy: {
                          total_ninja_points: "desc",
                      },
                  });

            return response.status(200).send(result);
        } catch (error) {
            console.log(error.message);
            return response.status(400).send("BAD REQUEST");
        }
    });

    app.get("/runs-leaderboard", async (request, response) => {
        try {
            // If date filter is used, grab old versions of leaderboard, otherwise check if trackName/creator filter is present
            // get runs filtered by trackName/creator, otherwise just get all runs

            let result = !isToday(request.query.date)
                ? await prisma.runshistory.findMany({
                      where: {
                          history_dates: {
                              gte: subtractDayFromDate(
                                  formatDate(request.query.date)
                              ),
                              lt: new Date(formatDate(request.query.date)),
                          },
                      },
                      distinct: ["rider", "track_name"],
                  })
                : await prisma.runs.findMany(
                      request.query.trackName
                          ? {
                                where: {
                                    track_name: request.query.trackName,
                                    creator: request.query.creator,
                                },
                            }
                          : {}
                  );
            return response.status(200).send(result);
        } catch (error) {
            console.log(error.message);
            return response.status(400).send("BAD REQUEST");
        }
    });

    app.get("/tracks-leaderboard", async (request, response) => {
        try {
            let result = !isToday(request.query.date)
                ? await prisma.trackshistory.findMany({
                      where: {
                          history_dates: {
                              gte: subtractDayFromDate(
                                  formatDate(request.query.date)
                              ),
                              lt: new Date(formatDate(request.query.date)),
                          },
                      },
                  })
                : await prisma.tracks.findMany({});

            return response.status(200).send(result);
        } catch (error) {
            console.log(error.message);
            return response.status(400).send("BAD REQUEST");
        }
    });

    app.get("/creators-leaderboard", async (request, response) => {
        try {
            let result = !isToday(request.query.date)
                ? await prisma.creatorshistory.findMany({
                      where: {
                          history_dates: {
                              gte: subtractDayFromDate(
                                  formatDate(request.query.date)
                              ),
                              lt: new Date(formatDate(request.query.date)),
                          },
                      },
                  })
                : await prisma.creators.findMany({});

            return response.status(200).send(result);
        } catch (error) {
            console.log(error.message);
            return response.status(400).send("BAD REQUEST");
        }
    });
};
// Export the router
module.exports = router;
