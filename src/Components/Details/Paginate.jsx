import React, {useState} from 'react';
import Pagination from '@material-ui/lab/Pagination';

export const Paginate = ({items}) => {
    const [currentPage, setcurrentPage] = useState(1);
    const itemsPerPage = 3;

    const indexOfLastTodo = currentPage * itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    const currentTodos = items.slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = Math.ceil(items.length / itemsPerPage);

    const changePage = (e,page) =>{
        setcurrentPage(page);
    }
    return (        
        <div>
            {currentTodos}
            <Pagination count={pageNumbers} page={currentPage} onChange={changePage} color="primary"/>
        </div>
    )
}
