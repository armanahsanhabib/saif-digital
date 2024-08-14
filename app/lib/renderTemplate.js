import ejs from 'ejs'
import path from 'path'

export async function renderTemplate(templateName, data) {
  const filePath = path.resolve('app', 'templates', `${templateName}.ejs`)
  const html = await ejs.renderFile(filePath, data)
  return html
}
