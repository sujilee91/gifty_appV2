export const Item = {
  user_id: String,
  name: String,
  link: String,
  price: Number,
  has_purchased: Boolean,
  description: String,
  purchase_history: {
    is_anon: Boolean,
    purchase_user_id: String || null,
  },
}

const GroupItems = {}
