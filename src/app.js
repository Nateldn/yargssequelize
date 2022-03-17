const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const {
  addMovie,
  listMovies,
  updateActor,
  deleteActor,
} = require("./movie/movieFunctions");

// console.log(sequelize);

const app = async (yargsObj) => {
  console.log(yargsObj);
  try {
    await sequelize.sync();
    if (yargsObj.add) {
      // Create
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
      console.log(JSON.stringify(await listMovies(), null, 2));
    } else if (yargsObj.list) {
      // list... retrieve
      console.log(
        JSON.stringify(
          await listMovies({ [yargsObj.key]: yargsObj.value }),
          null,
          2
        )
      );
    } else if (yargsObj.update) {
      // update actor
      console.log(await deleteActor({ actor: yargsObj.actor }));
    } else if (yargsObj.update) {
      // delete actor
      console.log(await deleteActor({ actor: yargsObj.actor }));
    } else {
      console.log("Incorrect command");
    }
    await sequelize.close();
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
