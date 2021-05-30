import numbro from 'numbro';
import languages from "numbro/dist/languages.min" ;

Object.getOwnPropertyNames(languages).forEach((lang) => {
  numbro.registerLanguage(languages[lang], true);
});
numbro.setLanguage("pt-Br");

export default function formatValue(value:number) {
  return(
    numbro(value).formatCurrency({mantissa: 2, spaceSeparated: true, thousandSeparated: true})
  )
}