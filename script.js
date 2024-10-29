let isNightMode = false;

function toggleMode() {
  const body = document.body;
  const container = document.querySelector(".container");
  const result = document.querySelector(".result");
  const modeToggle = document.getElementById("modeToggle");

  body.classList.toggle("night-mode");
  container.classList.toggle("night-mode");
  result.classList.toggle("night-mode");

  if (body.classList.contains("night-mode")) {
    modeToggle.classList.add("night-mode");
    modeToggle.classList.remove("fa-sun");
    modeToggle.classList.add("fa-moon");
  } else {
    modeToggle.classList.remove("night-mode");
    modeToggle.classList.remove("fa-moon");
    modeToggle.classList.add("fa-sun");
  }
}

function toggleShapeInputs() {
  resetResult();

  const shapeType = document.getElementById("shapeType").value;
  const shapeInputs = document.getElementById("shapeInputs");
  const shapeName = document.getElementById("shapeName");

  shapeName.innerHTML = '<option value="">Select</option>';
  document.getElementById("inputsContainer").innerHTML = "";
  document.getElementById("result").innerHTML = "";

  if (shapeType) {
    shapeInputs.style.display = "block";

    const shapes =
      shapeType === "2D"
        ? [
            "Circle",
            "Triangle",
            "Square",
            "Rectangle",
            "Parallelogram",
            "Rhombus",
          ]
        : ["Sphere", "Cylinder", "Cone", "Cube", "Cuboid"];

    shapes.forEach((shape) => {
      const option = document.createElement("option");
      option.value = shape;
      option.textContent = shape;
      shapeName.appendChild(option);
    });
  } else {
    shapeInputs.style.display = "none";
  }
}

function showInputs() {
  resetResult();

  const shapeName = document.getElementById("shapeName").value;
  const inputsContainer = document.getElementById("inputsContainer");

  let html = "";
  switch (shapeName) {
    case "Circle":
      html = `<label>Radius: <input type="number" id="circleRadius" required></label>`;
      break;
    case "Triangle":
      html = `<label>Base: <input type="number" id="triangleBase" required></label>
                     <label>Height: <input type="number" id="triangleHeight" required></label>`;
      break;
    case "Square":
      html = `<label>Side: <input type="number" id="squareSide" required></label>`;
      break;
    case "Rectangle":
      html = `<label>Length: <input type="number" id="rectangleLength" required></label>
                     <label>Breadth: <input type="number" id="rectangleBreadth" required></label>`;
      break;
    case "Parallelogram":
      html = `<label>Base: <input type="number" id="parallelogramBase" required></label>
                     <label>Height: <input type="number" id="parallelogramHeight" required></label>
                     <label>Side: <input type="number" id="parallelogramSide" required></label>`;
      break;
    case "Rhombus":
      html = `<label>Side: <input type="number" id="rhombusSide" required></label>
                     <label>Diagonal 1: <input type="number" id="diagonal1" required></label>
                     <label>Diagonal 2: <input type="number" id="diagonal2" required></label>`;
      break;
    case "Sphere":
      html = `<label>Radius: <input type="number" id="sphereRadius" required></label>`;
      break;
    case "Cylinder":
      html = `<label>Radius: <input type="number" id="cylinderRadius" required></label>
                     <label>Height: <input type="number" id="cylinderHeight" required></label>`;
      break;
    case "Cone":
      html = `<label>Radius: <input type="number" id="coneRadius" required></label>
                     <label>Height: <input type="number" id="coneHeight" required></label>`;
      break;
    case "Cube":
      html = `<label>Side: <input type="number" id="cubeSide" required></label>`;
      break;
    case "Cuboid":
      html = `<label>Length: <input type="number" id="cuboidLength" required></label>
                     <label>Breadth: <input type="number" id="cuboidBreadth" required></label>
                     <label>Height: <input type="number" id="cuboidHeight" required></label>`;
      break;
    default:
      html = "";
  }

  inputsContainer.innerHTML = html;
  inputsContainer.style.display = html ? "block" : "none";
}

function calculate() {
  let result = "";
  try {
    const shapeName = document.getElementById("shapeName").value;

    switch (shapeName) {
      case "Circle":
        const circleRadius = parseFloat(
          document.getElementById("circleRadius").value
        );
        result = `Circumference: ${2 * Math.PI * circleRadius} units<br>Area: ${
          Math.PI * Math.pow(circleRadius, 2)
        } square units`;
        break;
      case "Triangle":
        const triangleBase = parseFloat(
          document.getElementById("triangleBase").value
        );
        const triangleHeight = parseFloat(
          document.getElementById("triangleHeight").value
        );
        result = `Perimeter: ${3 * triangleBase} units<br>Area: ${
          (triangleBase * triangleHeight) / 2
        } square units`;
        break;
      case "Square":
        const squareSide = parseFloat(
          document.getElementById("squareSide").value
        );
        result = `Perimeter: ${4 * squareSide} units<br>Area: ${
          squareSide * squareSide
        } square units`;
        break;
      case "Rectangle":
        const rectangleLength = parseFloat(
          document.getElementById("rectangleLength").value
        );
        const rectangleBreadth = parseFloat(
          document.getElementById("rectangleBreadth").value
        );
        result = `Perimeter: ${
          2 * (rectangleLength + rectangleBreadth)
        } units<br>Area: ${rectangleLength * rectangleBreadth} square units`;
        break;
      case "Parallelogram":
        const parallelogramBase = parseFloat(
          document.getElementById("parallelogramBase").value
        );
        const parallelogramHeight = parseFloat(
          document.getElementById("parallelogramHeight").value
        );
        const parallelogramSide = parseFloat(
          document.getElementById("parallelogramSide").value
        );
        result = `Perimeter: ${
          2 * (parallelogramBase + parallelogramSide)
        } units<br>Area: ${
          parallelogramBase * parallelogramHeight
        } square units`;
        break;
      case "Rhombus":
        const rhombusSide = parseFloat(
          document.getElementById("rhombusSide").value
        );
        const diagonal1 = parseFloat(
          document.getElementById("diagonal1").value
        );
        const diagonal2 = parseFloat(
          document.getElementById("diagonal2").value
        );
        result = `Perimeter: ${4 * rhombusSide} units<br>Area: ${
          (diagonal1 * diagonal2) / 2
        } square units`;
        break;
      case "Sphere":
        const sphereRadius = parseFloat(
          document.getElementById("sphereRadius").value
        );
        result = `Surface Area: ${
          4 * Math.PI * sphereRadius * sphereRadius
        } square units<br>Volume: ${
          (4 / 3) * Math.PI * Math.pow(sphereRadius, 3)
        } cubic units`;
        break;
      case "Cylinder":
        const cylinderRadius = parseFloat(
          document.getElementById("cylinderRadius").value
        );
        const cylinderHeight = parseFloat(
          document.getElementById("cylinderHeight").value
        );
        result = `Surface Area: ${
          2 * Math.PI * cylinderRadius * (cylinderRadius + cylinderHeight)
        } square units<br>Volume: ${
          Math.PI * cylinderRadius * cylinderRadius * cylinderHeight
        } cubic units`;
        break;
      case "Cone":
        const coneRadius = parseFloat(
          document.getElementById("coneRadius").value
        );
        const coneHeight = parseFloat(
          document.getElementById("coneHeight").value
        );
        const slantHeight = Math.sqrt(
          coneRadius * coneRadius + coneHeight * coneHeight
        );
        result = `Surface Area: ${(
          Math.PI *
          coneRadius *
          (coneRadius + slantHeight)
        ).toFixed(2)} square units<br>Volume: ${(
          (1 / 3) *
          Math.PI *
          coneRadius *
          coneRadius *
          coneHeight
        ).toFixed(2)} cubic units`;
        break;
      case "Cube":
        const cubeSide = parseFloat(document.getElementById("cubeSide").value);
        result = `Surface Area: ${
          6 * cubeSide * cubeSide
        } square units<br>Volume: ${Math.pow(cubeSide, 3)} cubic units`;
        break;
      case "Cuboid":
        const cuboidLength = parseFloat(
          document.getElementById("cuboidLength").value
        );
        const cuboidBreadth = parseFloat(
          document.getElementById("cuboidBreadth").value
        );
        const cuboidHeight = parseFloat(
          document.getElementById("cuboidHeight").value
        );
        result = `Surface Area: ${
          2 *
          (cuboidLength * cuboidBreadth +
            cuboidLength * cuboidHeight +
            cuboidBreadth * cuboidHeight)
        } square units<br>Volume: ${
          cuboidLength * cuboidBreadth * cuboidHeight
        } cubic units`;
        break;
      default:
        result = "Please select a shape.";
    }
  } catch (error) {
    result = "Error in calculation: " + error.message;
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = result;
  resultDiv.style.display = "block";
}

function resetResult() {
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "none";
}
