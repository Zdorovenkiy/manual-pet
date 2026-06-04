import { useScrollToTop } from '@/shared/model';
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { type PropsWithChildren } from 'react'

function BaseLayout({children}: PropsWithChildren) {
  useScrollToTop();

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default BaseLayout