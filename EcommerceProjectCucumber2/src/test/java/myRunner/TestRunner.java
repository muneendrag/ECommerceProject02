package myRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features= {".//Features/"},
		glue="stepDefinitions",
		format= {"pretty","html:test-output"},
		monochrome=true,
		dryRun=false
	
		)

public class TestRunner {

}
