import React, { useContext } from "react";
import { AppContext } from "../utils/AppContext";

const Airtable = require("airtable");

const entriesTable = base("Entries");
const studentTable = base("Students");

// url = AIRTABLE_API_URL + / + AIRTABLE_BASE_ID + / + tableName;

const PostData = (event, context) => {
  const tableName = event.queryStringParameters.table;

  // if (event.httpMethod !== "POST") {
  //     return { statusCode: 405, body: "Method not allowed - please POST" };
  // }
};

const minifyRecord = (record) => {
  return {
    id: record.id,
    fields: record.fields,
  };
};

const postStudent = async (fields) => {
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
  try {
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
  } catch (err) {
    console.error(err);
  }
};

const postEntries = async (fields) => {
  try {
    const createdRecord = await entriesTable.create(fields);
    console.log(minifyRecord(createdRecord));
  } catch (err) {
    console.error(err);
  }
};

export { postStudent, postEntries };
