const loadImage = (el) => {
  el.src = el.dataset.src
};

const createIntersectionObserver = (el) => {
  let options = {
    root: null,
    threshold: 0,
  }
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadImage(el);
        observer.unobserve(el);
      }
    })
  }, options);
  observer.observe(el)

};

export default {
  beforeMount: (el, binding, vnode, prevVnode) => {
    if (!window['IntersectionObserver']) {
      loadImage(el)
    } else {
      createIntersectionObserver(el)
    }
  }
}