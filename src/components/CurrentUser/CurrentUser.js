import { useState, useRef } from 'react'
import styled from 'styled-components'
import CardTable from '../CardTable'
import { getDatabase, ref, child, push, update } from 'firebase/database'

const MyList = styled.div`
  padding-bottom: 10px;
`
const AddNewButton = styled.button`
  text-decoration: none;
  appearance: none;
  color: green;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid green;
  cursor: pointer;
  margin-top: 15px;
`

const ButtonWrapper = styled.div`
  display: flex;
`

// function writeNewPost(items) {
//   const db = getDatabase()

//   const itemData = {
//     name: 'item1',
//     link: 'www.sujilee.ca',
//     price: '10',
//     description: 'abcd',
//     purchased: false,
//   }

//   // Get a key for a new Post.
//   const newPostKey = push(child(ref(db), 'posts')).key

//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   const updates = {}
//   updates['/users/0006/items/6002'] = itemData

//   return update(ref(db), updates)
// }

const CurrenetUser = ({ user, onAddItem, onRemoveItem }) => {
  const [addNew, setAddNew] = useState(false)
  const [item, setItem] = useState()

  return (
    <MyList>
      <h3>Hi, {user.name}!</h3>
      <CardTable
        user={user}
        addNew={addNew}
        setAddNew={setAddNew}
        item={item}
        setItem={setItem}
        isCurrentUser={true}
        onRemoveItem={onRemoveItem}
      />
      {addNew ? (
        <ButtonWrapper>
          <AddNewButton
            onClick={() => {
              if (item) {
                onAddItem(user.id, item)
                setItem(null)
                setAddNew(false)
              }
            }}
          >
            Save
          </AddNewButton>
          <AddNewButton
            onClick={() => {
              setAddNew(false)
              setItem(null)
            }}
          >
            Cancel
          </AddNewButton>
        </ButtonWrapper>
      ) : (
        <AddNewButton onClick={() => setAddNew(true)}>
          Add New Item
        </AddNewButton>
      )}
    </MyList>
  )
}

export default CurrenetUser
