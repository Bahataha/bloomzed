import hmacMD5 from "crypto-js/hmac-md5";

export default class Config {
    getOS() {
        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        }

        return os;
    }

    data(json, cmd){
        const data = {
            json,
            cmd,
            version: "1004",
            imei: "db560bd52bd7f896",
            mktime: Date.now(),
            lang: "ru",
            os: this.getOS(),
            wl: "bloomzed",
            vermob: "1.4.9",
            vercode: '60723',
            datetime: "2021-07-07 03:48:49",
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }
        data.hash = hmacMD5(JSON.stringify(data), 'APPKEY17-17A8-4BAF-AA0F-B1258C5067A3').toString()

        return data
    }
}
