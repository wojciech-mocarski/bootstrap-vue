import Vue, { mergeData } from '../../utils/vue'
import { BForm, props as formProps } from '../form/form'

// @vue/component
export const BDropdownForm = /*#__PURE__*/ Vue.extend({
  name: 'BDropdownForm',
  functional: true,
  props: {
    ...formProps,
    disabled: {
      type: Boolean,
      default: false
    },
    formClass: {
      type: [String, Object, Array]
      // default: null
    }
  },
  render(h, { props, data, children }) {
    const $attrs = data.attrs || {}
    const $listeners = data.on || {}
    data.attrs = {}
    data.on = {}
    return h('li', mergeData(data, { attrs: { role: 'presentation' } }), [
      h(
        BForm,
        {
          ref: 'form',
          staticClass: 'b-dropdown-form',
          class: [props.formClass, { disabled: props.disabled }],
          props,
          attrs: {
            ...$attrs,
            disabled: props.disabled,
            // Tab index of -1 for keyboard navigation
            tabindex: props.disabled ? null : '-1'
          },
          on: $listeners
        },
        children
      )
    ])
  }
})
