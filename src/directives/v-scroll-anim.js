export default {
  mounted(el, binding) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('sessao-ativa')
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
      }
    )

    observer.observe(el)
  }
}
