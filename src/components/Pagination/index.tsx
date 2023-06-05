import { useState } from "react";
import ReactPaginate from "react-paginate";
import { CoffeeCard } from "../CoffeeCard";
import { Paper } from "@mui/material";
import "./styles.scss";

interface PaginatedItemsProps {
  itemsPerPage: number;
  items: any;
  count: number;
  handlePageChange?: (value: number) => void;
  get: string;
}

const PaginatedItems: React.FC<PaginatedItemsProps> = ({
  itemsPerPage,
  items,
  count,
  get,
  handlePageChange,
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [page, setPage] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(count / itemsPerPage);

  const handlePageClick = (event) => {
    if(event) {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setPage(event.selected)
      setItemOffset(newOffset);
      // setPage(changePage);
      handlePageChange(event.selected + 1)
    }
  };

  return (
    <>
      {items?.length > 0 ? (
        <>
          <Paper
            elevation={1}
            className="CoffeeList"
            sx={{ bgcolor: "inherit" }}
          >
            {currentItems &&
              currentItems.map((item, index) => (
                <CoffeeCard key={index} starwars={item} idItem={page.toString() + (index+1).toString()} get={get}/>
              ))}
          </Paper>
          <ReactPaginate
            className="navigation"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </>
      ) : (
        <p>Não existem itens cadastrados</p>
      )}
    </>
  );
};

export default PaginatedItems;
