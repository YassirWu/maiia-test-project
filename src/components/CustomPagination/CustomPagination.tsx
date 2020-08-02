import * as React from 'react';
import Pagination from "react-js-pagination";
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
  },
  link: {
    padding: '6px 12px',
    textDecoration: 'none',
    color: '#337ab7',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
  },
  activeLink: {
    color: '#fff',
    backgroundColor: '#337ab7',
    borderColor: '#337ab7',
    cursor: 'default',
  }
})

type CustomPaginationProps = {
  numberTotalElement: number;
  numberPerPage: number;
  currentPage: number;
  onChange: (page: number) => void;
}

const CustomPagination: React.FunctionComponent<CustomPaginationProps> = ({
  numberTotalElement,
  numberPerPage,
  currentPage,
  onChange,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        activePage={currentPage}
        totalItemsCount={numberTotalElement}
        itemsCountPerPage={numberPerPage}
        pageRangeDisplayed={5}
        onChange={(page) => onChange(page)}
  
        prevPageText="<"
        nextPageText=">"
        linkClass={classes.link}
        activeLinkClass={classes.activeLink}
      />
    </div>
  );
};

export default CustomPagination;
