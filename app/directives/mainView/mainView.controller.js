export default function($state) {
    this.isWelcomePage = $state.current.name === 'hello';
}
