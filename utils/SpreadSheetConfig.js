const { GoogleSpreadsheet } = require("google-spreadsheet");
require("dotenv").config();

console.log(process.env.MONGO_URI);

const doc = new GoogleSpreadsheet("1F-zYNbdet2GXHgYhhkTxVae8ZnGQq0hhO6Xj-1nMBvo");

const key = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCoupdxTYJhJrnX\nM3Saap9z/i0keNiioZUZ0NuMHboTD4FEwxcQ14nEHJNIE2XdjwBznVMjjDmwEOz4\nQlcfLPVkc3FCTrbTbTRDIwI426NNDxuKLxv0l2jzXz/7enLdrKs3kAS0xrH9kcrp\nD82vMe/ex5RBoy/On67IcONfD4mLJ9ti8HGWlKYo7s6U+VTVsBlk5kpQwI4OZ97V\n1pa0biSL6qqA7l+e9wc2Tw7SJ2Re5vAsmkCJad/6u6VhLlhBh10Xi70RsVsVv9gL\nmE1nrJkqIc47+d4jmMV78U9AZVgiTmaxNwrJwEsn9++OJa41LuUzzu0nHP48SNjG\nOAZHMEALAgMBAAECggEASz3SFOOUlZA4ZV/7ynRroMUjClWdfYCCxd1eWjBTbvaG\nFczNt2P2em6nuwdzcIa5k9T/YyW//+S8V8T1puBcmavlQMVrQAM9wAaXkhVX0CBB\njrCNTdhLI+RA2vryyCmcvI1Lm/XTH5lpG99BQLQLHJRxZ4fG5OROg/HbYuPB2Tx1\ngne4VboW7aL8XNV4ImPa6cgFFsufBm9oMe7UG+rkhJYztwinFIQRGjqr014aT6Mr\nrfiQsdTHAS2J70nonQSPIOVJzH9FFUXN1kxJ6A4TS6YecI14SM5aCtyNBEJTPvxD\n+sJfcKqH+CAecjZp18nnkp5JqQVRoYyeHQjRgbenSQKBgQDmOyfBzg5Z5Hmetm6b\nTb9gGQG/njRZ7tdLVODefHQ/sN88CtQ0lhoZ+Qnl7rX7BqewUEqHkVo5olQ+Pg9z\nfwh2OpzBM9rdWqjeq82bvDGAqG4VPEYZxNYxHFDTLYLWetAv1dY8iFiDM3GNgAuV\nXeFYqHBVRRrjja3tI0yYS/36TQKBgQC7nTRljyC5bqdTu5er9q35Cx2sVgW1vSxB\nZZX3wSJiyd6WnQbaJZNknOaklS9m2/hWaBhoj5k2XNlbGB614zzYHdjyg14sMQWD\n5eILnpG+u096C9pEXQUlMczTsqzDAdFaKHN0A3Ukh6aazAnAR4rNSD7oRGe+xLrT\ncgPodB8ftwKBgE3FScbDzkE7VoHwaih3+N+DUv3heRmv/nXp9BPzwmkJXD8yAUDK\nO4LuhxNusXZcZyS92o804F97oC1uVVXUYY1eezkgRRxk1YpySoAC8E3fl2AA/kUS\nIrBwOjU7uGivD8g42aeU/yFCrWb5C/Cmx8plC50iPNUFNO1X8TW45dA5AoGAfRM5\nujcoHtc5MCZQ4DDNHMmfV6PlnJpoJZT+3LPiI6/m98vppIcGcz3yuWhHuLAPKDOv\nig2pm8dclFFJMAM1LfMADfUsVBO+VIduIkbtbRVcz8WVFpxY8Mn5fmyQplTQ5+Ut\nyvr/HoJcvLgoDArl6yMt5RStgU2QK6TIHDFGCpMCgYBkKG+SKbSD8Ygt36gM+00K\nMlC91kbeV+y4zkKU0CIny2U1U/XsqG2YG/vdvNvr8MnWO89aHiKVIlupGdxLC+C6\n15wemC7WiD8c+IEpOMW0D1PEXjohiNPwX+d72afeSiafniyYICkmiUd/poYt88Dj\nkSYrEkd4p8/7Kxgf9iTF0Q==\n-----END PRIVATE KEY-----\n"

doc.useServiceAccountAuth({
    client_email: "obsidian@obsidian-331020.iam.gserviceaccount.com",
    private_key: key.replace(/\\n/g, "\n"),
})
    .then(() => {
        console.log(
            "Authenticated with google-sheets api as a service account"
        );
    })
    .catch((e) => {
        console.log(e);
    });

module.exports = doc;