const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "130891lion",
    database: "dvdrental",
  },
});

// db("country")
//   .select("country_id", "country")
//   .where({country_id:48})
//   .then((rows) => {
//     console.log(rows);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// db("city")
// .select("city_id", "city")
// .then((rows) => {
//   console.log(rows);
// })
// .catch((e) => {
//   console.log(e);
// });

// db("country")
// .insert({country:'New Israel'})
// .returning('*')
// .then((rows) => {
//   console.log(rows);
// })
// .catch((e) => {
//   console.log(e);
// });

db("country")
  .del()
  // .insert([
  //   {country:'New Poland'},
  //   {country:'New Ukraine'}
  // ])
  // .update({country:'New Israel updated'})
  .returning("*")
  .where({ country_id: "110" })
  .then((rows) => {
    console.log(rows);
  })
  .catch((e) => {
    console.log(e);
  });
