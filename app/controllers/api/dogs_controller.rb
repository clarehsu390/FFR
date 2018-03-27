class Api::DogsController < ApplicationController
    def index
        @dogs = Dog.all
    end

    def show
        @dog = Dog.find(params[:id])
    end

    private

    def dog_params
        params.require(:dog).permit(:name, :gender, :breed, :image_url, :description)
    end
end
