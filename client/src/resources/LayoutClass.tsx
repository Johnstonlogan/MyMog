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
  align?: string;
}

export const LayoutClass: any = (values: Values) => {
  let layout: Array<string> = [];
  switch (values.padding) {
    case 1:
      layout.push("my-pd-1");
      break;
    case 2:
      layout.push("my-pd-2");
      break;
    case 0.5:
      layout.push("my-pd-05");
      break;
    case "x1":
      layout.push("my-pd-x-1");
      break;
    case "x2":
      layout.push("my-pd-x-2");
      break;
    case "x.5":
      layout.push("my-pd-x-05");
      break;
    case "y1":
      layout.push("my-pd-y-1");
      break;
    case "y2":
      layout.push("my-pd-y-2");
      break;
    case "y.5":
      layout.push("my-pd-y-05");
      break;
  }
  switch (values.margin) {
    case 1:
      layout.push("my-mg-1");
      break;
    case 2:
      layout.push("my-mg-2");
      break;
    case 0.5:
      layout.push("my-mg-05");
      break;
    case "x1":
      layout.push("my-mg-x-1");
      break;
    case "x2":
      layout.push("my-mg-x-2");
      break;
    case "x.5":
      layout.push("my-mg-x-05");
      break;
    case "y1":
      layout.push("my-mg-y-1");
      break;
    case "y2":
      layout.push("my-mg-y-2");
      break;
    case "y.5":
      layout.push("my-mg-y-05");
      break;
    case "b1":
      layout.push("my-mg-b-1");
      break;
    case "b2":
      layout.push("my-mg-b-2");
      break;
    case "b.5":
      layout.push("my-mg-b-05");
      break;
    case "t1":
      layout.push("my-mg-t-1");
      break;
    case "t2":
      layout.push("my-mg-t-2");
      break;
    case "t.5":
      layout.push("my-mg-t-05");
      break;
  }
  switch (values.flex) {
    case true:
      layout.push("my-flex");
  }
  switch (values.flexDirection) {
    case "col":
      layout.push("my-flex-col");
      break;
    case "row":
      layout.push("my-flex-row");
      break;
  }
  switch (values.x) {
    case "p1":
      layout.push("my-x-pd-1");
      break;
    case "p2":
      layout.push("my-x-pd-2");
      break;
    case "p.5":
      layout.push("my-x-pd-05");
      break;
    case "m1":
      layout.push("my-x-mg-1");
      break;
    case "m2":
      layout.push("my-x-mg-2");
      break;
    case "m.5":
      layout.push("my-x-mg-05");
      break;
  }
  switch (values.y) {
    case "p1":
      layout.push("my-y-pd-1");
      break;
    case "p2":
      layout.push("my-y-pd-2");
      break;
    case "p.5":
      layout.push("my-y-pd-05");
      break;
    case "m1":
      layout.push("my-y-mg-1");
      break;
    case "m2":
      layout.push("my-y-mg-2");
      break;
    case "m.5":
      layout.push("my-y-mg-05");
      break;
  }
  switch (values.width) {
    case "full":
      layout.push("my-w-full");
      break;
  }
  switch (values.height) {
    case "full":
      layout.push("my-h-full");
      break;
  }
  switch (values.justify) {
    case "center":
      layout.push("my-justify-center");
      break;
    case "between":
      layout.push("my-justify-between");
      break;
    case "evenly":
      layout.push("my-justify-evenly");
      break;
    case "around":
      layout.push("my-justify-around");
      break;
  }
  switch (values.align) {
    case "center":
      layout.push("my-align-center");
      break;
    case "end":
      layout.push("my-align-flex-end");
      break;
    case "start":
      layout.push("my-align-flex-start");
      break;
  }
  return layout;
};
