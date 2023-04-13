import { BsSearch } from 'react-icons/bs';
import './FilterByName.scss';

const FilterByName = ({handleFilterName, filterByName, errorMessage}) => {
  const handleInput = ev => {
    handleFilterName(ev.target.value);
  };
  return (
    <>
    <div>
      <span className="search">
        <BsSearch />
      </span>
      <input
        className="input"
        type="text"
        placeholder="Filter by name..."
        onInput={handleInput}
        value={filterByName}
      />
    </div>
    <p>{errorMessage}</p>
    </>
  );
};

export default FilterByName;