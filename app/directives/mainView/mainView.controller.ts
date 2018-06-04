export default function($state: any) {
    this.isCategoriesPage = $state.current.name === 'search.categories';
}
