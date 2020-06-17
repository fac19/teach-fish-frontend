// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

var Airtable = require("airtable");
exports.handler = async (event, context) => {
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_API_URL } = process.env;

  const base = new Airtable({
    endpointUrl: AIRTABLE_API_URL,
    apiKey: AIRTABLE_API_KEY,
  }).base(AIRTABLE_BASE_ID);

  const email = event.queryStringParameters.email;
  let data = [];

  await base("Entries")
    .select({
      maxRecords: 100,
      view: "Grid view",
      filterByFormula: `{Email} = "${email}" `,
    })
    .firstPage()
    .then((records) => {
      records.forEach((record) => {
        data.push(record.fields);
      });
    })
    .catch((err) => {
      console.log(err.status); // only visible in netlify functions log when running in prod
    });

  try {
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
