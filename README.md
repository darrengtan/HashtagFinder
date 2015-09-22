# Hashtag Finder

This application accesses the Instagram API to grab hashtag submissions from a
specific timeframe.

## Instructions

Run `bundle install`, `rake db:create`, and `rake db:migrate`. To start the app,
run `rails start` and go to `localhost:3000` in the browser.

To show instagram media, click on the `Search Instagram` link and input the tag,
start date, and end date. 20 pieces of Instagram media should show up, and
scrolling to the bottom should grab more photos and videos.

## Technology

* Ruby
* Ruby on Rails
* Javascript
* Backbone.js
* Bootstrap

## Database

submissions table:

* hashtag, string, null: false
* start_date, date, null: false
* end_date, date, null: false
* response, text, null: false

## Tests

The rspec tests can be found in the `spec` folder. Run `bundle exec rspec spec`.
