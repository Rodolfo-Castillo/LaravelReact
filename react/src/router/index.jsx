import Routing from '../configs/routing'
import logged from './logged'
import general from './general'

const combineRoutes = [
    ...general,
    ...logged
]

const Routes = () => {
    return (
        <Routing routes={combineRoutes}/>
    )
}

export default Routes