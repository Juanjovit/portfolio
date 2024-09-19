import { useSetAtom } from 'jotai'
import { SiteStatus } from '../types/siteStatus'
import { siteStatusAtom } from '../atoms/atoms'

export function useUpdateSiteStatus() {
  const setSiteStatus = useSetAtom(siteStatusAtom)

  return (newStatus: SiteStatus) => {
    setSiteStatus(newStatus)
    setTimeout(() => {
      setSiteStatus('neutral')
    }, 1000)
  }
}
