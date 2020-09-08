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
    label: "Index"
    url: "#crown"
    icon: '.fa.fa-list'
  }
  #misc_menu
  ]
  

export default config
