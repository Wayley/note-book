# js2flowchart

## Usage

- Install

  ```bash
  $ npm install js2flowchart
  # or
  $ yarn add js2flowchart
  ```

- Source code

  ```js
  const code = `
  function indexSearch(list, element) {
    let currentIndex,
      currentElement,
      minIndex = 0,
      maxIndex = list.length - 1;
  
    while (minIndex <= maxIndex) {
      currentIndex = Math.floor(maxIndex + maxIndex) / 2;
      currentElement = list[currentIndex];
  
      if (currentElement === element) {
        return currentIndex;
      }
  
      if (currentElement < element) {
        minIndex = currentIndex + 1;
      }
  
      if (currentElement > element) {
        maxIndex = currentIndex - 1;
      }
    }
  
    return -1;
  }
  `;
  ```

- Build flow tree
  ```js
  const flowTreeBuilder = createFlowTreeBuilder();
  const flowTree = flowTreeBuilder.build(code);
  ```
- Render svg

  ```js
  const svgRender = createSVGRender();
  const shapesTree = svgRender.buildShapesTree(flowTree);
  const svg = shapesTree.print();
  ```

- Append to html
  ```js
  document.getElementById("svgImage").innerHTML = svg;
  ```
