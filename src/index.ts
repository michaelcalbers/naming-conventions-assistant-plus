import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'
import CoreAssistant from '@sketch-hq/sketch-core-assistant'

const assistant: AssistantPackage = [
  CoreAssistant,
  async () => {
    return {
      name: 'naming-conventions-assistant-plus',
      rules: [],
      config: {
        rules: {
          '@sketch-hq/sketch-core-assistant/name-pattern-pages': {
            active: true,
            allowed: [],
            forbidden: ['^Page$', 'Page Copy', 'Page [0-9]'],
            ruleTitle: 'Give Pages informative descriptions (vs. their default names)',
          },
          '@sketch-hq/sketch-core-assistant/name-pattern-artboards': {
            active: true,
            allowed: ['^(\\d+\\.?)+.*'], // [],
            forbidden: [], // ['^Artboard$', 'Artboard Copy', 'Artboard [0-9]'],
            ruleTitle: 'Artboard names should start with numbers',
          },
          '@sketch-hq/sketch-core-assistant/name-pattern-groups': {
            active: true,
            allowed: [],
            forbidden: ['^Group$', 'Group Copy', 'Group [0-9]'],
            ruleTitle: 'Give Groups informative descriptions (vs. their default names)',
          },
          '@sketch-hq/sketch-core-assistant/name-pattern-shapes': {
            active: true,
            allowed: [],
            forbidden: [
              '^Rectangle$',
              'Rectangle Copy',
              'Rectangle [0-9]',
              '^Oval$',
              'Oval Copy',
              'Oval [0-9]',
              '^Line$',
              'Line Copy',
              'Line [0-9]',
              '^Triangle$',
              'Triangle Copy',
              'Triangle [0-9]',
              '^Star$',
              'Star Copy',
              'Star [0-9]',
              '^Polygon$',
              'Polygon Copy',
              'Polygon [0-9]',
            ],
            ruleTitle: 'Give Shapes informative descriptions (vs. their default names)',
          },
          '@sketch-hq/sketch-core-assistant/name-pattern-symbols': {
            active: true,
            allowed: ['(^.+)(([/].*)+)\\w$'],
            forbidden: [],
            ruleTitle: 'Symbol names should use forward slash grouping',
          },
        },
      },
    }
  },
]

export default assistant
