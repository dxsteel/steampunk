import FilterByName from 'components/FilterByName';
import './Filter.scss';

const Filter = ({handleSubmit, filterByName, errorMessage, handleFilterName}) => {
  return (
    <form className="filter" onSubmit={handleSubmit}>
      <FilterByName
        filterByName={filterByName}
        errorMessage={errorMessage}
        handleFilterName={handleFilterName}
      ></FilterByName>
    </form>
  );
};

export default Filter;