import iLogo from './tvc.new.03.svg'

export const brand = {
  logo: iLogo,
  brandName: 'Job Tracker',
  brandColor: '#34E97C',
  brandSizePhone: '5vw',
  brandSizeDesktop: '3.2vw',
}

export const menuItems = [
  {
    label: 'Schedule',
    href: '#schedule'
  },
  {
    label: 'Members',
    href: '#members',
  },
  {
    label: 'Log In',
    href: '#logIn',
  },
  {
    label: 'Log Out',
    href: '#logOut',
  }
]

export const breakPoints = {
  narrowWidthMax: 480,
  mediumWidthMin: 481,
  mediumWidthMax: 1024,
  wideWidthMin: 1025,
  // Phone
  phoneMaxWidth: 768,
  // Tablet Portrait
  tabletMinWidth: 769,
  tabletMaxWidth: 991,
  // Tablet Landscape
  // tabletMinWidth: 769,
  // tabletMaxWidth: 991,
  // Desktop
  desktopMinWidth: 992,
}

export default { brand, menuItems, breakPoints }
