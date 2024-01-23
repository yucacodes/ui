/** @jsxImportSource @builder.io/qwik */

import {
  CSSProperties,
  ClassList,
  Slot,
  component$
} from '@builder.io/qwik'
import { colorFlagsOptions } from '../Theme/ColorFlags'
import { selectedFlag } from '../Theme/selectedFlag'
import { CAccordionProps } from './Accordion.common'
import styles from './Accordion.module.css'

export interface AccordionProps extends CAccordionProps {
  class?: ClassList
  style?: CSSProperties
  open?: boolean
  shadow?: boolean
}

export const Accordion = component$(
  ({ color, open, shadow, ...props }: AccordionProps) => {

    const themeColor = selectedFlag(props, colorFlagsOptions)

    let opened = open ?? false

    let hasShadow = shadow ?? false

    return (
      <details open={opened}
        class={[
          styles.accordion,
          hasShadow && styles.shadow,
          props.class,
          styles[themeColor ?? 'primary'],
        ]}>
        <summary>
          <Slot name="title"></Slot>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-caret-down-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" stroke-width="0" fill="currentColor" />
          </svg>
        </summary>
        <Slot />
      </details>
    )
  },
)
