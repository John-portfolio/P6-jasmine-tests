# Jasmine Test Suite for RSS Feedreader

The purpose of this project is to demonstrate using the Jasmine JS test library to test an asynchronous application.

## Running the app.

This application can be run 2 ways.
1. Clone this repository by running ```git clone git@github.com:John-portfolio/P6-jasmine-tests.git```
    1. Open the file ```index.html``` in your favorite browser.
2. Access the page [HERE](https://john-portfolio.github.io/P6-jasmine-tests/)

### The Jasmine test results are at the bottom of the page.

#### Tests Performed

1. Check that ```allFeeds``` variable is defined and not empty.
1. Check that each feed in the ```allFeeds``` object has a url defined and not empty.
1. Check that each feed in the ```allFeeds``` object has a name defined and not empty.
1. Verify that the side menu is hidden by default when the page loads.
1. Check that the menu toggle performs correctly opening and closing the menu.
1. Asynchronously test that when the ```loadfeed``` function is completed at least one item is loaded.
1. Test that when a new feed is loaded that the content actually changes.
