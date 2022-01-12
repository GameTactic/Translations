import cs from './messages.cs.json'
import da from './messages.da.json'
import de from './messages.de.json'
import el from './messages.el.json'
import en from './messages.en.json'
import es from './messages.es.json'
import fi from './messages.fi.json'
import fr from './messages.fr.json'
import ja from './messages.ja.json'
import hu from './messages.hu.json'
import it from './messages.it.json'
import nl from './messages.nl.json'
import no from './messages.no.json'
import pl from './messages.pl.json'
import ro from './messages.ro.json'
import ru from './messages.ru.json'
import sr from './messages.sr.json'
import sv from './messages.sv.json'
import tr from './messages.tr.json'
import uk from './messages.uk.json'
import zh from './messages.zh.json'

export const defaultLocale = 'en'
export const locales = { cs, da, de, el, en, es, fi, fr, ja, hu, it, nl, no, pl, ro, ru, sr, sv, tr, uk, zh }

const _localeFiles: { [ key: string ]: string } = {}
Object.keys(locales).forEach((value: string) => {
  _localeFiles[value] = `./messages.${value}.json`
})

export const localeFiles: { [ key: string ]: string } = _localeFiles
