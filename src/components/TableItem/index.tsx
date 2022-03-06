import * as C from './styles';

import { Item } from '../../Types/Item';

import  { formatDate } from '../../Helpers/dateFilter';

import { categories } from '../../data/Categories';

type Props = {
    item: Item;
}

export const TableItem = ({ item }: Props)  => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Price color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.price}
                </C.Price>
            </C.TableColumn>
        </C.TableLine>
    );

}