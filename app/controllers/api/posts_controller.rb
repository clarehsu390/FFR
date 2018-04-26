class Api::PostsController < ApplicationController

    def create
        @post = current_user.posts.new(post_params)
        @post.user_id = current_user.id
        if @post.save
            render 'api/posts/index'
        else
            render json: @post.errors.full_messages
        end
    end

    def show
        @post = Post.find(params[:id])
    end

    def index
        @posts = Post.all
    end

    def update
        @post = current_user.posts.find(params[:id])
        if @post.update_attributes(post_params)
            render 'api/posts/show'
        else
            render json: @post.errors.full_messages
        end

    end

    private
    def post_params
        params.require(:post).permit(:title, :body, :user)
    end
end
