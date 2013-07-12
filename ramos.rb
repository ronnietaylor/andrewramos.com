# Get ready to kick ass.
require 'sinatra'
require 'sinatra/partial'
require 'sinatra/assetpack'
require 'slim'
require 'sass'
require 'compass'
require 'zurb-foundation'

class Ramos < Sinatra::Base
  register Sinatra::AssetPack
  register Sinatra::Partial
  use Rack::Deflater

  configure do
    Compass.add_project_configuration(File.join(Sinatra::Application.root, 'config', 'compass.config'))
    set :template_engine, :slim
    set :partial_template_engine, :slim
    enable :partial_underscores
    set :format => :html5
    set :root, File.dirname(__FILE__)
  end

  configure :production, :development do
    enable :logging, :sessions
  end

  assets {
    serve '/js',      from: 'assets/js'
    serve '/css',     from: 'assets/css'
    serve '/images',  from: 'assets/images'

    # The second parameter defines where the compressed version will be served.
    # (Note: that parameter is optional, AssetPack will figure it out.)
    js :app, '/js/app.js', [
      '/js/jquery-1.7.2.min.js',
      '/js/jquery.fittext.js',
      '/js/underscore.js',
      '/js/backbone.js',
      '/js/custom.modernizr.js',
      '/js/foundation/foundation.js',
      '/js/foundation/foundation.topbar.js',
      '/js/thisapp.js',
      '/js/vendor/**/*.js',
      '/js/lib/**/*.js'
    ]

    css :application, '/css/application.css', [
      '/css/fonts.css',
      '/css/_normalize.css',
      '/css/app.css'
    ]

    js_compression  :jsmin    # :jsmin | :yui | :closure | :uglify
    css_compression :sass   # :simple | :sass | :yui | :sqwish
  }

  get '/' do
    @bodyclass = "home"
    slim :index
  end

  get '/about' do
    @bodyclass = "about"
    slim :about
  end

  # Just stubbing in the resources path for later.
  get '/resources' do
    @bodyclass = "resources"
    slim :index
  end

  # The main work page. Technically we don't have one right now.
  get '/work' do
    slim :index
  end

  # All work detail pages below here.
  get '/work/quench' do
    @bodyclass = "work-details"
    slim :quench
  end

  get '/work/line-and-lot' do
    @bodyclass = "work-details"
    slim :'line-and-lot'
  end

  get '/work/wren' do
    @bodyclass = "work-details"
    slim :wren
  end

  get '/work/somewhat-organic' do
    @bodyclass = "work-details"
    slim :'somewhat-organic'
  end

  # This is just a wildcard route for css when referenced in templates.
  get '/css/:name.css' do
    content_type 'text/css', :charset => 'utf-8'
    scss(:"scss/#{params[:name]}", Compass.sass_engine_options)
  end
end
