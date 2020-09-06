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
            ruleTitle: 'Pages have informative descriptions (not default names like "Page 1")',
          },
          '@sketch-hq/sketch-core-assistant/name-pattern-artboards': {
            active: true,
            allowed: ['^(\\d+\\.?)+.*'], // [],
            forbidden: [], // ['^Artboard$', 'Artboard Copy', 'Artboard [0-9]'],
            ruleTitle:
              'Artboard names start with numbers, e.g. "1.0.0 Splash Screen" and have informative descriptions (not default names like "Artboard")',
          },
          '@sketch-hq/sketch-core-assistant/name-pattern-groups': {
            active: true,
            allowed: [],
            forbidden: ['^Group$', 'Group Copy', 'Group [0-9]'],
            ruleTitle: 'Groups have informative descriptions (not default names like "Group")',
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
              '^Mask$',
              'Mask Copy',
              'Mask [0-9]',
            ],
            ruleTitle:
              'Layers have informative descriptions (not default names like "Rectangle", "Oval", or "Mask")',
          },
          '@sketch-hq/sketch-core-assistant/name-pattern-symbols': {
            active: true,
            allowed: ['(^.+)(([/].*)+)\\w$'],
            forbidden: [],
            ruleTitle: 'Symbols use forward-slash grouping, e.g. "Icon / Paste"',
          },
        },
      },
    }
  },
]

export default assistant
