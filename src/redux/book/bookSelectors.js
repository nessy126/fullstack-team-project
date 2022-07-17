// Селекторы для получения:
// 1. всего массива книг из базы данных
// 2. массива с книгами со статусом goingToRead для рендера в селекте-выпадашке в компоненте Select
// 3. Если у юзера нет активной тренировки и он попадает на странице training для создания новой тренировки, то сразу запускается юз еффект для получения списка книг со статусом goingToRead.

const getAllBooks=(state)=>state.book.book;

const getListGoingToRead=(state)=>{
    const allBooks= getAllBooks(state)|| [];
    const listGoingToRead =allBooks?.filter(book=>{
        return book.status==="goingToRead"});
    return listGoingToRead;
};
const getListInReading = (state)=>{
    const allBooks= getAllBooks(state)|| [];
    return allBooks?.filter(book=>book.status==="inReading")
}
const getListFinished = (state)=>{
    const allBooks= getAllBooks(state)|| [];
    return allBooks?.filter(book=>book.status==="finished")
}


const bookSelectors={
    getAllBooks,
    getListGoingToRead,
    getListInReading,
    getListFinished
}

export default bookSelectors;