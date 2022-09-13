import { SidebarSelector, SideText } from "./subcomponents";

interface SideTagProps {
  text: string;
  active: boolean;
}

const SideTag = ({ active, text }: SideTagProps) => {
  return (
    <SidebarSelector $active={active}>
      <SideText>{text}</SideText>
    </SidebarSelector>
  );
};

export default SideTag;
