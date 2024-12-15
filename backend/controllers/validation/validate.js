const validateDetails = (q, days) => {
  let errors = [];
  if (!q || typeof q !== "string")
    errors.push("Query is required and should be string.");
  if (typeof days !== "string")
    errors.push("Days is required and should be string.");
  return errors;
};

const validateHistoryDetails = (q, dt) => {
  let errors = [];
  if (!q || typeof q !== "string") {
    errors.push("Query is required and should be string.");
  }
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  const date = new Date("2024-01-01");

  if (!dt || typeof dt !== "string" || !dateRegex.test(dt)) {
    errors.push("date is required, should be string and with a date format.");
  }
  const input = new Date(dt);
  if (input < date)
    errors.push(
      `Date should be greater then ${date.toISOString().split("T")[0]}`
    );
  return errors;
};

function isDateInRange(inputDate) {
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() + 14);

  const endDate = new Date(today);
  endDate.setDate(today.getDate() + 300);

  const parsedDate = new Date(inputDate);

  return parsedDate >= startDate && parsedDate <= endDate;
}

const validateFutureDetails = (q, dt) => {
  let errors = [];
  if (!q || typeof q !== "string") {
    errors.push("Query is required and should be string.");
  }
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

  if (!dt || typeof dt !== "string" || !dateRegex.test(dt)) {
    errors.push("date is required, should be string and with a date format.");
  }
  const input = new Date(dt);
  console.log(isDateInRange(input));
  if (!isDateInRange(input))
    errors.push(`Date should be 14 days from now till 300 days`);
  return errors;
};

const validateAlertDetails = (q) => {
  let errors = [];
  if (!q || typeof q !== "string")
    errors.push("Query is required and should be string.");
  return errors;
};

const validateMarineDetails = (q, days) => {
  let errors = [];
  if (!q || typeof q !== "string") {
    errors.push("Query is required and should be string.");
  }
  console.log(typeof parseInt(days), typeof days);
  if (
    !days ||
    typeof days !== "string" ||
    (!parseInt(days) >= 1 && !parseInt(days) <= 7)
  ) {
    errors.push("days is required, should be string and between 1 to 7.");
  }
  return errors;
};

const validateAstronomyDetails = (q, dt) => {
  let errors = [];
  if (!q || typeof q !== "string") {
    errors.push("Query is required and should be string.");
  }
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

  if (!dt || typeof dt !== "string" || !dateRegex.test(dt)) {
    errors.push("date is required, should be string and with a date format.");
  }
  return errors;
};

function validateTimeZoneDetails(q) {
  let errors = [];
  if (!q || typeof q !== "string") {
    errors.push("Query is required and should be string.");
  }
  return errors;
}

module.exports = {
  validateDetails,
  validateHistoryDetails,
  validateFutureDetails,
  validateMarineDetails,
  validateAstronomyDetails,
  validateTimeZoneDetails,
  validateAlertDetails,
};
