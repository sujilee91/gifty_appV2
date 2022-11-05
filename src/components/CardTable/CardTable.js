import React, { useRef, useMemo } from 'react'
import { InputField, DeleteButton, AddItemRow } from './styles'
import { Table, THead, THeadRow } from '../styles'

const CardTable = ({
  user,
  addNew,
  item,
  setItem,
  isCurrentUser,
  onRemoveItem,
  onSave,
}) => {
  const linkRef = useRef(null)
  const priceRef = useRef(null)
  const nameRef = useRef(null)
  const detailRef = useRef(null)

  const onKeyPress = (prevRef, currentRef, nextRef, e) => {
    //on press delete / backspace
    if (e.which === 8) {
      if (!currentRef.current.value) {
        prevRef.current.focus()
      }
    } else if (e.key === 'Enter') {
      if (!nextRef) {
        onSave()
        linkRef.current.focus()
      } else {
        nextRef.current.focus()
      }
    }
  }

  const Items = ({ items }) => {
    return Object.keys(items).map((userItem) => {
      const { name, link, price, detail, purchased, id } = user.items[userItem]
      return (
        <tr key={id}>
          <td>
            <a href={link} target="_blank" rel="noreferrer">
              Link
            </a>
          </td>
          <td>{price ? `$${price}` : 'N/A'}</td>
          <td>{name ? name : 'N/A'}</td>
          <td>{detail ? detail : 'N/A'}</td>
          <td>
            <DeleteButton
              onClick={() => !purchased && onRemoveItem(user.id, id)}
              disabled={purchased}
            >
              X
            </DeleteButton>
          </td>
        </tr>
      )
    })
  }

  const ItemsMemo = React.memo(Items)

  const userItemRowMemo = useMemo(() => {
    if (!user.items) return <></>
  }, [user.items])

  return (
    <Table>
      <thead>
        <THeadRow>
          <THead width={5}>Link</THead>
          <THead width={10}>Price</THead>
          <THead width={30}>Name</THead>
          <THead width={50}>Detail</THead>
          <THead width={5}>Delete</THead>
        </THeadRow>
      </thead>
      <tbody>
        {user.items ? <ItemsMemo items={user.items} /> : <></>}
        <AddItemRow show={addNew}>
          <td>
            <InputField
              type="url"
              onChange={() => {
                if (
                  linkRef.current.value.includes('http://') ||
                  linkRef.current.value.includes('https://')
                ) {
                  setItem({ ...item, link: linkRef.current.value })
                } else {
                  const newURL = `https://` + linkRef.current.value
                  setItem({ ...item, link: newURL })
                }
              }}
              ref={linkRef}
              onKeyDownCapture={(e) => onKeyPress(null, linkRef, priceRef, e)}
            ></InputField>
          </td>
          <td>
            <InputField
              onChange={() => {
                priceRef.current.value = priceRef.current.value.replace(
                  /[^0-9]/g,
                  '',
                )
                setItem({ ...item, price: priceRef.current.value })
              }}
              ref={priceRef}
              onKeyDownCapture={(e) =>
                onKeyPress(linkRef, priceRef, nameRef, e)
              }
            ></InputField>
          </td>
          <td>
            <InputField
              onChange={() => {
                setItem({ ...item, name: nameRef.current.value })
              }}
              ref={nameRef}
              onKeyDownCapture={(e) =>
                onKeyPress(priceRef, nameRef, detailRef, e)
              }
            ></InputField>
          </td>
          <td>
            <InputField
              onChange={() => {
                setItem({ ...item, detail: detailRef.current.value })
              }}
              ref={detailRef}
              onKeyDownCapture={(e) => onKeyPress(nameRef, detailRef, null, e)}
            ></InputField>
          </td>
          <td></td>
        </AddItemRow>
      </tbody>
    </Table>
  )
}

export default CardTable
