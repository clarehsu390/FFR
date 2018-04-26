require 'rails_helper'

RSpec.describe Api::PostsController, type: :controller do
    let(:clare) { User.create!(username: 'clare', password: '123456') }

    describe 'GET #new' do 
        render_views
        context 'when logged in' do
            let(:post) { Post.new(title: 'New Post', body: 'This is a new post', user: clare)}
            before do
                allow(controller).to receive(:current_user) { clare }
            end

            it 'renders the new posts page' do
            end
        end
    end

    describe 'GET #index' do
        context 'when logged in' do

            before do
                allow(controller).to receive(:current_user) { clare }
            end

            it 'renders all the posts' do
            end
        end
    end

end
