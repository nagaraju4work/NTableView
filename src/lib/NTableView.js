import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ntableview.css';
// import { useTableSorted } from "./useTableSorted";

/**
 * Table View UI component which groups several items and display them in vertical scrollable list.
 */
export const NTableView = ({ backgroundColor, listType, caption, ...props }) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const [tableData, setTableData] = useState(getDefaultSorting(data, columns));
  useTableSorted(props.data, props.columns);

  function getDefaultSorting(defaultTableData, columns) {
    const sorted = [...defaultTableData].sort((a, b) => {
      const filterColumn = columns.filter((column) => column.sortbyOrder);
  
      // Merge all array objects into single object and extract accessor and sortbyOrder keys
      let { accessor = "id", sortbyOrder = "asc" } = Object.assign(
        {},
        ...filterColumn
      );
  
      if (a[accessor] === null) return 1;
      if (b[accessor] === null) return -1;
      if (a[accessor] === null && b[accessor] === null) return 0;
  
      const ascending = a[accessor]
        .toString()
        .localeCompare(b[accessor].toString(), "en", {
          numeric: true,
        });
  
      return sortbyOrder === "asc" ? ascending : -ascending;
    });
    return sorted;
  }
    const handleSorting = (sortField, sortOrder) => {
      if (sortField) {
        const sorted = [...tableData].sort((a, b) => {
          if (a[sortField] === null) return 1;
          if (b[sortField] === null) return -1;
          if (a[sortField] === null && b[sortField] === null) return 0;
          return (
            a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
              numeric: true,
            }) * (sortOrder === "asc" ? 1 : -1)
          );
        });
        setTableData(sorted);
      }
    };
  const handleSortingChange = (accessor) => {
    const sortOrder =
     accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
   };
  
  return (
    <div className="storybook-ntableview-container">
            <table className="storybook-ntableview-table">
            <caption>{caption}</caption>
            <thead>
                <tr>
                {listType == "single-select" || listType == "multi-select" ?
                          (<th>
                          </th>):(<> </>)
                          }
                          {props.columns.map(({label, accessor, sortable}) => {
                            const cl = sortable
                            ? sortField === accessor && order === "asc"
                             ? "up"
                             : sortField === accessor && order === "desc"
                             ? "down"
                             : "default"
                            : "";
                            return (<th className={cl} key={accessor} onClick={sortable ? () => handleSortingChange(accessor) : null}>{label}</th>)
                          })
                        }
                </tr>
                </thead>
                {tableData.map((data) => {
                    return (
                        <tr key={data.id}>
                          {listType == "single-select" || listType == "multi-select"?
                          (<td data-label="select">
                            <input  
                                  id={data.id} 
                                  name={listType == "multi-select" ? "type_checkbox":"type_radio"} 
                                  type={listType == "multi-select" ? "checkbox":"radio"} />
                          </td> ): (<></>)
                          }
                          {props.columns.map(({ accessor }) => {
                            const tData = data[accessor] ? data[accessor] : "——";
                            return <td key={accessor}>{tData}</td>;
                          })}
                        </tr>
                    )
                })}
            </table>
        </div>
  );
};

NTableView.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Which Type of a List wanted
   */
  listType: PropTypes.oneOf(['none','sort', 'single-select', 'multi-select']),
  /**
   * Table View contents
   */
  caption: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

NTableView.defaultProps = {
  backgroundColor: null,
  primary: false,
  listType: 'sort',
  onClick: undefined,
};


