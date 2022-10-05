import Item from './item'
import Group from './group'
const User = {
  id: String,
  first_name: String,
  last_name: String,
  email: String,
  b_day: Date,
  profile_image: String,
  history: {
    given: given_gift_history,
    received: received_gift_history,
  },
  lists: [item_list],
}

const item_list = {
  id: String,
  created_date: Date,
  name: String,
  shared: {
    groups: [Group.id],
    users: [User.id],
  },
  items: [Item],
  is_private: Boolean,
  is_active: Boolean,
  has_set_date: Boolean,
  end_date: Date,
}

const given_gift_history = {
  date: Date,
  price: Number,
  is_anon: Boolean,
  received_user_id: String,
}

const received_gift_history = {
  date: Date,
  is_anon: Boolean,
  given_user_id: String,
  price: Number,
  item: {
    name: String,
    price: Number,
    image: String,
  },
}
