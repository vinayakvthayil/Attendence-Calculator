document.getElementById('attendanceForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var totalClasses = document.getElementById('totalClasses').value;
    var classesAttended = document.getElementById('classesAttended').value;
    var minAttendance = document.getElementById('minAttendance').value;

    if (totalClasses < 0 || classesAttended < 0 || minAttendance < 0 || minAttendance > 100 || classesAttended > totalClasses) {
        document.getElementById('comment').innerText = 'Please enter proper values.';
        return;
    }

    if (totalClasses < classesAttended) {
        document.getElementById('comment').innerText = 'The number of classes attended cannot be greater than the total number of classes.';
        return;
    }

    var attendance = (classesAttended / totalClasses) * 100;
    var classesCanBeBunked = Math.floor((classesAttended - (minAttendance / 100) * totalClasses));
    var classesAbsent = totalClasses - classesAttended;

    document.getElementById('result').innerText = 'Attendance: ' + attendance.toFixed(2) + '%';
    document.getElementById('bunk').innerText = 'Classes that can be bunked: ' + (classesCanBeBunked < 0 ? 0 : classesCanBeBunked);
    document.getElementById('absent').innerText = 'Classes Absent: ' + classesAbsent;
    document.getElementById('comment').innerText = '';
});

document.getElementById('attendanceForm').addEventListener('reset', function(e) {
    document.getElementById('result').innerText = '';
    document.getElementById('bunk').innerText = '';
    document.getElementById('absent').innerText = '';
    document.getElementById('comment').innerText = '';
});
