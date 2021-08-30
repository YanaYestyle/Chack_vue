export default {
    mounted(el, binding) {
        let options = {
    rootMargin: '5px',
    threshold: 0.5
    };

    let callback = (entries, observer) => {
      if(entries[0].isIntersecting) {
        binding.value();
      }
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(el);
    }
}