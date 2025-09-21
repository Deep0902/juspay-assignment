import "./StatsCards.css";
import cardsData from "../../../../data/cardsData";
import { getIconPath } from "../../../../util/commonFunctions";
import { useTheme } from "../../../../ThemeContext";
import { memo } from "react";
function StatsCards() {
  const { theme } = useTheme();
  return (
    <>
      {cardsData.map((card) => {
        const iconTheme = card.color === 2 ? theme : "light";
        return (
          <div
            className={`card card-color-${card.color}`}
            key={card.id || card.heading}
          >
            <span className="heading">{card.heading}</span>
            <div className="numbers">
              <span className="value">{card.value}</span>
              <span className="percentage">
                {card.percentage}%&nbsp;
                <img
                  src={getIconPath(`${card.icon}.svg`, iconTheme)}
                  alt="Sidebar"
                />
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default memo(StatsCards);
