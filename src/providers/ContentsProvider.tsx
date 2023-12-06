import { ReactNode, createContext } from 'react'
import { IContents, contents } from '@/contents'
export const contentsContext = createContext<IContents>(contents)

export const ContentsProvider = ({ children }: { children: ReactNode }) => {
  return <contentsContext.Provider value={contents}>{children}</contentsContext.Provider>
}
