import React, { useEffect, useState } from 'react'
import { getDatabase, ref, child, get, set, remove } from 'firebase/database'

import { db } from '../../firebase'

const dbRef = ref(getDatabase())

export const useGetUsers = (initializeUser) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchNewData = () => {
    const dbRef = ref(getDatabase())

    return get(child(dbRef, 'users'))
      .then((snapshot) => {
        if (snapshot.exists()) {
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
  }

  useEffect(() => {
    fetchNewData()
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
        fetchNewData()
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const useRemoveItem = (userId, itemId) => {
    const db = getDatabase()
    setLoading(true)
    remove(ref(db, 'users/' + userId + '/items/' + itemId))
      .then(() => {
        fetchNewData()
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const useCheckItem = (checkedUserId, ownerId, itemId) => {
    const db = getDatabase()
    setLoading(true)
    const id = Date.now()
    set(ref(db, 'users/' + ownerId + '/items/' + itemId), {
      purchased: true,
    })
      .then(() => {
        set(ref(db, 'users/' + checkedUserId + '/purchased/' + itemId), {
          [itemId]: itemId,
        })
          .then(() => {
            fetchNewData()
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { data, loading, error, useAddItem, useRemoveItem, useCheckItem }
}
