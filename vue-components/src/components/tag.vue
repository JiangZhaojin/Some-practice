<script>
export default {
  name: 'ElTag',
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransition: Boolean,
    color: String,
    size: String
  },
  methods: {
    handleClick (event) {
      event.stopPropagation();
      this.$emit('close', event);
    }
  },
  computed: {
    tagSize () {
      return this.size || (this.$ELEMENT || {}).size;
    }
  },
  render (h) {
    const classes = [ 'el-tag', this.type ? `el-tag--${this.type}` : '',
        this.tagSize ? `el-tag--${this.tagSize}` : '',
        {'is-hit': this.hit}
      ];
    const tagEl = (<span class={classes} style={{backgroundColor: this.color}}>
      {this.$slots.default}
      {
        this.closable && <i class="el-tag__close el-icon-close" on-click={this.handleClick}></i>
      }
    </span>);
    return this.disableTransition ? tagEl : <transition name="el-zoom-in-center">{ tagEl }</transition>
  }
}
</script>
