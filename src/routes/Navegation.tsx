import { BrowserRouter , Route, Routes, NavLink, Navigate} from 'react-router-dom'
import { routes } from './routes';
import logo from '../logo.svg';
import { Suspense } from 'react';

export const Navegation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            {
              routes.map(({to, name}) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                  >
                    {name}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </nav>

        <Routes>
          {
            routes.map(({path, Component}) => (
              <Route
               key={path}
               path={path}
               element={<Component/>}
              />
            ))
          }
          {/* replace para que no se echa para atras*/}
          <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </Suspense>
  );
}
