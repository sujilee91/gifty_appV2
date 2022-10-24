import { useState } from 'react'
import styled from 'styled-components'
import CardTable from '../CardTable'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'
const Button = styled.button`
  padding: 10px 15px;
  font-weight: bolder;
`

const AddNewButton = styled(Button)`
  padding: 10px;
  background-color: #007658;
  border: 2px solid #007658;
  color: white;
  width: 100%;
  margin-top: 20px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

const SaveButton = styled.button`
  width: 20%;
`
const CancelButton = styled.button`
  background-color: white;
  border: 2px solid #ed5a6a;
  color: #ed5a6a;
  padding: 10px 15px;
  width: 10%;
  margin-left: 20px;
`

const CardWrapper = styled.div`
  max-height: 20vh;
  overflow-y: auto;
`

const Card = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
`

const CardTitle = styled.div`
  padding: 0 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ::marker {
    display: none;
  }
`

const CardContent = styled.div`
  padding: 20px;
  display: ${({ open }) => (open ? 'block' : 'none')};
`

const CurrenetUser = ({
  user,
  onAddItem,
  onRemoveItem,
  setOpenModal,
  setCurrentUser,
}) => {
  const [addNew, setAddNew] = useState(false)
  const [item, setItem] = useState()
  const [open, setOpen] = useState(true)

  return (
    <Card>
      <CardTitle onClick={() => setOpen(!open)}>
        <h1>Your Wishlist</h1>
        {open ? (
          <MdExpandLess color="#007658" size="30px" />
        ) : (
          <MdExpandMore color="#007658" size="30px" />
        )}
      </CardTitle>
      <CardContent open={open}>
        <CardWrapper>
          <CardTable
            user={user}
            addNew={addNew}
            setAddNew={setAddNew}
            item={item}
            setItem={setItem}
            isCurrentUser={true}
            onRemoveItem={onRemoveItem}
          />
        </CardWrapper>
        {addNew ? (
          <ButtonWrapper>
            <SaveButton
              onClick={() => {
                if (item) {
                  onAddItem(user.id, item)
                  setItem(null)
                  setAddNew(false)
                }
              }}
            >
              Save
            </SaveButton>
            <CancelButton
              onClick={() => {
                setAddNew(false)
                setItem(null)
              }}
            >
              Cancel
            </CancelButton>
          </ButtonWrapper>
        ) : (
          <AddNewButton onClick={() => setAddNew(true)}>
            Add New Item
          </AddNewButton>
        )}
      </CardContent>
    </Card>
  )
}

export default CurrenetUser
