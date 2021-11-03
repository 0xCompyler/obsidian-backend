const asyncHandler = require("../middlewares/asyncHandler");
const AttendanceService = require("../services/AttendanceService");

module.exports.markAttendanceRequest = asyncHandler(async (req, res, next) => {
	try {
		const attendanceService = new AttendanceService();

		await attendanceService.setupSheetHeaders();

		attendanceService.markAttendance({
			name:req.student.name,
			status:"Present"
		}).then(() => {
			res.status(200).json({
				success: true,
				message: "Attendance marked successfully!"
			});
		});
		
	} catch (e) {
		console.log(e);
		res.status(500).json({
			success: false,
			message: "Unsuccessfull"
		});
	}
});