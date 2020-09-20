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
    label: "Events"
    url: "#crown/events"
    icon: '.fa.fa-calendar'
  },{
    label: "PMC"
    url: "#pmc"
    icon: '.fa.fa-ambulance'
  }
  #misc_menu
  ]
  

export default config
