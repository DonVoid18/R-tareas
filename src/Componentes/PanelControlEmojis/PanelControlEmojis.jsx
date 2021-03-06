import "./PanelControlEmojis.css";
function PanelControl({ panelDesac, valueEmoji }) {
  const emojis = [
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐ ",
    "๐ก",
    "๐ข",
    "๐ฃ",
    "๐ค",
    "๐ฅ",
    "๐ฆ",
    "๐ง",
    "๐จ",
    "๐ฉ",
    "๐ช",
    "๐ซ",
    "๐ฌ",
    "๐ญ",
    "๐ฎ",
    "๐ฏ",
    "๐ฐ",
    "๐ฑ",
    "๐ฒ",
    "๐ณ",
    "๐ด",
    "๐ต",
    "๐ถ",
    "๐ท",
    "๐",
    "๐",
    "๐",
    "๐",
    "๐ค",
    "๐ค",
    "๐ค",
    "๐ค",
    "๐ค",
    "๐ค",
    "๐ค ",
    "๐คก",
    "๐คข",
    "๐คฃ",
    "๐คค",
    "๐คฅ",
    "๐คง",
    "๐คจ",
    "๐คฉ",
    "๐คช",
    "๐คซ",
    "๐คฌ",
    "๐คญ",
    "๐คฎ",
    "๐คฏ",
    "๐ง",
  ];
  return (
    <div
      className={`container_panel_emojis ${panelDesac ? "enabled" : ""}`.trim()}
    >
      <div className="container_emojis">
        {emojis.map((emoji, index) => (
          <span
            className="icon_item_button"
            key={index}
            onClick={() => valueEmoji(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
      <div className="panel_triangulo"></div>
    </div>
  );
}
export default PanelControl;
