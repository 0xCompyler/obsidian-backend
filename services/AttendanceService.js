const moment = require('moment-timezone');
const doc = require('../utils/SpreadSheetConfig');

/**
 * Service class for persisting attendance in a google spreadsheet.
 */
class AttendanceService {

  async markAttendance(submission) {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({
      time: moment
        .tz('Asia/Kolkata')
        .format('dddd, MMMM Do YYYY, h:mm:ss a'),
      ...submission,
    });

    return 0;
  }

  async setupSheetHeaders() {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    await sheet.setHeaderRow([
      "time",
      "name",
      "status"
    ]);
  }
}

module.exports = AttendanceService;