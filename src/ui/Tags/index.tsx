import Tag from "../Tag";
import FilterBar from "./subcomponents";

const Tags = () => {
  return (
    <FilterBar>
      <div>
        <Tag text="All" active />
        <Tag text="Live" active />
        <Tag text="Music" active />
        <Tag text="Gaming" active />
        <Tag text="Mixes" active />
        <Tag text="KSI" active />
        <Tag text="Tiny house movement" active />
        <Tag text="Escape from Tarkov" active />
        <Tag text="Mansions" active />
        <Tag text="Among Us" active />
        <Tag text="Fall Guys: Ultimate Knockout" active />
        <Tag text="Podcasts" active />
        <Tag text="Call of Duty: Warzone" active />
        <Tag text="Fast food" active />
        <Tag text="Freestyle Rap" active />
        <Tag text="Laughter" active />
        <Tag text="Tools" active />
      </div>
    </FilterBar>
  );
};

export default Tags;
