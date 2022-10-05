import User from './user'

// GROUP OR EVENT
// USER can create group to share an list of gifts
// USER can create Event to share an list of gifts within added people.
// I GUESS IT IS SAME THING????

export const Event = {
  id: String,
  name: String,
  description: String,
  owner: {
    user_id: String,
  },
  details: {
    is_private: Boolean,
    has_end_date: Boolean,
  },
  users: [User],
}
