import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import PageA from "./pages/PageA";
import PageB from "./pages/PageB";

const menusList = [
  {
    name: '页面A',
    path: 'pageA',
  },
  {
    name: '页面B',
    path: 'pageB',
  },
]

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          {
            menusList.map((menu) => {
              return (
                <Link key={menu.path} to={menu.path}>
                  {
                    menu.name
                  }
                </Link>
              )
            })
          }
        </div>
        <Routes>
          <Route path={'/'} element={<PageA></PageA>}></Route>
          <Route path={'/pageA'} element={<PageA></PageA>}></Route>
          <Route path={'/pageB'} element={<PageB></PageB>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
