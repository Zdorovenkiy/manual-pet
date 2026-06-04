import { Suspense } from 'react'
import { layoutsEnum } from "@app/layout";
import { useRoutes } from 'react-router-dom';
import { routeConfig } from './routeConfig.tsx';
import { Loader } from '@/shared/ui';

type Props = {}

function AppRouter({}: Props) {

  const routes = Object.values(routeConfig).map(route => {
    const Layout = layoutsEnum[route.layout];
    return {
    ...route,
    element: (
      <Suspense fallback={<Loader />}>
        <Layout>
          {route.element}
        </Layout>
      </Suspense>
    )
  }});

  const element = useRoutes(routes);
  
  return element;
}

export default AppRouter