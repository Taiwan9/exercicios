import React from 'react'
import ReactDOM from 'react-dom'

import Saudacao from './componentes/saudacao'
import Pai from './componentes/pai'
import Filho from './componentes/filho'

ReactDOM.render(
    /*<div>
       <Multi.BoaTarde nome="Ana" />
        <Multi.BoaNoite nome ="Bia" />
    </div>*/

    /*<div>
        <Saudacao tipo="Bom dia" nome="João"></Saudacao>
    </div>*/
    <div>
        <Pai nome="Paulo" sobrenome="Silva">

            {/* COmo passo os componentes filhos aqui?*/}
            <Filho nome="Pedro" ></Filho>
            <Filho nome="Camila" ></Filho>
            <Filho nome="joao" ></Filho>

        </Pai>

    </div>,
     document.getElementById('root'))