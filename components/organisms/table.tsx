import React, { useState } from "react";

interface Column<T> {
  header: string;
  accessor: keyof T;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
}

export const Table = <T extends { id?: string }>({
  columns,
  data,
  onRowClick,
}: TableProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set());

  const toggleRow = (id: string | number) => {
    setSelectedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleAll = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(data.map((row, i) => row.id ?? i)));
    }
  };

  return (
    <div className="rounded-sm shadow-lg bg-white overflow-x-auto w-full border border-gray-200 dark:bg-gray-900 dark:border dark:border-gray-700">
      {/* ✅ Desktop / Tablet Table */}
      <table className="hidden md:table w-full table-auto  px-4">
        <thead>
          <tr className="h-[40px] text-left">
            {/* Checkbox column */}
            <th className="px-2 py-3 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase">
              <input
                type="checkbox"
                checked={selectedRows.size === data.length && data.length > 0}
                onChange={toggleAll}
              />
            </th>
            {columns.map((col) => (
              <th
                key={String(col.accessor)}
                className="px-2 py-4 bg-gray-50 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 w-full">
          {data?.map((row, i) => {
            const rowId = row.id ?? i;
            return (
              <tr
                key={rowId}
                className={`transition-colors duration-200 cursor-pointer ${
                  selectedRows.has(rowId)
                    ? "bg-blue-100 dark:bg-gray-800"
                    : "bg-white dark:bg-gray-900"
                } hover:bg-blue-50 dark:hover:bg-gray-800`}
                onClick={() => onRowClick?.(row)}
              >
                {/* Checkbox cell */}
                <td className="px-2 py-4 text-sm text-gray-800 dark:text-gray-200">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(rowId)}
                    onChange={() => toggleRow(rowId)}
                    onClick={(e) => e.stopPropagation()} // ✅ prevent triggering row click
                  />
                </td>
                {columns.map((col) => (
                  <td
                    key={String(col.accessor)}
                    className="px-2 py-3 text-sm text-gray-800 text-left dark:text-gray-200"
                  >
                    {String(row[col.accessor])}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* ✅ Mobile Stacked View */}
      <div className="md:hidden divide-y divide-gray-200 dark:divide-gray-700">
        {data?.map((row, i) => {
          const rowId = row.id ?? i;
          return (
            <div
              key={rowId}
              className={`p-4 ${
                selectedRows.has(rowId)
                  ? "bg-blue-100 dark:bg-gray-800"
                  : "bg-white dark:bg-gray-900"
              } hover:bg-blue-50 dark:hover:bg-gray-800 cursor-pointer transition-colors`}
              onClick={() => onRowClick?.(row)}
            >
              {/* Checkbox */}
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={selectedRows.has(rowId)}
                  onChange={() => toggleRow(rowId)}
                  onClick={(e) => e.stopPropagation()}
                  className="mr-2"
                />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {columns[0].header}
                </span>
              </div>
              {columns.map((col) => (
                <div key={String(col.accessor)} className="flex justify-between py-1">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                    {col.header}
                  </span>
                  <span className="text-sm text-gray-800 dark:text-gray-200">
                    {String(row[col.accessor])}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
