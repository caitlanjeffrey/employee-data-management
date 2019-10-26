var firebaseConfig = {
    apiKey: "AIzaSyAWPl0FbQKxSic1M35sIhCb9ba2dy_SONI",
    authDomain: "employee-data-management-d4d14.firebaseapp.com",
    databaseURL: "https://employee-data-management-d4d14.firebaseio.com",
    projectId: "employee-data-management-d4d14",
    storageBucket: "employee-data-management-d4d14.appspot.com",
    messagingSenderId: "530804462349",
    appId: "1:530804462349:web:00d2b91217b8abeb989644"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var employeeName = "";
var employeeRole = "";
var startDate = "";
var monthlyRate = "";

$(".btn").on("click", function(event){
  event.preventDefault();

  employeeName = $("#inputEmployeeName").val().trim();
  employeeRole = $("#inputRole").val().trim();
  startDate = $("#inputStartDate").val().trim();
  monthlyRate = $("#inputEmployeeMonthlyRate").val().trim();

  database.ref().push({
    employeeName: employeeName,
    employeeRole: employeeRole,
    startDate: startDate,
    monthlyRate: monthlyRate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP,
  });

  // for (var database = i; i < database.length; i++) {
  //   var newTableRow = ("#test").append(database.length);
  // }
});

  database.ref().orderByChild("dateAdded").on("child_added", function(childSnapshot){
    console.log("+- calling child_added");

    console.log(childSnapshot.val().employeeName);
    console.log(childSnapshot.val().employeeRole);
    console.log(childSnapshot.val().startDate);
    console.log(childSnapshot.val().monthlyRate);
    console.log(childSnapshot.val().dateAdded);

    var e = $("<tr>");
    $("tbody").append(e);
    $(e).append("<td>" + childSnapshot.val().employeeName);
    $(e).append("<td>" + childSnapshot.val().employeeRole);
    $(e).append("<td>" + childSnapshot.val().startDate);
    $(e).append("<td>" + childSnapshot.val().monthlyRate);

  }, function(errorObject){
    console.log("The read failed: " + errorObject);
  });
