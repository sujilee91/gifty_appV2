import React, { useRef } from 'react'
import {
  Table,
  THead,
  InputField,
  DeleteButton,
  AddItemRow,
  Row,
} from './styles'
import { onInputNumber } from '../../functions/onInputNumber'
const CardTable = ({
  user,
  addNew,
  item,
  setItem,
  isCurrentUser,
  onRemoveItem,
}) => {
  const linkRef = useRef(null)
  const priceRef = useRef(null)
  const nameRef = useRef(null)
  const detailRef = useRef(null)

  return (
    <Table>
      <thead>
        <Row>
          <THead width={5}>Link</THead>
          <THead width={10}>Price</THead>
          <THead width={25}>Name</THead>
          <THead width={40}>Detail</THead>
          <THead width={5}>Delete</THead>
        </Row>
      </thead>
      <tbody>
        {user.items ? (
          <>
            {Object.keys(user?.items).map((userItem) => {
              const { name, link, price, detail, purchased, id } =
                user.items[userItem]
              return (
                <tr key={id}>
                  <td>
                    <a href={link} target="_blank">
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
            })}
          </>
        ) : (
          <></>
        )}
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
            ></InputField>
          </td>
          <td>
            <InputField
              onInput={() => onInputNumber(priceRef.current.value)}
              onChange={() => {
                setItem({ ...item, price: priceRef.current.value })
              }}
              ref={priceRef}
            ></InputField>
          </td>
          <td>
            <InputField
              onChange={() => {
                setItem({ ...item, name: nameRef.current.value })
              }}
              ref={nameRef}
            ></InputField>
          </td>
          <td>
            <InputField
              onChange={() => {
                setItem({ ...item, detail: detailRef.current.value })
              }}
              ref={detailRef}
            ></InputField>
          </td>
          <td></td>
        </AddItemRow>
      </tbody>
    </Table>
  )
}

export default CardTable
