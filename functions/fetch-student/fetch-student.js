var Airtable = require("airtable");
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

exports.handler = async (event, context) => {
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_API_URL } = process.env;
  const email = event.queryStringParameters.email;

  const base = new Airtable({
    endpointUrl: AIRTABLE_API_URL,
    apiKey: AIRTABLE_API_KEY,
  }).base(AIRTABLE_BASE_ID);

  let data = [];

  await base("Students")
    .select({
      maxRecords: 100,
      view: "Grid view",
      filterByFormula: `{Email} = "${email}"`,
      //   filterByFormula=Email=`"${email}"`
    })
    .firstPage()
    .then((records) => {
      records.forEach((record) => {
        console.log("email is :", email, "record is :", record);
        data.push(record.fields.Email);
      });
    })
    .catch((err) => {
      console.log(err.status); // only visible in netlify functions log when running in prod
    });
  // .eachPage(
  //   function page(records, fetchNextPage) {
  //     // This function (`page`) will get called for each page of records.

  //     records.forEach(function (record) {
  //       console.log("Retrieved", record.get("Email"));
  //       let user = record.get("Email");
  //       // changeStateFunction(user);
  //       data.push(user);
  //       console.log(data);
  //       // return user;
  //     });
  //   },
  //   function done(err) {
  //     if (err) {
  //       //   console.error(err);
  //       return `here is error: ${err}`;
  //     }
  //   },
  // );

  try {
    console.log("data ", data);
    return {
      statusCode: 200,
      body: JSON.stringify(data[0]),
      headers: {
        "content-type": "application/json",
      },
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};

// const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_API_URL } = process.env;
// var base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);

// export default function fetchStudentRecords(email, changeStateFunction) {
//   base("Students")
//     .select({
//       filterByFormula: `{Email} = "${email}"`,
//     })
//     .eachPage(
//       function page(records, fetchNextPage) {
//         // This function (`page`) will get called for each page of records.

//         records.forEach(function (record) {
//           console.log("Retrieved", record.get("Email"));
//           let user = record.get("Email");
//           changeStateFunction(user);
//           return user;
//         });

//         // // To fetch the next page of records, call `fetchNextPage`.
//         // // If there are more records, `page` will get called again.
//         // // If there are no more records, `done` will get called.
//         // fetchNextPage();
//       },
//       function done(err) {
//         if (err) {
//           console.error(err);
//           return;
//         }
//       },
//     );
// }
