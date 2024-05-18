export const convertLanguage = (lng: string) => {
    if (lng == 'vn') {
        return {
            title: 'Vietnamese',
            value: 'en',
            image: require('@images/unauth/vietnam.png'),
        }
    }
    return {
        title: 'English',
        value: 'en',
        image: require('@images/unauth/america.png'),
    }
}