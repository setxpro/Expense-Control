import { useState, useEffect } from "react";

import * as C  from "./styles/App.styles";
import { GlobalStyles } from "./styles/global";

import { filterListByMonth, getCurrentMonth } from './Helpers/dateFilter';

import { Item } from "./Types/Item";
import { Category } from "./Types/Category";
import { items } from "./data/Iitems";
import { categories } from "./data/Categories";
import { TableArea } from "./components/TableArea";


const App = () => {
 
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {

    // filtrar 1° #(list and date)
    setFilteredList(filterListByMonth(list, currentMonth));

  },[list, currentMonth]);

  return (
    <C.Container>
      <GlobalStyles/>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
        {/* Área de Informações */}

        {/* Área de Inserção de dados */}
        
        {/* Tabela de Items */}
        <TableArea list={filteredList}/>
     
      </C.Body>
    </C.Container>
  );
}


export default App;