const menus = {
  main: `
    *----------------------------------------------------------*
    | newt [command] <options>                                 |
    |                                                          |
    | react .................. start a react site.             |
    | wordpress .............. start a wordpress site.         |
    | version ................ show current version of newtjs. |
    | help ................... show help menu for a command    |
    *----------------------------------------------------------*
    `,

  wordpress: `
    *---------------------------------------------------------*
    |                                                         |
    | newt wordpress <options>                                |
    |                                                         |
    | --option1, -o1 ......... an option to be defined later. |
    *---------------------------------------------------------*
    `,

  react: `
    *-------------------------------------------------------------------------------------------------------------------------------------*
    | newt react <options>                                                                                                                |
    |                                                                                                                                     |
    | --create-react-app, -cra .... use create-react-app to bootstrap your project (hint:  use for single-page apps).                     |
    | --next, -n .................. use next.js to bootstrap your project.         (hint:  use for server-rendered websites with Node.js) |
    | --gatsby, -g ................ use gatsby.js to boostrap your project.        (hint:  use for a static content-oriented website).    |
    *-------------------------------------------------------------------------------------------------------------------------------------*
  `
}

module.exports = args => {
  const subCommand = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCommand] || menus.main)
}