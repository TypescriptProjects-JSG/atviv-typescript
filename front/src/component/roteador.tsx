import {
    BrowserRouter as Router,
    Route, 
    Routes
} from 'react-router-dom';

import Home from '../pages/Home';
// visualizacao
import Clientes from '../pages/Ver/Listagem/clientes';

// cadastro
import CadastrarClientes from '../pages/Cadastrar/clientes';

// update
import EditarCliente from '../pages/Ver/Editar/clientes';


function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                {/* visualizacao */}
                <Route path='/clientes' element={<Clientes/>}/>
                {/* cadastro */}
                <Route path='/cadastrar_cliente' element={<CadastrarClientes/>}/>
                {/* update */}
                <Route path='/editar_cliente/:id' element={<EditarCliente/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;