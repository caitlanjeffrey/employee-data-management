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
  monthlyRate = $("#inputEmployeMonthlyRate").val().trim();

  database.ref().push({
    employeeName: employeeName,
    employeeRole: employeeRole,
    startDate: startDate,
    monthlyRate: monthlyRate,
  });
});

  database.ref().on("value", function(snapshot){
    console.log(snapshot.val());

    console.log(snapshot.value().employeeName);
    console.log(snapshot.value().employeeRole);
    console.log(snapshot.value().startDate);
    console.log(snapshot.value().monthlyRate);

    $("#inputEmployeeName").text(snapshot.val().employeeName);

  }, function(errorObject){
    console.log("The read failed: " + errorObject);
  });
