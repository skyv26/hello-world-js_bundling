module Api
  module V1
    class GreetingsController < ApplicationController
      def index
        greetings = Message.all.sample.slice(:greeting)
        render json: greetings
      end
    end
  end
end
