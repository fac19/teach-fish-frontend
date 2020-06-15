// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

var Airtable = require("airtable");

exports.handler = async (event, context) => {
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_API_URL } = process.env;

  const base = new Airtable({
    endpointUrl: AIRTABLE_API_URL,
    apiKey: AIRTABLE_API_KEY,
  }).base(AIRTABLE_BASE_ID);

  const entriesTable = base("Entries");

  const form = JSON.parse(event.body);

  let data = [];
  await entriesTable
    .create([
      {
        fields: {
          "Mission Number": 1, // Change later by getting number from URL or state
          Email: form.Email,
          "Task 1 URL": form.Task1,
          "Task 2a": form.Task2a,
          "Task 2b": form.Task2b,
          "Task 2c": form.Task2c,
        },
      },
    ])
    .then((entries) => {
      entries.forEach((entry) => data.push(entry.fields));
    })
    .catch((err) => {
      data = err;
      console.error(err);
    });
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
