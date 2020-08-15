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
    label: "EbCsv"
    url: "#ebcsv"
  },{
    label: "crown"
    url: "#crown"
  },{
    label: "moviedb"
    url: "#moviedb"
  },{
    label: "tvmaze"
    url: "#tvmaze"
  }
  #misc_menu
  ]
  

export default config
