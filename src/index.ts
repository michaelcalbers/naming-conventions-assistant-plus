import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const helloNC: RuleDefinition = {
  rule: async (context) => {
    context.utils.report('naming conventions here...')
  },
  name: 'naming-conventions-assistant-plus/hello-naming-conventions',
  title: 'Naming Conventions Plus',
  description: 'Reports a hello world message',
}

const assistant: AssistantPackage = async () => {
  return {
    name: 'naming-conventions-assistant-plus',
    rules: [helloNC],
    config: {
      rules: {
        'naming-conventions-assistant-plus/hello-naming-conventions': { active: true },
      },
    },
  }
}

export default assistant
