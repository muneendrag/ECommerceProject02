package stepDefinitions;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;

import pageObjects.CustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

public class BaseClass {
	
	public WebDriver driver;
	public LoginPage loginPage;
	public CustomerPage addCustomer;
	public SearchCustomerPage searchCustomer;
	public static org.apache.log4j.Logger logger;
	
   //to create unique emailid
	public static String randomstring() {
		String generateString=RandomStringUtils.randomAlphabetic(5);
		return (generateString);
	}

}
