package com.taskmanagement.steps;

import com.taskmanagement.pagesobjects.EmployeeLoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EmployeeLoginStep {

	EmployeeLoginPage employeelogin= new EmployeeLoginPage(); // creating object for employee login
	//TC 02 Check employee login methods calling
		@Given ("^user launch the Chrome application$")
		public void the_user_launch_chrome_emplo()
		{
			employeelogin.browserLaunch("chrome", "http://examples.codecharge.com/TaskManager/Default.php");
		}
	
		@When("^the user click on Administration tab$")
		public void the_user_click_on_Administration_tab() throws Throwable {
			employeelogin.administration();
		    
		}
		@Then("^the user enters login credentials with vaild details and clicks login$")
		public void the_user_enters_login_credentials_with_vaild_details_and_clicks_login() throws Throwable {
			employeelogin.loginCheck();
		}
}
