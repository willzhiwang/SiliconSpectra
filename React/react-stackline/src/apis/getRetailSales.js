export const getData = async () => {
  try {
    // mock API call
    const salesData = require('../mock/stackline_frontend_assessment_data_2021.json');
    return salesData
  } catch (error) {
    console.log("error...", error);
  }
}