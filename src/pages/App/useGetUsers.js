import React, { useEffect, useState } from 'react'
import { getDatabase, ref, child, get, set } from 'firebase/database'

import { db } from '../../firebase'

const dbRef = ref(getDatabase())

export const useGetUsers = (initializeUser) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getUsers = () =>
    get(child(dbRef, 'users'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val())
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })

  useEffect(() => {
    getUsers()
    setLoading(true)
  }, [])

  const useAddItem = (userId, item) => {
    const db = getDatabase()
    setLoading(true)
    const id = Date.now()
    set(ref(db, 'users/' + userId + '/items/' + id), {
      ...item,
      id: id,
    })
      .then(() => {
        get(child(dbRef, 'users'))
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val(), 'newDAta')
              setData(snapshot.val())
              initializeUser(null)
            } else {
              console.log('No data available')
            }
          })
          .catch((error) => {
            console.error(error)
          })
          .finally(() => {
            setLoading(false)
          })
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return { data, loading, error, useAddItem }
}
