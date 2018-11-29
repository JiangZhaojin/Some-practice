const getReference = (el, binding, vnode) => {
  const _ref = binding.expression ? binding.value : binding.arg;
  const proper = vnode.context.$refs[_ref];
  if (proper) {
    if (Array.isArray(proper)) {
      proper[0].$refs.reference = el;
    } else {
      proper.$refs.reference = el;
    }
  }
}

export default {
  bind (el, binding, vnode) {
    getReference(el, binding, vnode);
  },
  inserted (el, binding, vnode) {
    getReference(el, binding, vnode);
  }
}