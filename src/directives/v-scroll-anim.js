export default {
  mounted(el, binding) {
    const onEnter = binding.value?.onEnter;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('sessao-ativa')
          if (typeof onEnter === 'function') {
            onEnter();
          }
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el);
  }
}
