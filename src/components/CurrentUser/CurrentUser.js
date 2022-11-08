import { useState } from 'react'
import styled from 'styled-components'
import CardTable from '../CardTable'
import { WarningButton, green_dark, GeneralButton } from '../styles'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'
import Loader from '../Loader'

const AddNewButton = styled(GeneralButton)`
  padding: 10px 15px;
  background-color: ${green_dark};
  border: 2px solid ${green_dark};
  color: white;
  width: 100%;
  margin-top: 20px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

const SaveButton = styled(GeneralButton)`
  padding: 0 50px;
`
const CancelButton = styled(WarningButton)`
  padding: 10px 15px;
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
  loading,
}) => {
  const [addNew, setAddNew] = useState(false)
  const [item, setItem] = useState()
  const [open, setOpen] = useState(true)

  const onSave = () => {
    if (item) {
      onAddItem(user.id, { ...item, purchased: false })
      setItem(null)
      setAddNew(false)
    }
  }
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
            onSave={onSave}
          />
        </CardWrapper>
        {addNew ? (
          <ButtonWrapper>
            <SaveButton primary onClick={() => onSave()} disabled={loading}>
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
          <AddNewButton
            onClick={() => setAddNew(true)}
            disabled={loading}
            primary
          >
            {loading ? <Loader /> : `Add New Item`}
          </AddNewButton>
        )}
      </CardContent>
    </Card>
  )
}

export default CurrenetUser
