// Based on code and ideas from https://dev.to/devsmitra/how-to-create-the-app-using-jsx-without-react-k08

/**
 * Creates a DOM node from JSX.
 * @param {string|function} tag
 * @param {Object} [props]
 * @param {...any} children
 * @returns {Element|DocumentFragment}
 */
function jsx(tag, props, ...children) {
  if (typeof tag === "function") return tag(props, children);
  const element = tag === "jsx-fragment" ? document.createDocumentFragment() : document.createElement(tag);
  Object.entries(props || {}).forEach(([name, value]) => {
    const convertedAttributeName = convertAttributeCamelCase(convertAttributeClassName(name));
    element.setAttribute(convertedAttributeName, value);
  });
  appendChild(element, children);
  return element;
}

function add(parent, child) {
  parent.appendChild(child?.nodeType ? child : document.createTextNode(child));
}

function appendChild (parent, child) {
  if (Array.isArray(child)) {
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  } else {
    add(parent, child);
  }
}

function convertAttributeClassName(attribute) {
  return attribute === "className" ? "class" : attribute;
}

function convertAttributeCamelCase(attribute) {
  return attribute
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")  // fooBar -> foo-Bar
    .toLowerCase();
}

export const React = {createElement: jsx, Fragment: 'jsx-fragment'};
