package pageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.WaitHelper;

public class SearchCustomerPage {
	
	public WebDriver ldriver;
	WaitHelper waitHelper;
	public SearchCustomerPage(WebDriver rdriver) {
		ldriver=rdriver;
		PageFactory.initElements(ldriver, this);
		waitHelper=new WaitHelper(ldriver);
	}
	
	@FindBy(id="SearchEmail")
	WebElement searchEmail;
	@FindBy(id="SearchFirstName")
	WebElement searchFirstname;
	@FindBy(id="SearchLastName")
	WebElement searchLastname;
	@FindBy(id="search-customers")
	WebElement searchBtn;
	
	@FindBy(xpath = "//table[@id='customers-grid']")
	WebElement table;
	
	@FindBy(xpath = "//table[@id='customers-grid']//tbody/tr")
	List<WebElement> tableRows;
	
	@FindBy(xpath = "//table[@id='customers-grid']//tbody/tr/td")
	List<WebElement> tableColumns;
	
	public void setEmail(String email)
	{
		waitHelper.ExplicitWait(searchEmail, 30);
		searchEmail.clear();
		searchEmail.sendKeys(email);
	}
	
	public void setFirstName(String fname) {
		waitHelper.ExplicitWait(searchFirstname, 30);
		searchFirstname.clear();
		searchFirstname.sendKeys(fname);
	}

	public void setLastName(String lname) {
		waitHelper.ExplicitWait(searchLastname, 30);
		searchLastname.clear();
		searchLastname.sendKeys(lname);
	}
	
	
	public void clickSearch() {
		searchBtn.click();
		WaitHelper.ExplicitWait(searchBtn, 20);
	}

	public int getNoOfRows() {
		return(tableRows.size());
	}
	
	public int getNoOfColumns() {
		return(tableColumns.size());
	}
	
	public boolean searchCustomerByEmail(String email)
	{
		boolean flag=false;
		
		for(int i=1;i<=getNoOfRows();i++)
		{
			String emailid=table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr["+i+"]/td[2]")).getText();
		
			System.out.println(emailid);
			
			if(emailid.equals(email))
			{
				flag=true;
			}
		}
		
		return flag;
				
	}
	
	
	public boolean searchCustomerByName(String Name)
	{
		boolean flag=false;
		
		for(int i=1;i<=getNoOfRows();i++)
		{
			String name=table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr["+i+"]/td[3]")).getText();
			
			String names[]=name.split(" "); //separating fname & lname
			
			if(names[0].equals("Munna") && names[1].equals("Reddy"))
			{
				flag=true;
			}
		}
		
		return flag;
				
	}
	

}
