json.extract! @post, :id, :title, :body
json.user_id @post.user.id
