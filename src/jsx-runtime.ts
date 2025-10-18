// Based on code and ideas from https://dev.to/devsmitra/how-to-create-the-app-using-jsx-without-react-k08

type ContainerNode = DocumentFragment | HTMLElement
type ChildNode = ContainerNode | string
type Props = { [key: string]: string }
type Tag = string | ((props: Props, children: ChildNode[]) => ContainerNode)

/**
 * Creates a DOM node from a compiled JSX element.
 */
function jsxToElement(tag: Tag, props: Props, ...children: ChildNode[]) {
  if (typeof tag === "function") return tag(props, children)

  const element = tag === "jsx-fragment" ? document.createDocumentFragment() : document.createElement(tag);
  if ("setAttribute" in element) {
    Object.entries(props || {}).forEach(([name, value]) => {
      const convertedAttributeName = convertAttributeCamelCase(convertAttributeClassName(name))
      element.setAttribute(convertedAttributeName, value)
    })
  }
  appendChild(element, children)

  return element
}

function add(parent: ContainerNode, child: ChildNode) {
  const childNode = typeof child === 'string' ? document.createTextNode(child) : child;
  parent.appendChild(childNode);
}

function appendChild(parent: ContainerNode, child: ChildNode | ChildNode[]) {
  if (Array.isArray(child)) {
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  } else {
    add(parent, child);
  }
}

function convertAttributeClassName(attribute: string) {
  return attribute === "className" ? "class" : attribute;
}

function convertAttributeCamelCase(attribute: string) {
  return attribute
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")  // fooBar -> foo-Bar
    .toLowerCase();
}

export const React = {createElement: jsxToElement, Fragment: 'jsx-fragment'}
export const jsx = jsxToElement
export const jsxs = jsxToElement
export const Fragment = 'jsx-fragment'
