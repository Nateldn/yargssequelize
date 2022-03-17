const yargs = require("yargs");
const Movie = require("./movieTable");

//===== Create Function
exports.addMovie = async (movieObj) => {
  try {
    await Movie.create(movieObj);
  } catch (error) {
    console.log(error);
  }
};

//===== Retreive/Read Records
exports.listMovies = async (filterObj) => {
  console.log("filterObj: ", filterObj);
  try {
    if (filterObj.undefined === undefined) {
      return await Movie.findAll();
    } else {
      return await Movie.findOne({ where: filterObj });
    }
  } catch (error) {
    console.log(error);
  }
};

//===== Update Function
exports.updateActor = async (inputObj) => {
  try {
    return await Movie.update(
      { actor: inputObj.newActor },
      {
        where: {
          actor: inputObj.oldActor,
        },
      }
    );
  } catch (error) {
    console.log(error, "Error - actor was not added - try again!");
  }
};

//===== Delete function

exports.deleteActor = async (actorName) => {
  try {
    return await Movie.destroy({
      where: {
        actor: actorName,
      },
    });
  } catch (error) {
    console.log(error);
  }
  if (deleteActor) {
    console.log(`${actor} successfully removed from the movie.`);
  } else {
    console.log("Error unable to delete record");
  }
};
