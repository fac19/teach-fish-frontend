const Airtable = require("airtable");

const entriesTable = base("Entries");
const studentTable = base("Students");

import React, { useContext } from "react";
import { AppContext } from "../utils/AppContext";

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
  const { loginInfo, setLoginInfo } = useContext(AppContext);
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("loginInfo", loginInfo);
  // console.log(fields);
  // get user info from app context
  try {
    const createdRecord = await studentTable.create({
      fields: {
        Name: token.full_name,
        Gender: fields.gender,
        Email: token.email,
        "Current level": 0,
        DOB: fields.dob,
        Country: fields.Country,
      },
    });
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
