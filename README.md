# Cypress-Testrail-Reporter
Report Cypress test results to Testrail


# Steps to report the Cypress XML results to Testrail
1. Run Cypress tests with reporter option
   e.g., npx cypress run --reporter junit --reporter-options "mochaFile=reports/TEST-[hash].xml"

   This will generate XML files under reports folder. If test adjusted, make sure to re-run the cypress test again so you get latest xml test result files.

   
3. Upload the test results to Testrail 

   trcli -y \
   -h http://yourtestrail.com \
   --project "your project name in testrail" \
   --project-id 4 \
   --username hello@.com \
   --password mytestrailAPI  parse_junit --title "My Test Run"   -f "./reports/TEST*.xml"  

   This will create report the xml test results in your Testrail.  More information, reference to Testrail documentation https://support.testrail.com/hc/en-us/articles/33017216938900-Best-Practices-Guide-TestRail-CLI#h_01JEZR8B7SVHCDC9APY7VGTW23
