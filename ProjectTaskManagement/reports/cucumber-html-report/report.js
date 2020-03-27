$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/task.feature");
formatter.feature({
  "line": 2,
  "name": "Task_Management Website",
  "description": "",
  "id": "task-management-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Task_Management"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Add New Employee in Employee list",
  "description": "",
  "id": "task-management-website;add-new-employee-in-employee-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Add_Employee"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user click on administartion and login is proceeded",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user click on employee field",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the user click on add employee field and enter the credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on add button",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeStep.the_user_launch_chrome()"
});
formatter.result({
  "duration": 14405307500,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStep.the_user_click_on_Administartion_and_Login_is_proceeded()"
});
formatter.result({
  "duration": 7665929500,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStep.the_user_click_on_Employee_field()"
});
formatter.result({
  "duration": 1217335100,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStep.the_user_click_on_Add_Employee_field_and_enter_the_credentials()"
});
formatter.result({
  "duration": 3852109800,
  "status": "passed"
});
formatter.match({
  "location": "AddEmployeeStep.click_on_Add_button()"
});
formatter.result({
  "duration": 5889100100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To check the added employee getting logged in",
  "description": "",
  "id": "task-management-website;to-check-the-added-employee-getting-logged-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@TC_02_Check_Login"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "the user click on Administration tab",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the user enters login credentials with vaild details and clicks login",
  "keyword": "Then "
});
formatter.match({
  "location": "EmployeeLoginStep.the_user_launch_chrome_emplo()"
});
formatter.result({
  "duration": 7438655300,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeLoginStep.the_user_click_on_Administration_tab()"
});
formatter.result({
  "duration": 2413199400,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeLoginStep.the_user_enters_login_credentials_with_vaild_details_and_clicks_login()"
});
formatter.result({
  "duration": 7022835200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "To add Hold Type",
  "description": "",
  "id": "task-management-website;to-add-hold-type",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@TC_03_Add_Hold_Type"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "The user launch Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "the user click  Administration tab and do valid login",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "the user click on Types field and clicks Add New Type",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "the user enters Type Name and submit",
  "keyword": "And "
});
formatter.match({
  "location": "AddTaskTypeStep.the_user_launch_chrome_type_tt()"
});
formatter.result({
  "duration": 11902005000,
  "status": "passed"
});
formatter.match({
  "location": "AddTaskTypeStep.the_user_click_Administration_tab_and_do_valid_login()"
});
formatter.result({
  "duration": 6524980700,
  "status": "passed"
});
formatter.match({
  "location": "AddTaskTypeStep.the_user_click_on_Types_field_and_clicks_Add_New_Type()"
});
formatter.result({
  "duration": 3953231400,
  "status": "passed"
});
formatter.match({
  "location": "AddTaskTypeStep.the_user_enters_Type_Name()"
});
formatter.result({
  "duration": 6340259700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "To search closed status",
  "description": "",
  "id": "task-management-website;to-search-closed-status",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@TC_04_search_closed_status"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user launch Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the user enter the home page and select the status",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "the status field is inspected and search button is clicked",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchClosedStatusStep.the_user_launch_chrome_cls()"
});
formatter.result({
  "duration": 7141999400,
  "status": "passed"
});
formatter.match({
  "location": "SearchClosedStatusStep.the_user_enter_the_home_page_and_select_the_status()"
});
formatter.result({
  "duration": 2592359400,
  "status": "passed"
});
formatter.match({
  "location": "SearchClosedStatusStep.the_status_field_is_inspected_and_search_button_is_clicked()"
});
formatter.result({
  "duration": 8454591200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "To print the priority field",
  "description": "",
  "id": "task-management-website;to-print-the-priority-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@TC_05_Print_the_priority_field"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Priority field is inspected and search button should be clicked",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Print the priority highest Task table in the console",
  "keyword": "Then "
});
formatter.match({
  "location": "PriorityHighestTaskStep.start_up()"
});
formatter.result({
  "duration": 8510387100,
  "status": "passed"
});
formatter.match({
  "location": "PriorityHighestTaskStep.priority_field_is_inspected_and_search_button_should_be_clicked()"
});
formatter.result({
  "duration": 2773136200,
  "status": "passed"
});
formatter.match({
  "location": "PriorityHighestTaskStep.print_the_priority_highest_Task_table_in_the_console()"
});
formatter.result({
  "duration": 6276537700,
  "status": "passed"
});
});