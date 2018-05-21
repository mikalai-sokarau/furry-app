export default function($cacheFactory) {
    const cache = $cacheFactory('gitHubCache');

    return {
        get: key => cache.get(key),
        put: (key, value) => cache.put(key, value),
        remove: key => cache.remove(key)
    };
}
