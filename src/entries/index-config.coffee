import config from './base-config'

misc_menu =
  label: 'Misc Applets'
  menu: [
    {
      label: 'Themes'
      url: '#frontdoor/themes'
    }
  ]

#config.navbarEntries = [ misc_menu ]
config.navbarEntries = [
  {
    label: "Bumblr"
    url: '#bumblr'
  }
  misc_menu
  ]
  

export default config
