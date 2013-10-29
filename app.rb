require 'rubygems'
require 'sinatra'
#require 'data_mapper'
#require File.dirname(__FILE__) + '/models.rb'
require 'json'
require 'Date'

before do
    content_type 'application/json'
end

get "/" do
   content_type 'html'
   erb :index
end
