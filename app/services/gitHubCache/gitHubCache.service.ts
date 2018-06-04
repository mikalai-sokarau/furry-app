export default class {
  static $inject = ['$cacheFactory'];

  constructor($cacheFactory: any) {
    return $cacheFactory('gitHubCache', { capacity: 10 });
  }
}

// export default Cache;

// export default ($cacheFactory: any) =>
//   $cacheFactory('gitHubCache', { capacity: 10 });
