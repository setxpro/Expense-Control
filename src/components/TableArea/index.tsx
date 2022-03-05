import * as C from './styles';
import { Item } from '../../Types/Item';


type Props = {
    list: Item[]
}
 
export const TableArea = ({ list }: Props) => {


    return(
        <C.Table>
            <thead> 
                <tr>
                    <C.TableHeadColum width={100}>Data</C.TableHeadColum>
                    <C.TableHeadColum width={130}>Categoria</C.TableHeadColum>
                    <C.TableHeadColum>Título</C.TableHeadColum>
                    <C.TableHeadColum width={150}>Valor</C.TableHeadColum>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <tr key={index}>
                        <td></td>
                        <td></td>
                        <td>{item.title}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </C.Table>
    );
}