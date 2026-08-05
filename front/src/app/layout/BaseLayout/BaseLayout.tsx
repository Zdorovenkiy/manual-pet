
import { useGetMeQuery } from '@/entities/user';
// import { useSignInMutation } from '@/features/auth';
// import { useGetMeQuery } from '@/entities/user/api/userApi';
import { useScrollToTop } from '@/shared/model';
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { type PropsWithChildren } from 'react'

function BaseLayout({children}: PropsWithChildren) {
  useScrollToTop();
  useGetMeQuery( undefined, {refetchOnMountOrArgChange: true})

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default BaseLayout