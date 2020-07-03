interface Values {
  padding?: number | string;
  margin?: number | string;
  flex?: boolean;
  flexDirection?: string;
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  justify?: string;
}

export const LayoutClass: any = (values: Values) => {
  let layout: Array<any> = [];
  switch (values.padding) {
    case 1:
      layout.push("ly-pd-1");
      break;
    case 2:
      layout.push("ly-pd-2");
      break;
    case 0.5:
      layout.push("ly-pd-05");
      break;
    case "x1":
      layout.push("ly-pd-x-1");
      break;
    case "x2":
      layout.push("ly-pd-x-2");
      break;
    case "x.5":
      layout.push("ly-pd-x-05");
      break;
    case "y1":
      layout.push("ly-pd-y-1");
      break;
    case "y2":
      layout.push("ly-pd-y-2");
      break;
    case "y.5":
      layout.push("ly-pd-y-05");
      break;
  }
  switch (values.margin) {
    case 1:
      layout.push("ly-mg-1");
      break;
    case 2:
      layout.push("ly-mg-2");
      break;
    case 0.5:
      layout.push("ly-mg-05");
      break;
    case "x1":
      layout.push("ly-mg-x-1");
      break;
    case "x2":
      layout.push("ly-mg-x-2");
      break;
    case "x.5":
      layout.push("ly-mg-x-05");
      break;
    case "y1":
      layout.push("ly-mg-y-1");
      break;
    case "y2":
      layout.push("ly-mg-y-2");
      break;
    case "y.5":
      layout.push("ly-mg-y-05");
      break;
    case "b1":
      layout.push("ly-mg-b-1");
      break;
    case "b2":
      layout.push("ly-mg-b-2");
      break;
    case "b.5":
      layout.push("ly-mg-b-05");
      break;
  }
  switch (values.flex) {
    case true:
      layout.push("ly-flex");
  }
  switch (values.flexDirection) {
    case "col":
      layout.push("ly-flex-col");
      break;
    case "row":
      layout.push("ly-flex-row");
      break;
  }
  switch (values.x) {
    case "p1":
      layout.push("ly-x-pd-1");
      break;
    case "p2":
      layout.push("ly-x-pd-2");
      break;
    case "p.5":
      layout.push("ly-x-pd-05");
      break;
    case "m1":
      layout.push("ly-x-mg-1");
      break;
    case "m2":
      layout.push("ly-x-mg-2");
      break;
    case "m.5":
      layout.push("ly-x-mg-05");
      break;
  }
  switch (values.y) {
    case "p1":
      layout.push("ly-y-pd-1");
      break;
    case "p2":
      layout.push("ly-y-pd-2");
      break;
    case "p.5":
      layout.push("ly-y-pd-05");
      break;
    case "m1":
      layout.push("ly-y-mg-1");
      break;
    case "m2":
      layout.push("ly-y-mg-2");
      break;
    case "m.5":
      layout.push("ly-y-mg-05");
      break;
  }
  switch (values.width) {
    case "full":
      layout.push("ly-w-full");
      break;
  }
  switch (values.height) {
    case "full":
      layout.push("ly-h-full");
      break;
  }
  switch (values.justify) {
    case "center":
      layout.push("ly-justify-center");
      break;
    case "between":
      layout.push("ly-justify-between");
      break;
    case "evenly":
      layout.push("ly-justify-evenly");
      break;
    case "around":
      layout.push("ly-justify-around");
      break;
  }
  return layout;
};
