function createContinuousAnimation(targets, properties) {
  return anime
    .timeline({
      loop: true,
      easing: "easeInOutQuad",
    })
    .add({
      targets: targets,
      opacity: properties.opacity[0],
      translateY: properties.translateY[0],
      duration: properties.duration[0],
      delay: properties.delay[0],
    })
    .add({
      targets: targets,
      opacity: properties.opacity[1],
      translateY: properties.translateY[1],
      duration: properties.duration[1],
      delay: properties.delay[1],
    });
}

// Animación continua para el título h1
createContinuousAnimation("h1", {
  opacity: [0, 1],
  translateY: ["-20px", 0],
  duration: [5000, 800],
  delay: [0, 1000],
});

// Animación continua para los títulos h3 y h4
createContinuousAnimation("h3, h4", {
  opacity: [0, 1],
  translateY: ["-20px", 0],
  duration: [5000, 800],
  delay: [500, 500],
});
