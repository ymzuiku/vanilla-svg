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
  svg.style.width = width;
  svg.style.height = height;
  // svg.setAttribute("width", width);
  // svg.setAttribute("height", height);
  const paths = svg.querySelectorAll("path");
  paths.forEach((path) => {
    path.setAttribute("fill", "currentColor");
    // path.setAttribute("width", width);
    // path.setAttribute("height", height);
  });

  html = ele.innerHTML;

  return ({ children, className, ...rest }: any = {}) => {
    const ele = document.createElement("div");
    ele.className = "vanilla-svg " + (rest.className || rest.class || "");
    Object.keys(rest).forEach((k) => {
      if (k !== "class") {
        (ele as any)[k] = rest[k];
      }
    });
    ele.innerHTML = html;
    return ele;
  };
};

export default Svg;
