export async function handler () {
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: /* html */`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Architect Direct Upload Demo</title>
      </head>
      <body class="padding-32">
        <h1>Architect Direct Upload Demo</h1>
        <form method="post">
          <input type="file" name="file">
          <button type="submit">Upload</button>
        </form>
      </body>
      </html>
    `
  }
}