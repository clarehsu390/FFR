# == Schema Information
#
# Table name: dogs
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  gender      :string           not null
#  age         :string           not null
#  breed       :string           not null
#  image_url   :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Dog < ApplicationRecord
    include PgSearch
    pg_search_scope :whose_name_starts_with,
                    :against => :name, :breed
                    :using => {
                        :tsearch => {:prefix => true}
                    }
    validates :name, :gender, :age, :breed, :image_url, presence: true
end
