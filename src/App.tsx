import { useState, useEffect } from "react";

import * as C  from "./styles/App.styles";
import { GlobalStyles } from "./styles/global";

import { filterListByMonth, getCurrentMonth } from './Helpers/dateFilter';

import { Item } from "./Types/Item";
import { Category } from "./Types/Category";
import { items } from "./data/Iitems";
import { categories } from "./data/Categories";

//Content
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";


const App = () => {
 
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  const [inCome, setInCome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {

    // filtrar 1° #(list and date)
    setFilteredList(filterListByMonth(list, currentMonth));

  },[list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].price;
      } else {
        incomeCount += filteredList[i].price;
      }
    }

    setInCome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList]);


  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  // Add
  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <GlobalStyles/>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        
        {/* Área de Informações */}
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          inCome={inCome}
          expense={expense}
        />

        {/* Área de Inserção de dados */}
        <InputArea onAdd={handleAddItem}/>
        
        {/* Tabela de Items */}
        <TableArea list={filteredList}/>
     
      </C.Body>
      <C.Footer>
          <a href="mailto:programadorseth@gmail.com" target="">Patrick Anjos</a>
      </C.Footer>
    </C.Container>
  );
}


export default App;