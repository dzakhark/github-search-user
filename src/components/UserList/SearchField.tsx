import React, { memo, useState, useCallback } from 'react'

interface SearchFieldProps {
  value: string,
  onChangeHandler: (value: string) => void,
}

const SearchField = ({ value, onChangeHandler }: SearchFieldProps) => {
  const [fieldValue, setFieldValue] = useState(value);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFieldValue(value);
    onChangeHandler(value);
  }, [onChangeHandler]);

  return (
    <form>
      <label htmlFor="search" className="sr-only">Search GitHub Users</label>
      <input
        id="search"
        type="text"
        value={fieldValue}
        placeholder="Search GitHub Users"
        className="w-full p-2 border border-gray-300 rounded-lg"
        onChange={onChange}
      />
    </form>
  )
}

export default memo(SearchField)