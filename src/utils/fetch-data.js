var Airtable = require("airtable");
var base = new Airtable({ apiKey: "xxxxxx" }).base("appiR8DpsnVuhNHj4");

export default function fetchStudentRecords(email, changeStateFunction) {
  base("Students")
    .select({
      filterByFormula: `{Email} = "${email}"`,
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
          console.log("Retrieved", record.get("Email"));
          let user = record.get("Email");
          changeStateFunction(user);
          return user;
        });

        // // To fetch the next page of records, call `fetchNextPage`.
        // // If there are more records, `page` will get called again.
        // // If there are no more records, `done` will get called.
        // fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      },
    );
}
