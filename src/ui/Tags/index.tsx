import Tag from "../Tag";
import FilterBar, { Border } from "./subcomponents";

const Tags = () => {
  return (
    <div>
      <Border />
      <FilterBar>
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
      </FilterBar>
      <Border />
    </div>
  );
};

export default Tags;
