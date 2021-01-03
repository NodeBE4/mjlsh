let Parser = require('rss-parser')
let fs = require('fs')
let querystring = require('querystring')
let urlMod = require('url')
let URL = urlMod.URL

let feedxUrls = {
  '不吐不快的有货君': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUL_6y6pug2cYoYCYvXDbgHA',
  '想做教育家的Klaus': 'https://www.youtube.com/feeds/videos.xml?playlist_id=UUZ4NwvuGYgFyjnRRJekdnHw',
  '書齋夜話': 'https://www.youtube.com/feeds/videos.xml?playlist_id=UUhRE0pMeij_O5FqWrSKBF-Q',
  '温相说党史': 'https://www.youtube.com/feeds/videos.xml?playlist_id=UUGtvPQxpuRrXeryEWxQkAkA',
  '羅文好公民':'https://www.youtube.com/feeds/videos.xml?playlist_id=UUr25xDGzTxeic8W_6mIZbug',
  '柴Sean你說':'https://www.youtube.com/feeds/videos.xml?playlist_id=UUV6AJqWMOIYnfbsK8niM55Q',
  '阳光卫视': 'http://www.youtube.com/feeds/videos.xml?playlist_id=PL1Flk3ukUUwYdm_N5gJj4b6t5hdQzbnNd',
  '方舟子': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUgTxdmY7L0I5MKWrrf0Ejtg',
  '崔永元': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUAq_xQV8pJ2Q_KOszzaYPBg',
  '李永乐': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUSs4A6HYKmHA2MG_0z-F0xw',
}

keys = Object.keys(feedxUrls)
jsonarr = keys.map(key => {
	return {'site': key, 'url':feedxUrls[key]}
})

let content = JSON.stringify(jsonarr, undefined, 4);
fs.writeFileSync(`./subs.json`, content)
