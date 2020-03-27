package com.taskmanagement.steps;

import com.taskmanagement.pagesobjects.PriorityHighestTaskPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PriorityHighestTaskStep {
	PriorityHighestTaskPage priority= new PriorityHighestTaskPage();	 //creating object for Priority Highest to print in console 

	//TC 05 Print the priority highest task table

		@Given("^launch the Chrome application$")
		public void start_up()
		{
			priority.browserLaunch("chrome", "http://examples.codecharge.com/TaskManager/Default.php");
		}
		@When("^Priority field is inspected and search button should be clicked$")
		public void priority_field_is_inspected_and_search_button_should_be_clicked()  
		{
		priority.priority();   
		}

		@Then("^Print the priority highest Task table in the console$")
		public void print_the_priority_highest_Task_table_in_the_console() throws InterruptedException 
		{
			priority.print();   
		}

}
