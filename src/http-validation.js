const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function handleError(error) {
    throw new Error(error.message);
}

async function checkUrlsStatus(urls) {
    try {
        const statusArray = await Promise
            .all(urls
                .map(async url => {
                    const res = await fetch(url);
                    return res.status;
                }));
        return statusArray;
    } catch (error) {
        handleError(error);
    }
}

function createNewLinksArray(rawData) {
    return rawData
        .map(linkObject => Object
                .values(linkObject).join());
}

async function validateUrls(data) {
    const links = createNewLinksArray(data);
    const statusLinks = await checkUrlsStatus(links);

    return data.map((object, index) => ({
        ...object,
        status: statusLinks[index]
    }));
}

module.exports = validateUrls;