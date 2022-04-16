import "./PanelControlEmojis.css";
function PanelControl({ panelDesac, valueEmoji }) {
  const emojis = [
    "😀",
    "😁",
    "😂",
    "😃",
    "😄",
    "😅",
    "😆",
    "😇",
    "😈",
    "😉",
    "😊",
    "😋",
    "😌",
    "😍",
    "😎",
    "😏",
    "😐",
    "😑",
    "😒",
    "😓",
    "😔",
    "😕",
    "😖",
    "😗",
    "😘",
    "😙",
    "😚",
    "😛",
    "😜",
    "😝",
    "😞",
    "😟",
    "😠",
    "😡",
    "😢",
    "😣",
    "😤",
    "😥",
    "😦",
    "😧",
    "😨",
    "😩",
    "😪",
    "😫",
    "😬",
    "😭",
    "😮",
    "😯",
    "😰",
    "😱",
    "😲",
    "😳",
    "😴",
    "😵",
    "😶",
    "😷",
    "🙁",
    "🙂",
    "🙃",
    "🙄",
    "🤐",
    "🤑",
    "🤒",
    "🤓",
    "🤔",
    "🤕",
    "🤠",
    "🤡",
    "🤢",
    "🤣",
    "🤤",
    "🤥",
    "🤧",
    "🤨",
    "🤩",
    "🤪",
    "🤫",
    "🤬",
    "🤭",
    "🤮",
    "🤯",
    "🧐",
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
