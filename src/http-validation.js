const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function checkUrlsStatus(urls) {
    const statusArray = await Promise.all(urls.map(async url => {
        const res = await fetch(url);
        return res.status;
    }));
    return statusArray;
}

function createNewLinksArray(rawData) {
    return rawData.map(linkObject => Object.values(linkObject).join());
}

async function validateUrls(data) {
    const links = createNewLinksArray(data);
    const statusLinks = await checkUrlsStatus(links);
    return statusLinks;
}

module.exports = validateUrls;