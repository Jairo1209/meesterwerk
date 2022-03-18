/**
 * Create <head> instance
 * Include this in every single page for SEO
 *
 *
 * @author Uncommon
 * @author Rutger Bakker <rutger@getuncommon.digital>
 */

import metaData from './meta.js'

export default function createHead (instance, options = {}) {
  const that = instance
  const fullUrl = `${process.env.BASE_URL}${that.$route.fullPath}`
  const title = that.entry.metaTitle ? `${that.entry.metaTitle} - ${process.env.SITENAME}` : process.env.SITENAME
  const description = that.entry.metaDescription ? that.entry.metaDescription : ''
  const shareImage = that.entry.ogShareImage ? that.entry.ogShareImage.fields.file.url : ''

  return {
    ...options,
    ...metaData(title, fullUrl, description, shareImage)
  }
}
