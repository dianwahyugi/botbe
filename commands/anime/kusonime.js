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

export default {
    name: "kusonime",
    command: ["kusonime"],
    tags: "anime",
    desc: "Search anime details.",
    customPrefix: "",
    example: "one piece",
    limit: false,
    isOwner: false,
    isPremium: false,
    isBotAdmin: false,
    isAdmin: false,
    isGroup: false,
    isPrivate: false,
    run: async(m, {
        quoted,
        functions
    }) => {
        const result = await functions.api("api/kusonime", quoted.text);
        m.reply(functions.listObj(result.result), "KUSONIME");
    }
}