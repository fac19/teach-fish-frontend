// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

var Airtable = require("airtable");

exports.handler = async (event, context) => {
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_API_URL } = process.env;

  const base = new Airtable({
    endpointUrl: AIRTABLE_API_URL,
    apiKey: AIRTABLE_API_KEY,
  }).base(AIRTABLE_BASE_ID);

  const studentTable = base("Students");
  const minifyRecord = (record) => {
    return {
      id: record.id,
      fields: record.fields,
    };
  };

  const form = JSON.parse(event.body);

  let data = [];
  const createdRecord = await studentTable
    .create([
      {
        fields: {
          Name: form.Name,
          Gender: form.gender,
          Email: form.Email,
          "Current level": 0,
          DOB: form.dob,
          Country: form.country,
        },
      },
    ])
    .then((students) => {
      students.forEach((student) => data.push(student.fields));
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
