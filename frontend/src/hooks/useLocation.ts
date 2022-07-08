import { useEffect, useState } from 'react'
import { Coordinates } from '../utils/location'

export const useLocation = () => {
  const [location, setLocation] = useState<Coordinates>()

  useEffect(() => {
    if (!navigator.geolocation) return
    const watchID = navigator.geolocation.watchPosition(
      (position) => {
        const pos = {
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
        }
        setLocation(pos)
      },
      () => setLocation(undefined),
    )

    return () => navigator.geolocation.clearWatch(watchID)
  }, [setLocation])

  return { location }
}
