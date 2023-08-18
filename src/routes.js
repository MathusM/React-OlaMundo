import Rodape from "componentes/Rodape";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMin from "./paginas/SobreMin";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaPadrao from "componentes/PaginaPadrao";

import Post from "paginas/Post";
import NaoEncrontrada from "paginas/NaoEncrontrada";
import ScrollToTop from "componentes/ScrollToTop";



function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />}/>
          <Route path="/sobremin" element={<SobreMin />} />
          
        </Route>
        
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncrontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>  
  )
}

export default AppRoutes;
