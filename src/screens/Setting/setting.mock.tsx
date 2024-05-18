import { colors } from '@themes/colors'
import { iconSize } from '@utils/responsive'
import { Facebook, Youtube, Instagram, Twitch, Xrp, Bootstrap } from 'iconsax-react-native'

export const socials = [
    {
        id: 1,
        name: 'X',
        link: 'https://twitter.com/',
        icon: <Xrp color={colors.gray} size={iconSize.s} variant='Bold' />
    },
    {
        id: 2,
        name: 'Telegram',
        link: 'https://telegram.com/',
        icon: <Twitch color={colors.gray} size={iconSize.s2} variant='Bold' />
    },
    {
        id: 3,
        name: 'Facebook',
        link: 'https://facebook.com/',
        icon: <Facebook color={colors.gray} size={iconSize.s2} variant='Bold' />
    },
    {
        id: 4,
        name: 'Reddit',
        link: 'https://reddit.com/',
        icon: <Bootstrap color={colors.gray} size={iconSize.s2} variant='Bold' />
    },
    {
        id: 5,
        name: 'Youtube',
        link: 'https://youtube.com/',
        icon: <Youtube color={colors.gray} size={iconSize.s2} variant='Bold' />
    },
    {
        id: 6,
        name: 'Instagram',
        link: 'https://instagram.com/',
        icon: <Instagram color={colors.gray} size={iconSize.s2} variant='Bold' />
    }
]