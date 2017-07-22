
(function() {
  'use strict';

    describe('RSS Feeds', function() {
        /* Test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have a URL and are not null', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           });
         });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have a name and are not null', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           });
         });
    });


    describe('The Menu', function() {
      /* Test that ensures the menu element is
       * hidden by default.
       */
       it('is hidden by default', function(){
         var $body = $('body');
         expect($body.hasClass('menu-hidden')).toBe(true);
       });

       /* Test that ensures the menu changes
        * visibility when the menu icon is clicked.
        */
        //
        it('displays and hides when menu button clicked', function() {
          var menuIcon = $('.menu-icon-link');
          var $body = $('body');

          menuIcon.click();
          expect($body.hasClass('menu-hidden')).toBe(false);

          menuIcon.click();
          expect($body.hasClass('menu-hidden')).toBe(true);
        });

    });

    describe('Initial Entries', function(){

      /* Test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
      */
      beforeEach(function(done) {
        loadFeed(0, done);
      });

      it('has at least one .entry elem within .feed container', function(done) {
        expect($('.feed .entry').length).toBeGreaterThan(0);
        done();
      });

    });

    describe('New Feed Selection', function(){
      /* Test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */

       beforeEach(function(done) {
           loadFeed(0, done);
           done();
       });

      it('should add new content when it loads the feed item', function(done) {
        var $firstFeed = $('.feed').text();
        loadFeed(2, function() {
          var $secondFeed = $('.feed').text();
          expect($firstFeed).not.toEqual($secondFeed);
          done();
        });
      });

    });

}());
