export default ({markup, css}) => {
    return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          >
          <title>IIITL Classroom</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
          <link rel="icon" href="https://iiitl.ac.in/pgdds1/assets/img/logo.png" type="image/x-icon">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
          <style>
              a{
                text-decoration: none;
                color: #bb4d00
              }
              .abc{
                background-color: coral;
              }
          </style>
        </head>
        <body style="margin:0" >
          <div id="root">${markup}</div>
          <style id="jss-server-side" class="abc">${css}</style>
          <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
      </html>`
}
