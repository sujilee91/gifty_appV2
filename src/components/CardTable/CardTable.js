import React, { useRef } from 'react'
import { Table, THead, InputField, TextArea } from './styles'

const CardTable = ({ user, addNew, item, setItem, isCurrentUser }) => {
  const linkRef = useRef(null)
  const priceRef = useRef(null)
  const nameRef = useRef(null)
  const detailRef = useRef(null)

  return (
    <Table>
      <thead>
        <tr>
          <THead width={5}>Link</THead>
          <THead width={10}>Price</THead>
          <THead width={25}>Name</THead>
          <THead width={40}>Detail</THead>
          <THead width={5}>{isCurrentUser ? 'Delete' : 'Purchased'}</THead>
        </tr>
      </thead>
      <tbody>
        {user.items ? (
          <>
            {Object.keys(user?.items).map((item) => {
              const { name, description, link, price, detail, purchased } =
                user.items[item]
              return (
                <tr key={item}>
                  <td>
                    {/* CHECKER FOR INCLUDE HTTPS */}
                    <a href={`https://${link}`} target="_blank">
                      Link
                    </a>
                  </td>
                  <td>{price ? price : 'N/A'}</td>
                  <td>{name ? name : 'N/A'}</td>
                  <td>{detail ? detail : 'N/A'}</td>
                  <td>{isCurrentUser ? <button> X </button> : <checkbox />}</td>
                </tr>
              )
            })}
          </>
        ) : (
          <></>
        )}
        {addNew && (
          <tr>
            <td>
              <InputField
                type="url"
                onChange={() => {
                  setItem({ ...item, link: linkRef.current.value })
                }}
                ref={linkRef}
              ></InputField>
            </td>
            <td>
              <InputField
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
              <TextArea
                onChange={() => {
                  setItem({ ...item, detail: detailRef.current.value })
                }}
                ref={detailRef}
              ></TextArea>
            </td>
            <td></td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

export default CardTable
