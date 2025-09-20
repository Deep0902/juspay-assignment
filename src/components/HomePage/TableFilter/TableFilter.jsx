import { useMemo, useState } from "react";
import {
  tableData,
  statusOptions,
  projectOptions,
} from "../../../data/tableData";
import { generateNewRow } from "../../../util/commonFunctions";
import { useTheme } from "../../../ThemeContext";
import "./TableFilter.css";
function TableFilter() {
  const [data, setData] = useState(tableData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const itemsPerPage = 10;
  const { theme, toggleTheme } = useTheme();
  const iconPath = (iconName) => `/${theme}/${iconName}.svg`;

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;

    return data.filter(
      (item) =>
        item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    return [...filteredData].sort((a, b) => {
      let aValue, bValue;

      switch (sortConfig.key) {
        case "user":
          aValue = a.user.name;
          bValue = b.user.name;
          break;
        case "id":
          aValue = parseInt(a.id.replace("#CM", ""));
          bValue = parseInt(b.id.replace("#CM", ""));
          break;
        default:
          aValue = a[sortConfig.key];
          bValue = b[sortConfig.key];
      }

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  // Paginate data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage]);

  // Calculate total pages
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  // Handle sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Handle add new row
  const handleAddRow = () => {
    setData((prevData) => {
      const newRow = generateNewRow(prevData, statusOptions, projectOptions);
      const newData = [...prevData, newRow];
      setCurrentPage(Math.ceil(newData.length / itemsPerPage));
      return newData;
    });
  };

  // Handle row selection
  const handleRowSelect = (id) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(id)) {
      newSelectedRows.delete(id);
    } else {
      newSelectedRows.add(id);
    }
    setSelectedRows(newSelectedRows);
  };

  // Handle select all
  const handleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(paginatedData.map((item) => item.id)));
    }
  };

  // Get status badge class
  const getStatusClass = (status) => {
    return status.toLowerCase().replace(" ", "-");
  };

  // Render sort indicator
  const renderSortIndicator = (key) => {
    if (sortConfig.key !== key) {
      return <span className="sort-indicator">↕</span>;
    }
    return (
      <span className={`sort-indicator active`}>
        {sortConfig.direction === "asc" ? "↑" : "↓"}
      </span>
    );
  };

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="data-table-container">
      <h2 className="activities-title">Order List</h2>
      <br />
      {/* Header with controls */}
      <div className="table-header">
        <div className="header-left">
          <button className="menu-button">
            <img src={iconPath("Plus")} alt="Clock" onClick={handleAddRow} />
          </button>
          <button className="menu-button">
            <img src={iconPath("Filter")} alt="Clock" />
          </button>
          <button className="menu-button">
            <img src={iconPath("ArrowsDownUp")} alt="Clock" />
          </button>
        </div>

        <div className="header-right">
          <div className="search-container-table">
            <img src={iconPath("Search")} alt="" className="search-icon" />{" "}
            <input
              type="text"
              className="search-input-table"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="data-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                className="checkbox"
                checked={
                  selectedRows.size === paginatedData.length &&
                  paginatedData.length > 0
                }
                onChange={handleSelectAll}
              />
            </th>
            <th onClick={() => handleSort("id")}>
              <div className="sortable-header">
                Order ID
                {renderSortIndicator("id")}
              </div>
            </th>
            <th onClick={() => handleSort("user")}>
              <div className="sortable-header">
                User
                {renderSortIndicator("user")}
              </div>
            </th>
            <th onClick={() => handleSort("project")}>
              <div className="sortable-header">
                Project
                {renderSortIndicator("project")}
              </div>
            </th>
            <th onClick={() => handleSort("address")}>
              <div className="sortable-header">
                Address
                {renderSortIndicator("address")}
              </div>
            </th>
            <th onClick={() => handleSort("date")}>
              <div className="sortable-header">
                Date
                {renderSortIndicator("date")}
              </div>
            </th>
            <th onClick={() => handleSort("status")}>
              <div className="sortable-header">
                Status
                {renderSortIndicator("status")}
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectedRows.has(item.id)}
                    onChange={() => handleRowSelect(item.id)}
                  />
                </td>
                <td>{item.id}</td>
                <td>
                  <div className="user-cell">
                    <img src={item.user.avatar} alt={item.user.name} />
                    <span>{item.user.name}</span>
                  </div>
                </td>
                <td>{item.project}</td>
                <td>{item.address}</td>
                <td>
                  <div className="date-cell">
                    <img src={iconPath("Calendar")} alt="" /> {item.date}
                  </div>
                </td>
                <td>
                  <span
                    className={`status-badge ${getStatusClass(item.status)}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="actions-cell">
                  <button className="more-actions">⋯</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="no-results">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            <img src={iconPath("ChevronRight")} alt="" className="rotate-180" />
          </button>

          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              className={`pagination-button ${
                currentPage === pageNum ? "active" : ""
              }`}
              onClick={() => setCurrentPage(pageNum)}
            >
              {pageNum}
            </button>
          ))}

          <button
            className="pagination-button"
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
          >
            <img src={iconPath("ChevronRight")} alt="" />
          </button>
        </div>
      )}
    </div>
  );
}
export default TableFilter;
