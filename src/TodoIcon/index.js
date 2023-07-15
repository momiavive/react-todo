import { ReactComponent as CompleteSVG } from "./complete-icon.svg";
import { ReactComponent as DeleteSVG } from "./delete-icon.svg";
import "./TodoIcon.css"

const ICON_TYPES = {
  "complete": (color) => <CompleteSVG className="Icon-svg" fill={color} />,
  "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />
};

function TodoIcon({ type, color, onPress }) {
  return (
    <span 
      className={`Icon-container Icon-container-${type}`}
      onClick={onPress}
    >
      {ICON_TYPES[type](color)}
    </span>
  );
}

export { TodoIcon };