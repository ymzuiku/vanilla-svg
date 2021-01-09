const style = document.createElement("style");
style.textContent = `
.giv-svg {
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
`;
document.head.append(style);

const Svg = (html: string, width = "1em", height = "1em") => {
  const ele = document.createElement("div");
  ele.innerHTML = html;
  const svg = ele.querySelector("svg");
  if (!svg) {
    throw "传入的 html 不是一个svg";
  }
  svg.setAttribute("fill", "currentColor");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  const paths = svg.querySelectorAll("path");
  paths.forEach((path) => {
    path.setAttribute("fill", "currentColor");
    path.setAttribute("width", width);
    path.setAttribute("height", height);
  });

  html = ele.innerHTML;

  return (props: any = {}) => {
    const span = document.createElement("span");
    span.className = "vanilla-svg " + (props.className || props.class || "");
    Object.keys(props).forEach((k) => {
      (span as any)[k] = props[k];
    });
    span.innerHTML = html;
    return span;
  };
};

export default Svg;
