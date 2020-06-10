// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

var Airtable = require("airtable");

exports.handler = async (event, context) => {
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_API_URL } = process.env;

  const base = new Airtable({
    endpointUrl: AIRTABLE_API_URL,
    apiKey: AIRTABLE_API_KEY,
  }).base(AIRTABLE_BASE_ID);
};

const entriesTable = base("Entries");
const studentTable = base("Students");
// const { loginInfo, setLoginInfo } = useContext(AppContext);
const token = JSON.parse(localStorage.getItem("token"));
fields = JSON.parse(fields);
// console.log("loginInfo", loginInfo);
// console.log(fields);
// get user info from app context
console.log("token", token);
console.log(token.email, token.full_name);
console.log("fields", fields);
console.log(fields.gender, fields.dob, fields.country);

const minifyRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

const createdRecord = await studentTable.create([
  {
    fields: {
      Name: token.full_name,
      Gender: fields.gender,
      Email: token.email,
      "Current level": 0,
      DOB: fields.dob,
      Country: fields.country,
    },
  },
]);
console.log(minifyRecord(createdRecord));
try {
  //   const subject = event.queryStringParameters.name || "World";
  return {
    statusCode: 200,
    body: JSON.stringify(createdRecord),
    // // more keys you can return:
    // headers: { "headerName": "headerValue", ... },
    // isBase64Encoded: true,
  };
} catch (err) {
  return { statusCode: 500, body: err.toString() };
}

// url = AIRTABLE_API_URL + / + AIRTABLE_BASE_ID + / + tableName;

// };
