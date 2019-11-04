$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Customer.feature");
formatter.feature({
  "line": 1,
  "name": "Customers",
  "description": "",
  "id": "customers",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboad",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on customers Menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "click on customers Menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 4921604500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 3110072300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 352037100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 8378419700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboad()"
});
formatter.result({
  "duration": 27615800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customers_Menu()"
});
formatter.result({
  "duration": 264568500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customers_Menu_Item()"
});
formatter.result({
  "duration": 2535408400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Adding new customer",
  "description": "",
  "id": "customers;adding-new-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "click on Add new button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User can view Add new customer page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enter customer info",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User can view confirmation message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_on_Add_new_button()"
});
formatter.result({
  "duration": 1649186800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Add_new_customer_page()"
});
formatter.result({
  "duration": 7821500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enter_customer_info()"
});
formatter.result({
  "duration": 1065141000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Save_button()"
});
formatter.result({
  "duration": 2468922400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The new customer has been added successfully.",
      "offset": 36
    }
  ],
  "location": "Steps.user_can_view_confirmation_message(String)"
});
formatter.result({
  "duration": 307067300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 904157600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboad",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on customers Menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "click on customers Menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 3586972200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 3091961300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 388627500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 7680219000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboad()"
});
formatter.result({
  "duration": 46869500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customers_Menu()"
});
formatter.result({
  "duration": 306935900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customers_Menu_Item()"
});
formatter.result({
  "duration": 3464778900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search Customer by email",
  "description": "",
  "id": "customers;search-customer-by-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "enter customer email",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user should found email and details",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enter_customer_email()"
});
formatter.result({
  "duration": 498810000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "duration": 2143197500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_found_email_and_details()"
});
formatter.result({
  "duration": 89364100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 785700200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboad",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on customers Menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "click on customers Menu Item",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 3466474500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 1833365900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 495556300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 4412539300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboad()"
});
formatter.result({
  "duration": 10495700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_customers_Menu()"
});
formatter.result({
  "duration": 330726900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customers_Menu_Item()"
});
formatter.result({
  "duration": 2886858800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Search Customer by name",
  "description": "",
  "id": "customers;search-customer-by-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "enter customer firstname",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "enter customer lastname",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user should found name and details",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.enter_customer_firstname()"
});
formatter.result({
  "duration": 2023634600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_customer_lastname()"
});
formatter.result({
  "duration": 2626226600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "duration": 2139801900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_found_name_and_details()"
});
formatter.result({
  "duration": 577899800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 781059900,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 3463072900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2088607000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 370352300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 3816257400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 3164724400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Log_out_link()"
});
formatter.result({
  "duration": 5219923700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 3012262300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 771842900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Login DataDriven Test",
  "description": "",
  "id": "login;login-datadriven-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login;login-datadriven-test;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 25,
      "id": "login;login-datadriven-test;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 26,
      "id": "login;login-datadriven-test;;2"
    },
    {
      "cells": [
        "aadmins@yourstore.com",
        "admin@123"
      ],
      "line": 27,
      "id": "login;login-datadriven-test;;3"
    },
    {
      "cells": [
        "aaadmins123@yourstore.com",
        "aadmin@123"
      ],
      "line": 28,
      "id": "login;login-datadriven-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Login DataDriven Test",
  "description": "",
  "id": "login;login-datadriven-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 3410229100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2635751200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 445491600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 3519248000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 3331780000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_on_Log_out_link()"
});
formatter.result({
  "duration": 5573481200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 3014033000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 804408200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Login DataDriven Test",
  "description": "",
  "id": "login;login-datadriven-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters Email as \"aadmins@yourstore.com\" and Password as \"admin@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 3413320800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 3226508600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aadmins@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin@123",
      "offset": 62
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 485633700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 1689345600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 148699300,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat stepDefinitions.Steps.page_Title_should_be(Steps.java:57)\r\n\tat ✽.Then Page Title should be \"Dashboard / nopCommerce administration\"(Login.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_click_on_Log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Login DataDriven Test",
  "description": "",
  "id": "login;login-datadriven-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters Email as \"aaadmins123@yourstore.com\" and Password as \"aadmin@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_Launch_Chrome_browser()"
});
formatter.result({
  "duration": 3502670500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2128923600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aaadmins123@yourstore.com",
      "offset": 22
    },
    {
      "val": "aadmin@123",
      "offset": 66
    }
  ],
  "location": "Steps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 521463100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Login()"
});
formatter.result({
  "duration": 713438300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 256883800,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat stepDefinitions.Steps.page_Title_should_be(Steps.java:57)\r\n\tat ✽.Then Page Title should be \"Dashboard / nopCommerce administration\"(Login.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_click_on_Log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});