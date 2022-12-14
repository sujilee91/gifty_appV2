import { useEffect, useState } from 'react'
import { getDatabase, ref, child, get, set, remove } from 'firebase/database'

import { db } from '../../firebase'

const dbRef = ref(getDatabase())

const useGetUsers = (initializeUser) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchNewData = () => {
    const dbRef = ref(getDatabase())
    setLoading(true)
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
        setError(error)
      })
  }

  useEffect(() => {
    fetchNewData()
    setLoading(false)
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
        setError(error)
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
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const usePurchaseCheckItem = (
    currentUserId,
    ownerId,
    itemId,
    purchasedItems,
  ) => {
    const db = getDatabase()
    setLoading(true)
    const id = Date.now()
    set(ref(db, 'users/' + ownerId + '/items/' + itemId + '/purchased'), true)
      .then(() => {
        set(ref(db, 'users/' + currentUserId + '/purchasedItem/' + ownerId), {
          ...purchasedItems,
          [itemId]: '',
        })
          .then(() => {
            fetchNewData()
          })
          .catch((error) => {
            setError(error)
          })
          .finally(() => {
            setLoading(false)
          })
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const useUndoPurchaseCheckItem = (currentUserId, ownerId, itemId) => {
    const db = getDatabase()
    setLoading(true)
    //set purchsed to false on member's list

    set(ref(db, 'users/' + ownerId + '/items/' + itemId + '/purchased'), false)
      .then(() => {
        //remove purchased item on current users list
        remove(
          ref(
            db,
            'users/' +
              currentUserId +
              '/purchasedItem/' +
              ownerId +
              '/' +
              itemId,
          ),
        )
          .then(() => {
            fetchNewData()
          })
          .catch((error) => {
            setError(error)
          })
          .finally(() => {
            setLoading(false)
          })
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return {
    data,
    loading,
    error,
    useAddItem,
    useRemoveItem,
    useUndoPurchaseCheckItem,
    usePurchaseCheckItem,
  }
}

export default useGetUsers
