source 'https://rubygems.org'
ruby '~>2.3.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.6'
# Use sqlite3 as the database for Active Record
gem 'pg'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc
# to manage user sessions
gem 'sorcery'
# to get simple Google Maps API information
gem 'geocoder'
# to manage nested forms
gem 'cocoon'

gem 'underscore-rails'
# to manage secrets
gem 'figaro'

gem 'font-awesome-rails'

gem 'velocityjs-rails'
# to manage uploading
gem 'carrierwave', github: 'carrierwaveuploader/carrierwave'
# to process pictures with ImageMagick
gem 'mini_magick'
# to use Puma as the web server
gem 'puma'
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

gem 'twitter'
gem 'fog'
gem 'google-api-client', '< 0.9', '>= 0.6.2'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'pry-rails'
  gem 'pry-byebug'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

group :production do
  # gem 'pg'
  gem 'rails_12factor'
end
