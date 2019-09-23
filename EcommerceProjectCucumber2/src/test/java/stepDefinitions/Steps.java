package stepDefinitions;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.*;
import junit.framework.Assert;
import pageObjects.CustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

public class Steps extends BaseClass{
	
	public WebDriver driver;
	public LoginPage loginPage;
	
	@Given("^User Launch Chrome browser$")
	public void user_Launch_Chrome_browser() {
		
		logger = Logger.getLogger("EcommerceProject");
		PropertyConfigurator.configure("log4j.properties");
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\munna\\eclipse-workspace\\EcommerceProjectCucumber01\\Drivers\\chromedriver.exe");
		driver=new ChromeDriver();
		logger.info("--launching browser--");
		driver.manage().window().maximize();
		loginPage=new LoginPage(driver);
	 
	}

	@When("^User opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url) {
		logger.info("--launching url--");
		driver.get(url);
	}

	@When("^User enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_enters_Email_as_and_Password_as(String uname, String pwd) {
		logger.info("--entering login details--");
		loginPage.setUserName(uname);
		loginPage.setPassword(pwd);
	}

	@When("^Click on Login$")
	public void click_on_Login() {
		loginPage.clickLogin();
	}

	@Then("^Page Title should be \"([^\"]*)\"$")
	public void page_Title_should_be(String title) throws InterruptedException {
		   
		if (driver.getPageSource().contains("Login was unsuccessful.")) {
			driver.close();
			logger.info("--Login Filed--");
			Assert.assertTrue(false);
		} else {
			logger.info("-- Login Passed--");
			Assert.assertEquals(title, driver.getTitle());
		}
		Thread.sleep(3000);
		
	}

	@When("^User click on Log out link$")
	public void user_click_on_Log_out_link() throws InterruptedException {
		logger.info("----logout----");
		loginPage.clickLogout();
		Thread.sleep(3000);

	}
	@Then("^close browser$")
	public void close_browser() {
		logger.info("--close browser--");
	    driver.quit();
	}
	
	
	// adding custmers step definitions
	
	@Then("^User can view Dashboad$")
	public void user_can_view_Dashboad() {
		addCustomer=new CustomerPage(driver);
		Assert.assertEquals("Dashboard / nopCommerce administration", addCustomer.getPageTitle());
	}

	@When("^User click on customers Menu$")
	public void user_click_on_customers_Menu() {
		addCustomer.clickOnCustomersMenu();
	}

	@When("^click on customers Menu Item$")
	public void click_on_customers_Menu_Item() {
		addCustomer.clickOnCustomersMenuItem();
	}

	@When("^click on Add new button$")
	public void click_on_Add_new_button() {
	    addCustomer.clickOnAddNew();
	}

	@Then("^User can view Add new customer page$")
	public void user_can_view_Add_new_customer_page(){
	   Assert.assertEquals("Add a new customer / nopCommerce administration", addCustomer.getPageTitle());
	}

	@When("^User enter customer info$")
	public void user_enter_customer_info() throws InterruptedException {
		logger.info("--entering customer details--");
	    String email=randomstring()+"@gmail.com";
		addCustomer.setEmail(email);
		addCustomer.setPassword("munna@123");
		addCustomer.setFirstName("Munna");
		addCustomer.setGender("Male");
		addCustomer.setLastName("Reddy");
		addCustomer.setDOB("12/08/2000");
		addCustomer.setCompanyname("Apple");
		//addCustomer.setCustomerRoles("Vendors");
		addCustomer.setAdminContent("Hi,Welcome");
		//addCustomer.setManagerOfVendoe("Vendor 2");
		
		
	}

	@When("^click on Save button$")
	public void click_on_Save_button() {
		logger.info("--saving customer data--");
	   addCustomer.clickOnSave();
	}

	@Then("^User can view confirmation message \"([^\"]*)\"$")
	public void user_can_view_confirmation_message(String message) {
		Assert.assertTrue(driver.findElement(By.tagName("body"))
				.getText().contains("The new customer has been added successfully"));
	}
	
	//stepdefinition for searching customer by email
	
	@When("^enter customer email$")
	public void enter_customer_email() {
		logger.info("--searching customer by email--");
		searchCustomer=new SearchCustomerPage(driver);
		searchCustomer.setEmail("victoria_victoria@nopCommerce.com");
	}

	@When("^click on search button$")
	public void click_on_search_button() throws InterruptedException {
		searchCustomer.clickSearch();
		Thread.sleep(2000);

	}

	@Then("^user should found email and details$")
	public void user_should_found_email_and_details() {
	    boolean status=searchCustomer.searchCustomerByEmail("victoria_victoria@nopCommerce.com");
	    Assert.assertEquals(true, status);
	}
	
	//stepdefinitions for search customer by name
	
	@When("^enter customer firstname$")
	public void enter_customer_firstname() throws InterruptedException {
		logger.info("--searching customer by name--");
		 searchCustomer=new SearchCustomerPage(driver);
		 searchCustomer.searchCustomerByName("Munna");
		 Thread.sleep(2000);
	}

	@When("^enter customer lastname$")
	public void enter_customer_lastname() throws InterruptedException {
		 searchCustomer.searchCustomerByName("Reddy");
		 Thread.sleep(2000);

	}
	
//	@When("^enter customer firstname and lastname$")
//	public void enter_customer_firstname_and_lastname() throws InterruptedException {
//	    searchCustomer=new SearchCustomerPage(driver);
//	    searchCustomer.searchCustomerByName("Reddy");
//	    Thread.sleep(2000);
//	}

	@Then("^user should found name and details$")
	public void user_should_found_name_and_details() {
	    boolean status=searchCustomer.searchCustomerByName("Munna Reddy");
	    Assert.assertEquals(true, status);
	}

	
}
