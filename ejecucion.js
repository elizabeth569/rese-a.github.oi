function mostrarReceta(idReceta) {
  const panel = document.getElementById(idReceta);
  if (panel) {
    panel.style.display = "flex";
  }
}

function cerrarReceta(idReceta) {
  const panel = document.getElementById(idReceta);
  if (panel) {
    panel.style.display = "none";
  }
}
