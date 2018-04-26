class Api::PostsController < ApplicationController
    def new
    end

    def create
        @post = Post.new(post_params)
    end

    def show
        @post = Post.find(params[:id])
    end

    def index
        @post = Post.all
    end

    def edit
    end

    def update
    end

    private
    def post_params
        params.require(:post).permit(:title, :body, :user)
    end
end
