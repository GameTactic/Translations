import en from './messages.json'
import no from '../dist/messages.no.json'
export const defaultLocale = 'en'
export const locales = { en, no }

const _localeFiles: { [ key: string ]: string } = {}
Object.keys(locales).forEach((value: string) => {
  _localeFiles[value] = `./messages.${value}.json`
})

export const localeFiles: { [ key: string ]: string } = _localeFiles
