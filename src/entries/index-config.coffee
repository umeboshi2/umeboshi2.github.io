import config from './base-config'

misc_menu =
  label: 'More Applets'
  menu: [
    {
      label: 'Xyzzy'
      url: '#xyzzy'
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
    icon: '.fa.fa-book'
  }
  misc_menu
  ]
  

export default config
