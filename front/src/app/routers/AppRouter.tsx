import { Suspense } from 'react'
import { BaseLayout } from "@app/layout";
import { useRoutes } from 'react-router-dom';
import { routeConfig } from './routeConfig.tsx';

type Props = {}

function AppRouter({}: Props) {
  // const renderWithWrapper = useCallback((route: RouteObject) => {
  //   console.log("route ", route);
    
  //   const element = (
  //     <Suspense
  //       fallback={
  //         <div>
  //           loading
  //         </div>
  //       }
  //     >
  //       <BaseLayout>
  //         {route.element}
  //       </BaseLayout>
  
  //     </Suspense>
  //   );

  //   return <Route key={route.path} path={route.path} element={element} />;
  // }, [])
  
  // return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;

  const routes = Object.values(routeConfig).map(route => ({
    ...route,
    element: (
      <Suspense fallback={<div>loading...</div>}>
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