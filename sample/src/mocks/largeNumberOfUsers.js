export default new Array(500).fill(0).map((item, index) => ({
    id: index.toString(),
    name: `User ${index}`,
    age: index,
    hobby: 'whatever'
}));
