const dragElement = document.getElementById("dragMe");

  dragElement.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text", event.target.id);
  });

  document.addEventListener("dragover", function(event) {
    event.preventDefault(); // Needed to allow dropping
  });

  document.addEventListener("drop", function(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    draggedElement.style.position = "absolute";
    draggedElement.style.left = event.clientX + "px";
    draggedElement.style.top = event.clientY + "px";
  });

