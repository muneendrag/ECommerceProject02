Feature: Customers

Background:   
  Given User Launch Chrome browser 
	When User opens URL "http://admin-demo.nopcommerce.com/login" 
	And User enters Email as "admin@yourstore.com" and Password as "admin" 
	And Click on Login 
	Then User can view Dashboad 
	When User click on customers Menu 
	And click on customers Menu Item 

Scenario: Adding new customer
	And click on Add new button 
	Then User can view Add new customer page 
	When User enter customer info 
	And click on Save button 
	Then User can view confirmation message "The new customer has been added successfully." 
	And close browser 
	
Scenario: Search Customer by email
	And enter customer email
	When click on search button
	Then user should found email and details
	And close browser
	
Scenario: Search Customer by name
	And enter customer firstname
	And enter customer lastname
	When click on search button
	Then user should found name and details
	And close browser

    