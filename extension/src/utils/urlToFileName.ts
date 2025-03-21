const urlToFilename = (_url: string) =>
  _url.split('.com/')[1].split('?')[0].replace('/', '')


export default urlToFilename
