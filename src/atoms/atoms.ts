import { atom } from 'jotai'
import { SiteStatus } from '../types/siteStatus'
import { WorkType } from '../components/my-work'

export const siteStatusAtom = atom<SiteStatus>('neutral')
export const workFilterAtom = atom<WorkType>('all')
