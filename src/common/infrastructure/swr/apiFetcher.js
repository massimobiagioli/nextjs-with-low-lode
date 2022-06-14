const apiFetcher = (...args) => fetch(...args).then((res) => res.json());

export default apiFetcher;
