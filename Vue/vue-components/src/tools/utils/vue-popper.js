// import Vue from 'vue';
import nextZIndex from './popup/popper_mgr.js';
import PopperJS from './popper';
// const stop = e => e.stopPropagation();

export default {
  props: {
    transformOrigin: {
      type: [Boolean, String],
      default: true
    },
    placement: {
      type: String,
      default: 'bottom' 
    },
    reference: {},
    popper: {},
    offset: { 
      default: 50
    },
    popperOptions: {
      type: Object,
      default () {
        return {
          gpuAcceleration: false
        }
      }
    }
  },

  data () {
    return {
      showPopper: false,
      currentPlacement: ''
    }
  },

  watch: {
    showPopper (val) {
      if (this.disabled) {
        return;
      }
      val && this.updatePopper();
    }
  },

  methods: {
    createPopper () {
      this.currentPlacement = this.currentPlacement || this.placement;
      if (!/^(top|bottom|left|right)(-start|-end)?/g.test(this.currentPlacement)) {
        return;
      }
      
      const options = this.popperOptions;
      const reference = this.reference || this.$refs.reference || this.$slots.reference[0] && this.$slots.reference[0].elm;
      const popper = this.popper || this.$refs.popper;

      if (!reference || !popper) return;

      options.placement = this.currentPlacement;
      options.offset = this.offset;

      console.log(PopperJS);
      console.log(this.popperJS);
      this.popperJS = new PopperJS(reference, popper, options);
      this.popperJS.onCreate(() => {
        this.$emit('created', this);
        this.resetTransformOrigin();
      });

      this.popperJS._popper.style.zIndex = nextZIndex();
    },

    doDestroy (forceDestroy) {
      if (!this.popperJS || (this.showPopper && !forceDestroy)) return;
      this.popperJS.destroy();
      this.popperJS = null;
    },

    updatePopper () {
      const popperJS = this.popperJS;
      if (popperJS) {
        popperJS.update();
        if (popperJS._popover) {
          popperJS._popover.style.zIndex = nextZIndex();
        }
      } else {
        this.createPopper();
      }
    },

    resetTransformOrigin() {
      if (!this.transformOrigin) return;
      let placementMap = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
      };
      let placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];
      let origin = placementMap[placement];
      this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin === 'string'
        ? this.transformOrigin
        : ['top', 'bottom'].indexOf(placement) > -1 ? `center ${ origin }` : `${ origin } center`;
    },

    beforeDestroy() {
      this.doDestroy(true);
      if(this.popperElm && this.popperElm.parentNode === document.body) {
        document.body.removeChild(this.popperElm);
      }
    },

    deactivated() {
      this.$options.beforeDestroy[0].call(this);
    }
  }
}