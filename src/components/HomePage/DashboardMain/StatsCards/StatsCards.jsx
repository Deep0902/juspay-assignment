import "./StatsCards.css";
import cardsData from "../../../../data/cardsData";
import { getIconPath } from "../../../../util/commonFunctions";
import { useTheme } from "../../../../ThemeContext";
function StatsCards() {
  const { theme } = useTheme();
  return (
    <>
      {cardsData.map((card) => (
        <div
          className={`card card-color-${card.color}`}
          key={card.id || card.heading}
        >
          <span className="heading">{card.heading}</span>
          <div className="numbers">
            <span className="value">{card.value}</span>
            <span className="percentage">
              {card.percentage}%
              <img
                src={getIconPath(`${card.icon}.svg`, "light")}
                alt="Sidebar"
              />
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default StatsCards;
