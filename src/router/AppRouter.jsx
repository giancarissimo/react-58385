import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout.jsx'
import { routes } from './menuRoutes.js'

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                {
                    routes.map(({id, path, Element}) => {
                        return <Route key={id} path={path} element={<Element />} />
                    })
                }
            </Route>
        </Routes>
    )
}

export default AppRouter