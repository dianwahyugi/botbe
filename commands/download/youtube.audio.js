/*<============== CREDITS ==============>
        Author: berkahesport
        Github: https://github.com/BerkahEsport/
        Contact me: 6289654279897

        Do not delete the source code.
        It is prohibited to
        sell and buy scripts
        without the knowledge
        of the script owner.

        Thank you to Allah S.W.T
<============== CREDITS ==============>*/

import { youtube } from "../../lib/js/ytdl.js";
export default {
    name: "yta",
    command: ["yta"],
    tags: "download",
    desc: "Download file mp3 with link youtube...",
    customPrefix: "",
    example: "https://youtu.be/jySbH-dLrYA",
    limit: 8,
    isOwner: false,
    isPremium: false,
    isBotAdmin: false,
    isAdmin: false,
    isGroup: false,
    isPrivate: false,
    run: async(m, {
        sock,
        text,
        functions
    }) => {
        if (!functions.isUrl(text, "youtu")) throw ("Enter the YouTube URL correctly!");
        try {
            const data = await functions.api("api/ytmp3", text);
            await sock.sendFile(m.from, data.result.link, data.result.title, "", m);
        } catch (error) {
            const data = await youtube.download(text);
            await sock.sendFile(m.from, data.audio.dlurl, data.title, "", m);
        }
    }
}