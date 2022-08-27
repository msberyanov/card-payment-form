import React from "react";
import { generateMonthNumber } from "../../../../utils/generate-month-number";
import "./card-expiration-date-select.css"
import { generateYears } from "../../../../utils/generate-years";

const monthNumbers = Array.from({length: 12}, (_, index) => generateMonthNumber(index + 1));
const years = generateYears();

interface CardExpirationDateSelectProps {
  onFocus: React.FocusEventHandler<HTMLSelectElement>;
  onMonthChange: React.ChangeEventHandler<HTMLSelectElement>;
  onYearChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export const CardExpirationDateSelect: React.FC<CardExpirationDateSelectProps> = ({
  onFocus,
  onMonthChange,
  onYearChange
}) => {
  return (
    <div className="card-expiration-date-select-zone">
      <select
        className="card-expiration-date-select card-input card-input-element-light card-text-element-light"
        defaultValue="Month"
        onChange={onMonthChange}
        onFocus={onFocus}
      >
        <option selected disabled>Month</option>
        {monthNumbers.map(monthNumber =>
          <option>{monthNumber}</option>
        )}
      </select>
      <select
        className="card-expiration-date-select card-input card-input-element-light card-text-element-light"
        defaultValue="Year"
        onChange={onYearChange}
        onFocus={onFocus}
      >
        <option selected disabled>Year</option>
        {years.map(year =>
          <option>{year}</option>
        )}
      </select>
    </div>
  );
}
