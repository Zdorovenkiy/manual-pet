import { Suspense } from 'react'
import { BaseLayout } from "@app/layout";
import { useRoutes } from 'react-router-dom';
import { routeConfig } from './routeConfig.tsx';
import { Loader } from '@/shared/ui/Loader/index.ts';

type Props = {}

function AppRouter({}: Props) {

  const routes = Object.values(routeConfig).map(route => ({
    ...route,
    element: (
      <Suspense fallback={<Loader />}>
        <BaseLayout>
          {route.element}
        </BaseLayout>
      </Suspense>
    )
  }));

  const element = useRoutes(routes);
  
  return element;
}

export default AppRouter